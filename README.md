# ToyTopia

A simple, vibrant toy marketplace built with React. Users can browse toys, log in, view toy details (protected), and try a toy. 

# Purpose
The purpose of ToyTopia is to create a fun and easy-to-use online toy marketplace where users can explore different toys, learn more about them, and try their favorites. It helps users manage their toy collection, update their profile, and enjoy a smooth and secure browsing experience with simple login options and responsive design.

# Live
https://toytopia-flax.vercel.app/

https://toytopia-8816f.web.app/

# Key features
Email/password + Google authentication (Firebase).
Protected routes (toy details, My Profile, extra private page).
Try Now form — saved to localStorage.
My Toys — shows all tried toys and lets user "sell" them.
Responsive layout (mobile / tablet / desktop).
Slider on home (Swiper or Daisy UI).
Dynamic page titles and a 404 page.
Profile page: update name & photo (uses updateProfile()).
Forgot password flow (sends reset email).

# Used Packages

react - core framework for the app.

react router — routing and protected routes.

firebase — authentication (email/password, Google) and auth state persistence.

vite — dev server and build tool.

tailwindcss (+ daisyui) + UI verce website components — fast utility CSS and UI components for styling.

React slick and aos — For adding the slider in the hero section and for scroll based animations in the homepage.

sweetalert2 — for User interactivity.

# Run locally
Clone the repo.
Install - npm install
Create .env and add Firebase keys (do not commit .env):

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=


Start - npm run dev

