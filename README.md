# Book CRUD Application

This project is a book display, read, and delete application built using React for the frontend and Firebase for the backend.


## Prerequisites

Node.js and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

## Installation

Clone this repository or download the ZIP file.
Navigate to the project directory in your terminal:

```bash
npm install
```

##  Firebase Setup

Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
-   Follow the Firebase documentation ([https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)) to set up Firebase in your project:
    -   Add Firebase to your React project using the recommended method (e.g., Firebase CLI or web setup).
    -   Initialize Firebase in your React application using the provided configuration from Firebase.
-   Create a Firestore database in your Firebase project:
    -   Go to the Firestore section in the Firebase console.
    -   Click "Start collection" to create a new collection for storing book data (e.g., "books").

## Environment Variables

Create a `.env` file in the root of your project directory.
Add the following environment variables to the `.env` file, replacing the placeholders with your actual Firebase project credentials:
```
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket   

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

## Important Note:

-   **Do not commit your `.env` file to version control** (e.g., Git) as it contains sensitive information. You can add it to your `.gitignore` file to prevent accidental commits.

# **Running the Application**

1. Start the development server:



```bash
npm start

```

This will start the React development server, typically running on `http://localhost:3000` by default. You can open this URL in your browser to view the application.

