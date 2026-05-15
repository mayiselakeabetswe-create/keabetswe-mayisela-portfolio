# keabetswe-mayisela-portfolio
Keabetswe Mayisela – Personal Portfolio

A responsive, accessibility-conscious portfolio website for a Business Analyst. Showcases a concise bio, projects, skills with visual progress indicators, and straightforward contact options. Built with semantic HTML and modern CSS for a clean, professional portfolio suitable for a personal portfolio site or CV.

Table of Contents
Overview
Live Demo
Tech Stack
Project Structure
Key Design & UX Decisions
How to Run Locally
Customization & Extension
Accessibility & SEO
Testing
Deployment
License
Credits
Contact
Overview
This portfolio emphasizes clarity and professionalism. It uses:

A fixed, full-width header with easy navigation
A home section featuring a profile photo and intro
An About section with education and experience highlights
A Projects section with clearly labeled cards
A Skills section with visual progress indicators
A Contact section with a simple form and direct contact links
Design choices reflected in code:

Color palette: navy primary, steel blue accents, light grey background
Typography: Aptos (fallback to system sans-serif) for a clean, modern look
Responsive layout: home section uses flex with wrap to adapt to smaller screens
Subtle elevation: shadows on cards and sections
Accessible interactions: keyboard-friendly focus states and smooth scrolling
Live Demo
Replace with your actual URL: https://keabetswe-mayisela-portfolio.co.za
Tech Stack
HTML5
CSS3
JavaScript (for basic interactivity, e.g., form handling in scripts.js)
If you later introduce frameworks or tooling (e.g., a build step, fonts from Google, or a CSS framework), update this section accordingly.

Project Structure
index.html
css/styles.css (your styling)
js/scripts.js (your interactive logic)
images/profile-photo.jpg (profile image)
Key sections in the HTML:

Header with navigation: Home, About, Projects, Skills, Contact
Home: profile photo and introduction
About: education and competencies
Projects: Project Alpha, Project Beta with tools used
Skills: multiple skill entries with progress bars
Contact: form (name, email, message) plus direct contact links
Key Design & UX Decisions
Fixed header: Provides constant access to navigation and reinforces structure.
Color system: CSS variables for primary, secondary, and neutral tones to keep styling consistent.
Cards with hover effects: Projects use subtle elevation on hover to draw attention.
Progress bars: Visual indicators for skill levels, implemented with rounded bars.
Responsive typography and spacing: Scales gracefully across devices.
Accessibility: semantic HTML, clear labels, and enough color contrast for readability.
How to Run Locally
Clone the repository:
git clone https://github.com/your-username/your-repo.git
Open the site in your browser:
Open index.html directly or serve with a local server.
Local server (optional):
Python: python -m http.server 8000
Node (http-server): npx http-server
Verify asset paths:
CSS: css/styles.css
JS: js/scripts.js
Images: images/profile-photo.jpg
Usage & Customization
What to customize:

Meta tags in head (description, og:title, og:image, twitter:image) for better social previews.
Profile photo (images/profile-photo.jpg) and alt text.
About content (Education, Work Experience, Key Competencies).
Projects (title, Tools Used, Description).
Skills (labels and percentage widths in the skill-level divs).
Contact details (email, LinkedIn URL).
Code places to adjust:

The color palette is centralized in CSS variables at the top of styles.css. Update --primary-color, --secondary-color, etc., to personalize the theme.
Update the anchor links in the header to reflect any new sections you add.
Optional enhancements:

Add a real form handler (Netlify Forms, Formspree, etc.)
Integrate a dark mode toggle
Expand Projects with more cards or a dynamic filter
Add a small “Learning outcomes” or “Design decisions” subsection to showcase your BA thinking
Accessibility & SEO
Semantic HTML: header, nav, section, and footer for clear landmark