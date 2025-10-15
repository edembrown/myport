# Patrick Edem Amenya — Portfolio (Static Site)

This is a single-page professional portfolio built with **HTML, CSS, and JavaScript**. It's ready to be hosted on **GitHub Pages**.

## Files
- `index.html` - Main page
- `style.css` - Styles and theme definitions
- `script.js` - Theme toggle and small interactions
- `assets/profile.jpg` - Your profile picture (replace with your own image)

## How to use
1. Replace `assets/profile.jpg` with your own photo (keep the name `profile.jpg`). The site will automatically crop it to a circular avatar.
2. Edit `index.html` to update Projects or other content.
3. Push the folder to a GitHub repository and enable GitHub Pages in the repository settings to host the site.

## Preview-only local image testing
If you want to preview a different photo locally **before** committing to GitHub, open the page in your browser with the query parameter `?preview=1`, e.g. `index.html?preview=1` and you'll see a small "Local Preview" tool that lets you pick a local image to preview (this will not be available to site visitors on GitHub Pages).

## Theme
- The site supports Light and Dark themes. The user's preference is saved in `localStorage`.
- Press `T` on the keyboard to toggle themes quickly.
