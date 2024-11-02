import React from 'react'
import ReactDOM from 'react-dom'
import UploadButton from '../src/UploadButton'
import '../src/UploadButton.css' // Import component CSS for styling

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test the Upload Button Component</h1>
      <UploadButton maxSizeMB={1} restrictFileSize={true} allowedFileTypes={[".jpg", ".png"]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
