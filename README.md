# YouTube Data API (MERN Stack without React)
## Overview
This project is an API that I developed in response to YouTube disabling public access to dislike counts on videos. I built this API to automatically update the descriptions of my YouTube videos every 10 minutes, incorporating the dislike data and other useful information.

The API fetches data from YouTube, stores it in a MongoDB database, and provides endpoints for retrieving and updating video descriptions programmatically. It’s built on a MERN stack without React, relying on MongoDB, Express, and Node.js for backend and database operations.

## Project Background
When YouTube disabled the ability for viewers to see the dislike counts on videos, I wanted a way to maintain access to that information for my own channel. This API fetches YouTube video data, stores it in MongoDB, and automatically updates the video descriptions periodically to display the dislike data and other statistics.

I set up the API to update my video descriptions every 10 minutes with the latest data, making it a useful tool for keeping track of engagement metrics.

## Features

- **Automatic YouTube Video Description Updates**: Automatically updates the descriptions of my YouTube videos every 10 minutes.

- **Data Storage in MongoDB**: Stores YouTube data such as dislike counts, video stats, and more in MongoDB.

- **API Endpoints**: Provides endpoints to retrieve and update video data from the MongoDB database.

- **Scalable Backend**: Built using Node.js and Express for efficient data processing and API management.

### YouTube Channel
Check out my YouTube channel where this API is actively in use: [@KailyHere](https://youtube.com/@KailyHere)

#### Demo Video
Watch the video explaining the project: [Link to Demo Video](https://www.youtube.com/watch?v=COSsRwZ_QCw)
