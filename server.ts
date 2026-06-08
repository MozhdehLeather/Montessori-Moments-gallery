import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

const API_BASE_URL = "https://montessoryimageapi.pricelesscapture.com";

// JSON image response from the real API
app.get("/api/images", async (req, res) => {
  try {
    const apiResponse = await fetch(`${API_BASE_URL}/api/images`);
    if (!apiResponse.ok) {
      throw new Error(`Real API images endpoint returned status: ${apiResponse.status}`);
    }
    const data = await apiResponse.json();
    res.json(data);
  } catch (error: any) {
    console.error("Error fetching images from real API:", error);
    res.status(500).json({ error: error.message });
  }
});

// JSON random featured image response from the real API
app.get("/api/random", async (req, res) => {
  try {
    const apiResponse = await fetch(`${API_BASE_URL}/api/random`);
    if (!apiResponse.ok) {
      throw new Error(`Real API random endpoint returned status: ${apiResponse.status}`);
    }
    const data = await apiResponse.json();
    res.json(data);
  } catch (error: any) {
    console.error("Error fetching random image from real API:", error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy route for thumbs
app.get("/thumbs/:id", (req, res) => {
  res.redirect(`${API_BASE_URL}/thumbs/${req.params.id}`);
});

// Proxy route for downloads to serve image directly as an attachment bypasses browser origin boundaries
app.get("/downloads/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const targetUrl = `${API_BASE_URL}/downloads/${id}`;
    const apiResponse = await fetch(targetUrl);
    
    if (!apiResponse.ok) {
      return res.status(apiResponse.status).send("Failed to fetch image from source API");
    }

    const arrayBuffer = await apiResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Content-Disposition", `attachment; filename="Image_${id}"`);
    res.setHeader("Content-Type", apiResponse.headers.get("content-type") || "image/jpeg");
    res.send(buffer);
  } catch (error: any) {
    console.error("Proxy download error:", error);
    res.status(500).send("Error downloading image");
  }
});

// Direct redirection to download the whole ZIP archive from the real API
app.get("/api/download-all", (req, res) => {
  res.redirect(`${API_BASE_URL}/api/download-all`);
});


// Vite Setup for Dev and SPA static handling for Prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Montessori Gallery Server running on http://localhost:${PORT}`);
  });
}

startServer();
