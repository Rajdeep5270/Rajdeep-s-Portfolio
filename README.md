# 🚀 Rajdeep Singh's Portfolio

A modern, responsive, and visually stunning portfolio website showcasing full-stack development skills, projects, and technical expertise. Built with **Tailwind CSS**, **vanilla JavaScript**, and modern web standards.

## 🎬 Live Preview

![Rajdeep's Portfolio Demo](videos/Rajdeep's%20Portfolio.gif)

*Portfolio website in action - showcasing smooth animations, responsive design, and interactive features*

## ✨ Features

- **Modern Design** - Clean, contemporary UI with glassmorphism effects and smooth animations
- **Dark Mode Support** - Seamless light/dark theme toggling with local storage persistence
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **Smooth Scrolling** - Custom CSS for elegant scroll behavior
- **Interactive Elements** - Hover effects, animations, and smooth transitions
- **Contact Form** - Integrated email functionality with form validation
- **SEO Optimized** - Proper semantic HTML and meta tags
- **Performance Focused** - Lightweight, no unnecessary dependencies

## 🎯 Sections

1. **Navigation Bar** - Fixed header with smooth scroll navigation and mobile menu
2. **Hero Section** - Eye-catching introduction with key statistics
3. **About Section** - Professional biography with achievements and expertise highlights
4. **Skills Section** - Comprehensive technical stack organized by category:
   - Frontend Stack (React.js, Tailwind, Bootstrap, JavaScript)
   - Backend Stack (Node.js, Express, MongoDB, PostgreSQL)
   - Core & Tools (C/C++, Git, Deployment platforms)
5. **Projects Section** - Featured work with descriptions, tech stack, and links
6. **Contact Section** - Professional contact form with email integration
7. **Footer** - Social links and copyright information

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **JavaScript (ES6+)** - Interactive features and DOM manipulation

### Tools & Utilities
- **Responsive Design** - Mobile-first approach with breakpoints
- **CSS Animations** - Smooth transitions and keyframe animations
- **SVG Icons** - Scalable vector graphics for icons
- **Custom CSS** - Additional styling for smooth scroll behavior

### Backend Integration (Contact Form)
- **Mailto Integration** - Opens default email client for contact submissions
- **Form Validation** - Client-side input validation with error handling

## 📁 Project Structure

```
Rajdeep's Portfolio/
├── index.html                          # Main HTML file
├── css/
│   └── scroll.css                     # Custom scroll styling
├── js/
│   ├── script.js                      # Main JavaScript logic
│   ├── mail.js                        # Form submission handler
│   ├── animation.script.js            # Animation utilities
│   └── tailwind.configuration.js      # Tailwind config
├── images/
│   └── Professional Image.png         # Profile photo
├── videos/
│   └── Restaurant Management System.gif # Project demo
├── fonts/                             # Custom fonts directory
├── documents/                         # Resume/documents
├── extra/                             # Additional assets
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works as static HTML

### Installation

1. **Clone or Download the repository**
   ```bash
   git clone https://github.com/Rajdeep5270/Portfolio.git
   cd Rajdeep's\ Portfolio
   ```

2. **Open in Browser**
   - Double-click `index.html`, or
   - Use a local server for best results:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the Portfolio**
   - Open `http://localhost:8000` in your browser

## 💻 Key Features & Implementation

### Responsive Navigation
- Fixed header with smooth scroll behavior
- Mobile hamburger menu for smaller screens
- Active navigation highlights

### Theme Toggle
- Light/Dark mode switching
- Preferences saved to localStorage
- Consistent theming across all components

### Contact Form
- Real-time form validation
- Prevents empty submissions
- Opens default email client with pre-populated data
- No server required (mailto: integration)

### Animations
- Reveal animations on scroll
- Hover effects on cards and buttons
- Smooth transitions throughout
- Animated bounce effects on badges

### Responsive Images
- Professional image with hover effects
- Grayscale to color transition
- Optimized for all screen sizes

## 📝 Component Details

### Navigation Bar
- Sticky positioning for always-visible navigation
- Smooth scroll anchors to each section
- "Hire Me" CTA button
- Theme toggle button
- Mobile-responsive menu

### Hero Section
- Large, impactful heading
- Professional introduction
- Tech stack badges
- Action buttons (Explore Work, Contact Me)
- Statistics cards showing:
  - 1000+ Hours of Coding
  - 15+ Projects Built
  - 150+ DSA Problems Solved
  - 8+ Languages Learned

### About Section
- Professional biography
- Key achievements and highlights
- Statistics display:
  - 10K+ Lines of Production Code
  - 50+ Git Commits per Project
  - 99+ Project Completion Rate
- Download Resume button
- Profile image with effects

### Skills Section
- Grid layout for organized display
- Three main categories:
  1. Frontend Stack
  2. Backend Stack
  3. Core & Tools
