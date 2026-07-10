# ViziScreen - Phone Screen Size Comparison Tool 📱📐

ViziScreen is a modern, interactive web application built with **Astro**, **Tailwind CSS v4**, and **DaisyUI** that allows users to compare and overlay phone and tablet screen dimensions visually.

It runs entirely client-side, is fully responsive, and saves profiles locally so custom screens are preserved on reload.

---

## ✨ Features

- **Dynamic Visual Overlay**: Overlay screen profiles on top of each other with configurable alignments (Centered, Bottom-Left, Top-Left) to inspect physical differences.
- **Side-by-Side Comparison**: Stand devices upright next to each other on a virtual desk (bottom-aligned) to compare shapes and ratios.
- **1:1 Physical Size Calibration**: Place a standard credit card (or ID card) against your screen and adjust the calibration slider. ViziScreen calculates your monitor's exact PPI to display screens at their true, real-world physical size.
- **Device Customization**:
  - Drag sliders to modify diagonals from 3.0" to 15.0"+
  - Enter arbitrary aspect ratios (e.g., `19.5:9`, `16:9`, `4:3`, `1:1`)
  - Pick vibrant custom border/fill colors
  - Enter resolutions to calculate sharpness (PPI) and megapixel density
- **Smart Autofill Presets**: Instantly populate values for popular devices like the iPhone 15 Pro Max, Samsung Galaxy S24 Ultra, Pixel 8 Pro, Nintendo Switch OLED, iPad Pro 11-inch, and more.
- **Live Specs Comparison Table**: Auto-computes width, height, and area in both imperial (inches, sq inches) and metric (cm, sq cm) systems, alongside relative percentage differences.
- **Modern UI**: Designed with glassmorphism panels, dark mode, smooth hover effects, scale highlights, and interactive camera notches/bezels.

---

## 🛠️ Technology Stack

- **Framework**: Astro (v7.0.7+)
- **Styling**: Tailwind CSS v4 & DaisyUI (Vite integration)
- **State Management**: Client-side reactive JavaScript with local storage persistence
- **CI/CD**: GitHub Actions deploying to GitHub Pages

---

## 🚀 Setup & Development

All commands are run from the root of the project:

### 1. Install Dependencies
```sh
npm install
```

### 2. Start Local Development Server
```sh
npm run dev
```
For background server control (recommended in the project agent rules):
```sh
astro dev --background
```
Manage it with:
- `astro dev status`
- `astro dev logs`
- `astro dev stop`

### 3. Build Production Site
```sh
npm run build
```
This will compile the optimized static application into the `./dist/` directory.

---

## 📦 GitHub Pages Deployment

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.

To enable GitHub Pages:
1. Go to your repository settings on GitHub.
2. Select **Pages** on the left menu.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The workflow will automatically publish the site at `https://PrusWielki.github.io/phone-screen-size-comparison/`.

---

## 📐 Mathematical Model

Screens are calculated using the Pythagorean theorem:
$$Width^2 + Height^2 = Diagonal^2$$

For an aspect ratio $W:H$ ($r = W/H$):
$$Height = \frac{Diagonal \times r}{\sqrt{r^2 + 1}}$$
$$Width = \frac{Diagonal}{\sqrt{r^2 + 1}}$$

The application performs these calculations reactively in the browser to draw pixel-perfect SVG/HTML panels representing the physical aspect ratios.
