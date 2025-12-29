# Andrea Salumeria — Official Website  
**Fine Italian Deli & Grocery • Jersey City, NJ • Since 1975**

This repository contains the full website for **Andrea Salumeria**, a family‑owned Italian deli and grocery serving Jersey City for nearly 50 years.  
The site includes our menu, imported specialties, gallery, history, and more — all in a clean, modern layout with a rotating hero carousel.

---

## 📍 Live Website  
Hosted via GitHub Pages:  
**https://ny88257ai.github.io/andrea.salumeria-/**

Scan the QR code below to open the site on your phone:

![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ny88257ai.github.io/andrea.salumeria-/)

---

## 📁 Project Structure

```
andrea.salumeria-/
│ index.html
│ styles.css
│ script.js
│ manifest.json
│ README.md
│
└── photos/
    ├── hero/        # Homepage carousel images
    ├── gallery/     # Food & store photography
    ├── logo/        # Branding assets
    └── social media/
```

---

## 🧾 Features

### ✔ Hero Image Carousel  
A rotating set of deli, sandwich, and product photos.

### ✔ Accordion Menu Sections  
All menu categories are expandable/collapsible:

- Sandwich Menu  
- Imported Cheeses  
- Breads  
- Deli Meats  
- Salads & Soups  
- Grocery Items  
- Catering Trays  
- **Coming Soon: Andrea’s Apparel**

### ✔ QR Codes (3 Locations)  
QR codes appear:

- Near the “Order a Sandwich” button  
- In the Menu section  
- In the Footer  

All link directly to the live website.

### ✔ Mobile‑Friendly Navigation  
Clean slide‑down menu on phones and tablets.

### ✔ Gallery Grid  
A responsive grid of high‑quality food and store images.

---

## 🛠️ Updating the Website

### **Update Menu Items**
Edit the accordion content inside `index.html`.

### **Update Photos**
Add or replace images inside:

```
/photos/hero
/photos/gallery
/photos/logo
```

Then update paths in `index.html` if needed.

### **Update Carousel Images**
Modify the array in `script.js`:

```js
const heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  ...
];
```

### **Update Styles**
All styling is in `styles.css`.

### **Update QR Code**
QR codes automatically point to the GitHub Pages URL.  
If the URL changes, update the QR code links in `index.html`.

---

## 👕 Coming Soon: Andrea’s Apparel  
Show your love for Andrea Salumeria with exclusive merch — shirts, hats, hoodies, and more.  
A full apparel line inspired by our 50‑year heritage is currently in development.  
Stay tuned for launch details and pre‑order information.

---

## 👨‍🍳 About Andrea Salumeria  
A Jersey City institution since 1975, Andrea Salumeria is known for:

- Homemade mozzarella  
- Famous Italian sandwiches  
- Imported cheeses & meats  
- Fresh breads  
- Authentic grocery items  
- Family tradition and hospitality  

---

## 📬 Contact  
For updates, menu changes, or website improvements, reach out to the repository owner.

---

**© 2025 Andrea Salumeria — Fine Italian Deli & Grocery**
