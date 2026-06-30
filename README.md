# RetailFlow 🚀 | Enterprise Inventory & Analytics Engine

RetailFlow is a high-fidelity, interactive inventory management dashboard designed to bridge technical data structures with a premium, user-centric interface. 

Originally engineered as a backend-driven data management application, this iteration introduces a completely bespoke front-end architecture built from scratch with clean, semantic web technologies.

----

## ✨ Features & Functionality

* **System Authentication Gate:** A sleek, styled secure landing portal designed for corporate and administrative use access.
* **Live Analytics Engine:** Real-time client-side calculation of business metrics, including aggregate stock valuation (dynamically formatted to South African Rand `en-ZA` standard currency structures), total item tracking, and exact product category count splits.
* **Dynamic Form Interaction:** Context-aware conditional field rendering via JavaScript. The input architecture intelligently switches fields based on category selection (e.g., dynamic text fields for Electronics warranties vs. accessible custom radio button button matrices for Clothing sizes).
* **Responsive Workspace Grid:** A fluid two-column desktop workspace layout built using CSS Grid and Flexbox that gracefully collapses into a stacked column format for mobile configurations.

---

## 🎨 Design Philosophy & UI Architecture

The interface utilizes a custom, modern dark-mode aesthetic specifically tailored for high-contrast technical software:
* **Background Main:** `#0b0f19` (Deep Obsidian Midnight)
* **Card Ecosystem:** `#151c2c` (Sleek Charcoal Panels)
* **Primary Accents:** `#d4af37` (Premium Gold Highlights)

All elements focus heavily on scannability, structural hierarchy, and responsive feedback, using fluid hover effects, custom active radio buttons (`:has()` selectors), and professional typographic spacing.

---

## 🛠️ Built With

* **HTML5:** Semantic architecture layout structures.
* **CSS3:** Custom native CSS variables, flexbox, CSS grid tracking, and modern responsive query frameworks.
* **Vanilla JavaScript (ES6+):** Complete DOM manipulation, conditional class state toggling, event delegation, and real-time state array metric tracking.

---

## 📂 Project Structure

```text
├── index.html        # System Authentication / Gateway View
├── dashboard.html    # Primary Analytics & Inventory Ledger UI
├── style.css         # Core Design System & Global Stylesheet
└── app.js            # Reactive Interface Logic & Metrics Calculator
