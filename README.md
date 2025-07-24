# Note Picker

Note Picker is an Express-React web application designed to help users take time-stamped notes on videos and export them into PDF and SRT formats. The "description" part of each note is specifically formatted to be used as a subtitle in the SRT export.

## Features

  * **Video Note-Taking:** Easily add notes at specific timestamps within a video.
  * **Timestamp Integration:** Each note is associated with a precise time in the video (H/M/S).
  * **PDF Export:** Generate a PDF document containing all your notes, including their timestamps.
  * **SRT Export:** Create an SRT (SubRip) file where the description of each note acts as a subtitle. This is useful for creating custom subtitles or captions for your videos.
  * **User Authentication:** Secure user registration and login system to manage personal notes.

## Technologies Used

### Backend (Express.js)

  * **Node.js:** JavaScript runtime.
  * **Express.js:** Web application framework for Node.js.
  * **Mongoose:** ODM for MongoDB, providing a straightforward way to interact with the database.
  * **`dotenv`:** Loads environment variables from a `.env` file.
  * **`express-session`:** Simple session middleware for Express.
  * **`cors`:** Provides a Connect/Express middleware that can be used to enable CORS with various options.
  * **`connect-mongo`:** MongoDB session store for Express.
  * **MongoDB:** NoSQL database for storing user data and notes.

### Frontend (React)

  * **React:** JavaScript library for building user interfaces.
  * **React Router DOM:** For declarative routing in React applications.
  * **React-Bootstrap:** Bootstrap components built with React.
  * **SCSS/CSS:** For styling the application.

### Prerequisites

  * Node.js (LTS version recommended)
  * MongoDB (local installation or cloud-hosted service like MongoDB Atlas)


## Usage

1.  **Register/Sign In:** Upon visiting the application, you'll be prompted to sign up or sign in.
2.  **Upload/Select Video:** (Assumed functionality based on screenshot - the current code snippet doesn't show explicit upload functionality but implies a video is being played.) Once logged in, you can start adding notes to videos.
3.  **Add a Note:** While a video is playing, click the "Add Note" button. A modal will appear where you can enter a title, set the exact timestamp (or it might pre-fill the current video time), and write a description for your note.
4.  **Manage Notes:** Your added notes will appear in a list below the video player, showing their titles and timestamps. You can likely edit or delete existing notes.
5.  **Export Notes:** (Functionality not explicitly in provided code but mentioned in description) Look for options to export your notes as PDF or SRT files.

## Contributing

Contributions are welcome\! Please feel free to open issues or submit pull requests.
