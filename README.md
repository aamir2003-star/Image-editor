# 📸 Premium Glassmorphic Image Editor

A sleek, modern, client-side web application built with semantic HTML5, modern CSS3, and vanilla JavaScript to edit and enhance images in real time using HTML5 Canvas.

### 🔗 Live Demo
Experience the working app here: **[https://image-editor-mocha-three.vercel.app/](https://image-editor-mocha-three.vercel.app/)**

---

## ✨ Features

- 💎 **Modern Glassmorphic UI**: Vibrant gradients, custom range sliders, premium dark-mode aesthetic, and high-performance backdrop filters (`backdrop-filter: blur()`).
- 🎛️ **9+ Real-Time Filters**:
  - **Brightness & Contrast**: Calibrate exposure and light distribution.
  - **Saturation & Hue Rotation**: Shift colors or intensify saturation.
  - **Blur & Opacity**: Add dreamy focus effects or blend transparency.
  - **Grayscale, Sepia, Invert**: Instantly toggle classic styles and monochrome views.
- 🎨 **13 Premium Presets**: Apply ready-to-go aesthetics with a single click:
  - *Neon Glow, Moody Dark, Pastel Soft, Cinematic Teal Orange, Faded Memory, Soft Glow, Cyberpunk, Old School, Black & White, Vintage Warm, Cool Fade, Dramatic, and Dreamy*.
- 💾 **Safe & Client-Side**: All rendering happens securely in the browser using the HTML5 Canvas API. Your images are never uploaded to any server.
- ⚡ **Instant Workflows**: Easy image uploading, resetting filter states, clearing the workspace, and downloading high-quality PNG edits locally.

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES6)
- **Canvas rendering**: HTML5 2D Context API (`CanvasRenderingContext2D.filter`)
- **Styling**: Vanilla CSS3 with Custom Properties (variables), CSS Grid, and Flexbox
- **Typography & Icons**: Inter Font, Remix Icons (`remixicon`)

---

## 📂 Project Structure

```bash
Image-editor/
├── index.html     # Semantic structure and controls layout
├── script.js      # Dynamic filters generation, presets handling, and Canvas manipulation
├── style.css      # Core grid layout, component styling, sliders, and responsive media queries
├── theme.css      # Global design tokens (HSL color system, radius, shadows, glassmorphism config)
└── README.md      # Project documentation
```

---

## 🚀 How to Run Locally

Since the application uses pure front-end technologies, you can run it in a few seconds:

1. Clone or download the repository:
   ```bash
   git clone https://github.com/aamir2003-star/Image-editor.git
   cd Image-editor
   ```
2. Open `index.html` directly in your browser:
   - Double-click `index.html` in your file manager, or
   - Use a VS Code extension like **Live Server**, or
   - Start a simple local server via Python:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your web browser.

---

## 📖 How to Use

1. Click **Choose Image** and select any local image file.
2. Adjust the sliders in the **Filters** section to fine-tune the image, or select a preset under **Presets** for an instant filter setup.
3. If you want to start over, click **Reset** to return all filters back to default.
4. Click **Download** to export your edited image as a lossless PNG.
5. Click **Clear-Image** to close the current image and pick a new one.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
