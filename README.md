# Congress Search v2
A simple directory of members in the current United States senate and house of representatives.


## About
Built as a remake of an [earlier project](https://github.com/glowmachine/congress-search-v1) made with vanilla CSS and JS, this version uses React and Tailwind bundled with Vite.

[Live Demo](https://congress-search-v2.netlify.app/)

## Screenshots
<a href="./public/screenshot_0.jpg">
  <img src="./public/screenshot_0.jpg" height="200" />
</a>
<a href="./public/screenshot_1.jpg">
  <img src="./public/screenshot_1.jpg" height="200" />
</a>

## Features
- Browse all current U.S. Senate and House members
- Filter by role, state, district, and party affiliation
- Find their contact information and links to social media accounts

## Stack
- **Library:** React, react-icons
- **State:** Easy Peasy (Redux wrapper)
- **Styling:** Tailwind CSS
- **Bundler:** Vite

## Data Sources
- Data fetched from the [unitedstates/congress-legislators](https://github.com/unitedstates/congress-legislators)
- Photos fetched directly from the [unitedstates/images](https://github.com/unitedstates/images)
- Flags sourced from [nibsbin/us-state-flags-svg](https://github.com/nibsbin/us-state-flags-svg)

## Getting Started
```bash
git clone https://github.com/glowmachine/congress-search-v2.git
cd congress-search-v2
npm install
npm run dev
```

Open the URL shown in your terminal, typically [http://localhost:5173](http://localhost:5173) (Vite)

## License
This is a learning project and is not licensed for reuse.