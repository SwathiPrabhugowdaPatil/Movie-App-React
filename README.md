# 🎬 Movie App React

A responsive movie discovery app built with **React** and **Vite**, powered by **The Movie Database (TMDB)**. Browse popular movies, search for titles, and save your favorites — favorites persist in the browser across refreshes.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![TMDB](https://img.shields.io/badge/API-TMDB-01B4E4?logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)

## Features

- 🍿 **Browse popular movies** — loads TMDB's popular list on first visit
- 🔍 **Search by title** — queries the TMDB search API and renders the results
- ❤️ **Favorites** — add or remove any movie with a single click on the poster overlay
- 💾 **Persistence** — favorites are saved to `localStorage`, so they survive page refreshes
- 🧭 **Client-side routing** — separate Home and Favorites pages via React Router
- ⏳ **Loading & error states** — clear feedback while fetching from the API
- 📱 **Responsive layout** — CSS grid of posters that adapts to any screen size

<!-- Add a live demo link and badge here when the app is deployed, e.g.
[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-2ea44f)](https://your-demo-url)
-->

## Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| UI library     | React 18                         |
| Build tool     | Vite 5                           |
| Routing        | React Router DOM 6               |
| State          | React Context API + `localStorage` |
| Data           | TMDB REST API                    |
| Styling        | Plain CSS (one stylesheet per component) |
| Linting        | ESLint 9                         |

<!-- ## Screenshots

| Home | Favorites |
| ---- | --------- |
| ![Home](docs/screenshots/home.png) | ![Favorites](docs/screenshots/favorites.png) |
-->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (bundled with Node.js)
- A free [TMDB](https://www.themoviedb.org/) account

### 1. Clone the repository

```bash
git clone https://github.com/SwathiPrabhugowdaPatil/Movie-App-React.git
cd "Movie App React"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your TMDB API key

1. Sign in to TMDB and open **Settings → API**.
2. Request an API key (choose the "Developer" option).
3. Copy the **API Key (v3 auth)**.
4. Open `src/services/api.js` and paste it into the constant at the top of the file:

```js
const API_KEY = "your_tmdb_api_key_here";
```

> **Note:** The app will not load movies until a valid key is provided. A client-side key is visible in the browser bundle, so keep this project personal and never commit a key that has billing or elevated access attached.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint over the project              |

## Project Structure

```
Movie App React/
├── public/                  # Static assets served as-is
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx    # Poster card with favorite toggle
│   │   └── NavBar.jsx       # Top navigation (Home / Favorites)
│   ├── contexts/
│   │   └── MovieContext.jsx # Favorites state + localStorage sync
│   ├── css/                 # Component-scoped stylesheets
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/
│   │   ├── Home.jsx         # Popular movies + search
│   │   └── Favorites.jsx    # Saved movies grid
│   ├── services/
│   │   └── api.js           # TMDB API calls and API key
│   ├── App.jsx              # Routes and layout
│   └── main.jsx             # App entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

- **`main.jsx`** mounts the app inside `BrowserRouter` and wraps it in `StrictMode`.
- **`App.jsx`** wraps everything in `MovieProvider`, renders the `NavBar`, and defines the `/` and `/favorites` routes.
- **`MovieContext`** holds the favorites array, exposes `addToFavorites`, `removeFromFavorites`, and `isFavorite`, and mirrors the array to `localStorage` whenever it changes.
- **`services/api.js`** centralizes TMDB requests: `getPopularMovies()` for the landing page and `searchMovies(query)` for user searches.
- **`Home`** fetches popular movies on mount, then swaps the grid for search results on form submit, tracking `loading` and `error` state.
- **`MovieCard`** builds the poster URL from `image.tmdb.org/t/p/w500`, shows the title and release year, and toggles the favorite state.

## Roadmap

- [ ] Move the API key into a `VITE_TMDB_API_KEY` environment variable (and add `.env` to `.gitignore`)
- [ ] Add a movie details page with synopsis, cast, and runtime
- [ ] Infinite scroll or pagination for search results
- [ ] Debounced search-as-you-type
- [ ] Genre, year, and rating filters
- [ ] Dark/light theme toggle
- [ ] Unit tests with Vitest and React Testing Library
- [ ] Deploy to Vercel or Netlify and link the live demo

## Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data and poster images
- [Tech With Tim — Learn React in One Project](https://github.com/techwithtim/Learn-React-In-One-Project) for the tutorial this app was built alongside

## Author

**Swathi Prabhugowda Patil**

- GitHub: [@SwathiPrabhugowdaPatil](https://github.com/SwathiPrabhugowdaPatil)
