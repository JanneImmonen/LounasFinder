# LounasFinder

## Introduction

Welcome to LounasFinder, a comprehensive solution for discovering the best lunch spots in your area. This project leverages modern web technologies to provide a seamless and interactive user experience.

## Features

LounasFinder offers a range of features including:

- An interactive map to locate lunch spots.
- User authentication for personalized experience.
- Reviews and ratings for different locations.
- Search functionality based on location and cuisine.

## Technologies Used

This project is built using several cutting-edge technologies and frameworks:

- **React**: For building the user interface.
- **Firebase**: For backend services including authentication and database.
- **Google Maps API**: For map-related functionalities.

## Getting Started

### Cloning the Repository

To get started with LounasFinder, clone the repository to your local machine:

```bash
git clone https://github.com/JanneImmonen/LounasFinder.git
cd LounasFinder
```

### Installing Dependencies

Install the necessary dependencies by running:

```bash
npm install
```

## Firebase Setup

Follow these steps to set up Firebase for the project:

1. **Create a Firebase Project**: Visit the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Configure Authentication**: Set up Google Authentication and other methods as required.
3. **Setting up Firestore Database**: Initialize Firestore for storing and retrieving data.
4. **Generating Firebase Configuration Keys**: Obtain your Firebase configuration keys for integration.

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

## Running the Application

To run LounasFinder in development mode, execute:

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Building for Production

To build the application for production, run:

```bash
npm run build
```

## License

This project is licensed under the [MIT License](https://mit-license.org/).

## Acknowledgments

©Janne Immonen 2023 - TO00BS67-3003
