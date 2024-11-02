# React File Upload Button

A customizable React component for file uploads with drag-and-drop functionality, progress bar, and file management. This component allows users to click or drag a file to upload, shows upload progress, and lets users delete files after a successful upload.

## Features

- Drag-and-drop or click-to-upload functionality
- Display upload progress with a color-changing progress bar
- Display file details with icons based on file type (PDF, image, Excel, etc.)
- Option to delete uploaded files
- Fully customizable and TypeScript-supported

## Installation

Install the package via NPM:

```bash
npm install react-file-upload-button

Usage
Here’s a basic example of how to use the UploadButton component:
import React from 'react'
import UploadButton from 'react-file-upload-button'
import 'react-file-upload-button/dist/UploadButton.css' // Import the CSS

function App() {
  return (
    <div>
      <h1>Upload Your File</h1>
      <UploadButton maxSizeMB={5} />
    </div>
  )
}

export default App

Props
maxSizeMB (number, optional): Maximum file size allowed in MB. Defaults to 10.

Development
To work on the component locally:

1.Clone the repository:
git clone https://github.com/gsteja2307/react-file-upload-button.git
2.Install dependencies:
npm install
3.Run the TypeScript compiler in watch mode:
npm run build


License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Feel free to submit issues or pull requests! If you’d like to improve this component, please fork the repository and make your changes in a feature branch.

Author
Developed by G Surya Teja.
