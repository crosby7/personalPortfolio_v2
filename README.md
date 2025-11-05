# Personal Portfolio - Single Page Application

A modern, responsive personal portfolio website built as a Single Page Application (SPA) using vanilla HTML, CSS, and JavaScript.

## 🌟 Features

### Single Page Application

- **Smooth Navigation**: All content loads dynamically without page refreshes
- **Active Section Highlighting**: Navigation automatically highlights the current section
- **Smooth Scrolling**: Seamless transitions between sections
- **Mobile-First Design**: Optimized for all device sizes

### Modern Design

- **Clean & Professional**: Modern UI with smooth animations
- **Gradient Accents**: Beautiful gradient color schemes
- **Responsive Layout**: Adapts to desktop, tablet, and mobile devices
- **Accessibility**: Screen reader friendly with proper ARIA labels

### Interactive Features

- **Contact Form**: Functional contact form with validation
- **Typing Animation**: Dynamic typing effect for hero subtitle
- **Scroll Animations**: Elements fade in as you scroll
- **Particle Background**: Animated particles on hero section (desktop only)
- **Back to Top**: Smooth scroll to top functionality

### Performance Optimized

- **Throttled Scroll Events**: Optimized scroll performance
- **Intersection Observer**: Efficient scroll-based animations
- **Debounced Functions**: Optimized event handling
- **Mobile Optimizations**: Reduced animations on mobile devices

## 📱 Sections

1. **Hero/Home** - Introduction with profile image and call-to-action buttons
2. **About** - Personal information and downloadable resume
3. **Skills** - Technical skills organized by category with icons
4. **Projects** - Featured projects with live demos and source code links
5. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A text editor (VS Code recommended)
- Optional: Local server for development

### Installation

1. **Clone or Download**

   ```bash
   git clone https://github.com/yourusername/personalPortfolio_v2.git
   cd personalPortfolio_v2
   ```

2. **Add Your Content**

   - Replace placeholder text with your information
   - Add your images to the `assets/images/` folder
   - Update social media links and contact information
   - Customize colors and styling in `css/style.css`

3. **Add Your Images**
   - `profile.jpg` (400x400px) - Your profile picture
   - `about.jpg` (500x600px) - About section image
   - `project1.jpg`, `project2.jpg`, `project3.jpg` (600x400px) - Project screenshots

### Quick Setup Checklist

- [ ] Update your name in `index.html`
- [ ] Replace placeholder email and contact info
- [ ] Add your profile picture
- [ ] Update the projects section with your actual projects
- [ ] Add your social media links
- [ ] Update skills section with your technologies
- [ ] Add your resume PDF to assets folder
- [ ] Customize colors in CSS if desired

## 📂 Project Structure

```
personalPortfolio_v2/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All CSS styles and responsive design
├── js/
│   └── script.js          # SPA functionality and interactions
├── assets/
│   ├── images/            # Your images (profile, projects, etc.)
│   └── README.md          # Assets documentation
└── README.md              # This file
```

## 🎨 Customization

### Colors

The main color scheme uses a purple gradient. To change colors, update these CSS variables in `style.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* You can replace with your preferred colors */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Fonts

The portfolio uses 'Poppins' from Google Fonts. To change the font:

1. Update the Google Fonts link in `index.html`
2. Update the font-family in CSS:
   ```css
   body {
     font-family: "Your-Font-Name", sans-serif;
   }
   ```

### Content

- **Personal Info**: Update all placeholder text in `index.html`
- **Projects**: Replace the project data in both HTML and JavaScript
- **Skills**: Update the skills section with your technologies
- **Social Links**: Add your actual social media URLs

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Advanced Features

### Contact Form Integration

The contact form is ready to integrate with:

- Netlify Forms (free)
- Formspree (free tier available)
- EmailJS (client-side email sending)
- Your own backend API

### Analytics

Easy to integrate with:

- Google Analytics
- Google Tag Manager
- Other analytics platforms

### Performance

- Optimized for Google PageSpeed Insights
- Follows web accessibility guidelines
- SEO-friendly structure

## 📈 Performance Tips

1. **Image Optimization**:

   - Compress images before adding them
   - Use WebP format for better compression
   - Consider lazy loading for project images

2. **Code Minification**:

   - Minify CSS and JavaScript for production
   - Use a build tool like Webpack or Gulp

3. **CDN Integration**:
   - Consider using a CDN for faster loading
   - Font Awesome and Google Fonts are already CDN-hosted

## 🚀 Deployment

### GitHub Pages (Free)

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Create account at netlify.com
2. Connect your GitHub repository
3. Deploy automatically on every commit

### Vercel (Free)

1. Create account at vercel.com
2. Import your GitHub repository
3. Deploy with zero configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 💡 Tips for Success

1. **Keep it Updated**: Regularly update your projects and skills
2. **Quality Over Quantity**: Showcase your best work
3. **Personal Touch**: Add personality to make it uniquely yours
4. **Performance**: Optimize images and test loading speed
5. **Mobile First**: Ensure it works great on mobile devices
6. **SEO**: Use proper meta tags and descriptions

## 📞 Need Help?

If you need help customizing your portfolio:

1. Check the comments in the code files
2. Look at the assets README for image guidelines
3. Test responsiveness using browser dev tools
4. Validate your HTML and CSS

---

**Happy coding! 🚀**

Remember to make this portfolio your own by adding your personal projects, experiences, and style preferences.
