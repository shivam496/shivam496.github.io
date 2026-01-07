# Shivam Singh - Personal Portfolio

A modern, distinctive portfolio website showcasing my journey as a Senior Software Engineer.

🌐 **Live at:** [shivam496.github.io](https://shivam496.github.io)

## About Me

Senior Member of Technical Staff at **Salesforce**, formerly **Software Engineer II at Microsoft** (5+ years). 

Highlights:
- 🏆 **Grand Winner** - Microsoft Global Hackathon 2023 (demoed to Satya Nadella)
- 📜 **Patent Holder** - Customized User Interface Templatization
- 🎯 **ACM ICPC Finalist** - Rank 22 at Asia Kolkata 2016
- 👨‍💻 Building apps that serve **10M+ users**

## Features

- ✨ **Distinctive Design** — Dark theme with warm gold accents, elegant typography
- 📱 **Fully Responsive** — Looks great on all devices
- ⚡ **Smooth Animations** — Scroll reveal, cursor glow, floating elements
- 🎯 **SEO Optimized** — Meta tags, Open Graph, semantic HTML
- 🚀 **Fast Loading** — No frameworks, pure HTML/CSS/JS
- ♿ **Accessible** — Semantic markup, keyboard navigation, ARIA labels

## Sections

1. **Hero** — Introduction with animated stats (5+ years, 10M+ users, 1 patent)
2. **About** — Story, achievements, education highlights
3. **Experience** — Salesforce & Microsoft roles with detailed accomplishments
4. **Projects** — Hackathon winner, CodeCraft, personal apps (Kloset, Ritual)
5. **Skills** — Mobile dev, languages, frameworks, tools
6. **Achievements** — Awards, patents, academic honors
7. **Contact** — Email, LinkedIn, GitHub, Phone

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Playfair Display, DM Sans, JetBrains Mono)

## Project Structure

```
shivam496.github.io/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactions & animations
├── assets/
│   └── images/         # Images & media
└── README.md
```

## Deployment to GitHub Pages

### Quick Deploy

```bash
cd shivam496.github.io
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/shivam496/shivam496.github.io.git
git branch -M main
git push -u origin main
```

Your site will be live at `https://shivam496.github.io` within minutes!

## Customization

### Add Your Photo

Replace the placeholder in the About section:

```html
<div class="image-placeholder">
    <!-- Replace with your actual image -->
    <img src="assets/images/profile.jpg" alt="Shivam Singh" />
</div>
```

### Update Links

1. **GitHub** — Already set to `github.com/shivam496`
2. **LinkedIn** — Already set to `linkedin.com/in/i-am-shivam`
3. **Email** — Already set to `iamshivam26@gmail.com`
4. **Project links** — Add actual app store/demo links

### Change Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --accent-primary: #d4a574;    /* Main accent color */
    --accent-secondary: #e8c9a0;  /* Lighter accent */
    --bg-primary: #0a0a0b;        /* Main background */
}
```

## Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server
# Install "Live Server" extension and click "Go Live"
```

Then open `http://localhost:8000`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Made with ♥ by Shivam Singh
