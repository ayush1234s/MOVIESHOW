# 🎬 MOVIESHOW

MOVIESHOW is a modern and interactive movie browsing web application built to deliver a smooth and cinematic experience for users.  
It allows users to explore popular, top-rated, and upcoming movies with powerful filtering, sorting, and theme customization features.

Built using **React JS**, **Node JS**, **REST APIs**, and **Context API**, MOVIESHOW focuses on performance, clean UI, and real-time movie data.

---

## 🚀 Features

✨ **Real-time Movie Data**  
- Fetches live movie information using the **TMDB (The Movie Database) API**
- Displays updated movies, ratings, release dates, and descriptions

🌙 **Dark Mode & Light Mode**  
- Toggle switch for Dark–Light theme
- Implemented using **React Context API**
- Theme preference applied globally across the app

🔍 **Filter & Sort System**  
- Filter movies based on categories
- Sort movies by rating, popularity, and release date
- Smooth and fast UI updates

🎨 **Fully Styled UI**  
- Designed using **Cascading Style Sheets (CSS)**
- Separate styling for every section, list, card, and component
- Clean layout with modern UI effects

⚡ **Fast API Calling**  
- REST API-based data fetching
- Optimized for smooth loading and better performance

---

## 🛠️ Tech Stack

### Frontend
- **React JS**
- **Context API**
- **CSS (Cascading Style Sheets)**

### Backend
- **Node JS**
- **REST APIs**

### External API
- **TMDB API**

---

## 🎥 About TMDB API

**TMDB (The Movie Database)** is one of the most popular movie and TV show databases in the world.

It provides:
- Movie titles and posters  
- Ratings and popularity scores  
- Release dates  
- Overviews and descriptions  
- Trending, popular, and upcoming movies  

MOVIESHOW uses the TMDB API to fetch real-time movie data and keep content fresh and updated.

> ⚠️ Note:  
> You must generate your own **TMDB API Key** from the official TMDB website and add it to your project environment variables.

---

## 🔑 API Key Setup

Create a `.env` file in your project root and add:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
