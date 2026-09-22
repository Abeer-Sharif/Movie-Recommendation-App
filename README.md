# Movie Recommendation App
Deployed Link : https://movie-recommendation-app-ob29.onrender.com

A responsive movie discovery application built with **React**, **Vite**, **TMDB API**, and **Appwrite**. Users can search for movies, browse popular titles, and view trending movies based on search activity within the application.


<img width="850" alt="Movie Recommendation Home Page" src="https://github.com/user-attachments/assets/ef421c02-dbac-470b-8488-ead9642306ca" />
<img width="850" alt="Trending Movies Section" src="https://github.com/user-attachments/assets/4305f739-8d04-4513-bafa-c54e11634d02" />

## Features

- Search movies using the TMDB API
- Browse popular movies by default
- Debounced search to reduce unnecessary API requests
- View movie posters, ratings, language, and release year
- Track search frequency using Appwrite TablesDB
- Display the top searched movies in a custom trending section
- Responsive UI with loading and error states

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **Tailwind CSS**
- **TMDB API**
- **Appwrite TablesDB**

## Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx
│   ├── Search.jsx
│   └── Spinner.jsx
├── App.jsx
├── appwrite.js
├── index.css
└── main.jsx
```

## How It Works

Movie data is fetched from the **TMDB API**.

When a user searches for a movie, the application stores the search term and associated movie information in **Appwrite TablesDB**.

If the same search term already exists, its count is incremented. The five records with the highest search counts are displayed in the **Trending Movies** section.

```text
Search
  ↓
TMDB API
  ↓
Movie Results
  ↓
Appwrite Search Tracking
  ↓
Top 5 Trending Movies
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_token
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
```

Do not commit `.env.local` to version control.

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd movie-recommendation
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

## Deployment

The project can be deployed as a static site on platforms such as **Render**.

For Render:

```text
Build Command: npm install && npm run build
Publish Directory: dist
```

Add the required environment variables in the deployment dashboard.

## API and Database

### TMDB

Used for:

- Movie search
- Popular movie discovery
- Posters
- Ratings
- Release information

### Appwrite TablesDB

Stores:

| Field | Purpose |
|---|---|
| `searchTerm` | User search query |
| `count` | Number of searches |
| `movie_id` | TMDB movie ID |
| `poster_url` | Movie poster URL |

## 👨‍💻 Author

**Abeer Sharif**

B.E. Electronics and Computer Science Engineering


## ⭐ Support

If you found this project useful, consider giving the repository a ⭐.
