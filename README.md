
# React File Upload Button

[![NPM version](https://img.shields.io/npm/v/react-file-upload-button.svg)](https://www.npmjs.com/package/react-file-upload-button)
[![NPM downloads](https://img.shields.io/npm/dm/react-file-upload-button.svg)](https://www.npmjs.com/package/react-file-upload-button)
[![GitHub stars](https://img.shields.io/github/stars/gsteja2307/react-file-upload-button.svg)](https://github.com/gsteja2307/react-file-upload-button/stargazers)

A customizable React component for file uploads with drag-and-drop functionality, progress bar, and file type restrictions. This component allows users to click or drag a file to upload, shows upload progress, supports custom icons, and lets users delete files after a successful upload.

## Features

- **Drag-and-Drop or Click-to-Upload** functionality
- **File type and size restrictions** with custom error messages
- **Progress bar** for showing upload progress
- **Custom icons** for different file types
- **Callbacks** for handling errors and file upload events
- **CSS customization** through props

## Installation

Install the package via NPM:

```bash
npm install react-file-upload-button
```

## Usage

Here’s a basic example of how to use the `UploadButton` component:

```typescript
import React from 'react'
import UploadButton from 'react-file-upload-button'

const App = () => (
    <UploadButton
        maxSizeMB={5}
        restrictFileSize={true}
        allowedFileTypes={[".pdf", ".jpg", ".png"]}
        uploadText={<strong style={{ color: 'blue' }}>Click or Drag to Upload Files</strong>}
        subText="Only PDF, JPG, and PNG files are allowed"
        uploadStyles={{ border: '2px dashed green', padding: '20px' }}
        progressStyles={{ backgroundColor: 'lightblue' }}
        errorStyles={{ fontStyle: 'italic', color: 'darkred' }}
        fileIcons={{
            pdf: <img src="pdf-icon.png" alt="PDF" style={{ width: '24px', height: '24px' }} />,
            image: <img src="image-icon.png" alt="Image" style={{ width: '24px', height: '24px' }} />,
            excel: <img src="excel-icon.png" alt="Excel" style={{ width: '24px', height: '24px' }} />,
            default: <img src="default-icon.png" alt="File" style={{ width: '24px', height: '24px' }} />
        }}
        fileTypeNotAllowedText="File type not supported. Please use PDF, JPG, or PNG."
        restrictFileSizeText="File too large. Max size is 5MB."
        FileSizeExceededButAllowedText="File size exceeds 5MB but will be uploaded."
        progressBarInterval={200}
        uploadFileIcon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 2L6.5 7.5H10V15H14V7.5H17.5L12 2Z" />
         <path d="M18 18H6V20H18V18Z" />
        </svg>}
        onError={(error) => console.log("Error:", error)}
        onFileUpload={(file) => console.log("File uploaded:", file)}
    />
)

export default App
```

## Props

| Prop                      | Type                   | Default                                           | Description |
|---------------------------|------------------------|---------------------------------------------------|-------------|
| `maxSizeMB`               | `number`               | `10`                                              | Maximum file size in MB. |
| `restrictFileSize`        | `boolean`              | `false`                                           | If `true`, restricts file uploads to `maxSizeMB`. |
| `allowedFileTypes`        | `Array<string>`        | `undefined`                                       | List of allowed file types (e.g., `[".pdf", ".jpg"]`). |
| `uploadText`              | `ReactNode`            | `Drag and Drop your file or Upload`               | Custom upload instruction text. |
| `subText`                 | `ReactNode`            | `You can upload up to ${maxSizeMB} MB`            | Custom subtext below upload instruction. |
| `uploadStyles`            | `CSSProperties`        | `undefined`                                       | Custom styles for the upload area. |
| `progressStyles`          | `CSSProperties`        | `undefined`                                       | Custom styles for the progress bar. |
| `errorStyles`             | `CSSProperties`        | `undefined`                                       | Custom styles for error messages. |
| `fileIcons`               | `object`               | `{}`                                              | Custom icons for file types (`pdf`, `image`, `excel`, `default`). |
| `onError`                 | `(error: string) => void` | `undefined`                                   | Callback when an error occurs. |
| `onFileUpload`            | `(file: File) => void`   | `undefined`                                     | Callback when a file is uploaded. |
| `fileTypeNotAllowedText`  | `string`               | `File type not allowed. Please upload one of the following: ${allowedFileTypes?.join(', ')}` | Message when file type is not allowed. |
| `restrictFileSizeText`    | `string`               | `File size exceeds the allowed limit of ${maxSizeMB} MB. Please select a smaller file.` | Message when file size exceeds limit and is restricted. |
| `FileSizeExceededButAllowedText` | `string`       | `File size exceeds the allowed limit of ${maxSizeMB} MB. File will still be uploaded.` | Message when file size exceeds limit but is still uploaded. |
| `progressBarInterval`     | `number`               | `100`                                             | Interval (in ms) for upload progress increments. |
| `uploadFileIcon`          | `ReactNode`            | `📤`                                              | Custom icon for the upload area. |

## Customization

- **File Type Icons**: Provide custom icons for different file types (e.g., PDF, images) by passing SVG or image elements in `fileIcons`.
- **Error Messages**: Customize error messages for unsupported file types and oversized files.
- **Style Overrides**: Apply custom styles directly to the upload area, progress bar, and error messages.
- **Callbacks**: Use `onError` and `onFileUpload` to handle errors and get the uploaded file data.

## Development

To work on the component locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gsteja2307/react-file-upload-button.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the TypeScript compiler in watch mode:
   ```bash
   npm run build
   ```

4. Run the project (if using Vite or another dev server):
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests! If you’d like to improve this component, please fork the repository and make your changes in a feature branch.

## Author

Developed by [G Surya Teja](https://github.com/gsteja2307).