- Icon-based visual hierarchy
- Detailed descriptions for each skill

### Projects Section
- Featured project showcases
- Project demo GIFs/images
- Detailed descriptions
- Technology tags
- GitHub repository links
- Live demo links
- Grid layout for future projects

### Contact Section
- Professional contact form
- Fields: Name, Email, Message
- Form validation
- Email integration
- Responsive design

## 🎨 Styling & Customization

### Tailwind CSS Classes Used
- Color utilities (indigo, purple, pink, slate)
- Spacing and layout utilities
- Responsive breakpoints (md, lg)
- Dark mode variants
- Animation and transition utilities

### Custom CSS Variables
- Gradient backgrounds
- Blur effects
- Custom animations
- Scroll behavior

### Color Scheme
- **Primary**: Indigo (#4f46e5)
- **Secondary**: Purple (#a855f7), Pink (#ec4899)
- **Neutral**: Slate (#0f172a to #f1f5f9)
- **Accents**: Amber, Emerald for highlights

## 🔧 Customization Guide

### Update Personal Information
Edit these sections in `index.html`:
- Name and title (line ~167)
- Bio and description (line ~174)
- Skills badges (lines ~188-200)
- Statistics (lines ~213-250)
- About section content (line ~336)

### Modify Color Scheme
Search for Tailwind color classes:
- `indigo-600` → Change to your primary color
- `purple-600` → Change to your secondary color
- `pink-500` → Change to your accent color

### Update Social Links
Modify these URLs in footer (bottom of HTML):
- GitHub profile
- LinkedIn profile
- Email address
- LeetCode profile

### Add/Modify Projects
Edit the projects section (look for `id="projects"`):
1. Duplicate a project card
2. Update image/video source
3. Change project title and description
4. Update technology tags
5. Update GitHub and demo links

## 📱 Responsive Design Breakpoints

- **Mobile**: < 640px (default styling)
- **Small**: 640px (sm)
- **Medium**: 768px (md) - Tablet view
- **Large**: 1024px (lg) - Desktop view
- **Extra Large**: 1280px (xl) - Large screens

## 🔐 Privacy & Security

- No data collection (except through mailto form)
- No tracking scripts
- No external dependencies (except Tailwind CDN)
- Safe mailto implementation
- Client-side form validation only

## 💡 Performance Optimization

- CDN-hosted Tailwind CSS for faster loading
- Google Fonts for optimized typography
- No JavaScript frameworks overhead
- Minimal file sizes
- Optimized images and GIFs

## 🤝 Integration Options

### Future Enhancements
- Backend email service (EmailJS, Formspree, etc.)
- Blog section with markdown support
- Project filtering/search
- Skills progress bar visualization
- Testimonials section
- Newsletter subscription

### Email Service Integration
To add backend email handling, consider:
1. **EmailJS** - Free tier available
2. **Formspree** - Form submission service
3. **Firebase** - Google's backend platform
4. **Node.js/Express** - Custom backend

## 📄 Files Overview

| File | Purpose |
|------|---------|
| index.html | Main HTML structure |
| css/scroll.css | Custom scroll styling |
| js/script.js | Core JavaScript logic |
| js/mail.js | Form submission handler |
| js/animation.script.js | Animation utilities |
| js/tailwind.configuration.js | Tailwind settings |

## 🔗 Links & Resources

- **GitHub**: https://github.com/Rajdeep5270
- **LinkedIn**: https://www.linkedin.com/in/rajdeep-singh-shekhawat-30487a340/
- **LeetCode**: https://leetcode.com/u/rajdeep5270/
- **Email**: rajdeepex5270@gmail.com

## 📋 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Summary**: You are free to use, modify, and distribute this code for personal and commercial use, provided you include the original copyright notice and license.

© 2026 Rajdeep Singh Shekhawat

## 🙏 Credits & Acknowledgments

- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Font hosting
- **Font Awesome / SVG Icons** - Icon resources
- **Inspiration** - Modern portfolio design trends

## 🚀 Future Improvements

- [ ] Add backend email service
- [ ] Implement blog section
- [ ] Add project filtering
- [ ] Create skill proficiency visualizations
- [ ] Add testimonials section
- [ ] Implement newsletter
- [ ] Add analytics
- [ ] Create admin panel for content management
- [ ] Add service worker for offline support
- [ ] Implement PWA features

## 📞 Support & Contact

For inquiries, collaborations, or project discussions:

- **Email**: rajdeepex5270@gmail.com
- **LinkedIn**: Connect on LinkedIn
- **GitHub**: Check out repositories
- **Contact Form**: Use the portfolio contact section

---

**Built with ❤️ by Rajdeep Singh Shekhawat**

*Last Updated: February 2026*
