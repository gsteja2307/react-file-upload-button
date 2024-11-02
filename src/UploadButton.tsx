import React, { useState, CSSProperties, ReactNode } from 'react'

interface UploadButtonProps {
	maxSizeMB?: number
	restrictFileSize?: boolean
	allowedFileTypes?: Array<string>
	uploadText?: ReactNode // Custom upload text content
	subText?: ReactNode // Custom sub-text content
	uploadStyles?: CSSProperties // Custom CSS styles for upload area
	progressStyles?: CSSProperties // Custom CSS styles for progress bar
	errorStyles?: CSSProperties // Custom CSS styles for error message
	fileIcons?: {
		pdf?: ReactNode
		image?: ReactNode
		excel?: ReactNode
		default?: ReactNode
		delete?: ReactNode
	}
	onError?: (error: string | null) => void // Callback when error occurs
	onFileUpload?: (file: File | null) => void // Callback when file is uploaded
	fileTypeNotAllowedText?: string
	restrictFileSizeText?: string
	FileSizeExceededButAllowedText?: string
	progressBarInterval?: number
	UploadFileIcon?: ReactNode
}

interface FileInfo {
	name: string
	size: number
	type: string
}

const UploadButton: React.FC<UploadButtonProps> = ({
	maxSizeMB = 10,
	restrictFileSize = false,
	allowedFileTypes,
	uploadText = <strong style={{ color: 'red' }}>Drag and Drop your file or Click to Upload</strong>,
	subText = `You can upload up to ${maxSizeMB} MB`,
	uploadStyles,
	progressStyles,
	errorStyles,
	fileIcons = {},
	onError,
	onFileUpload,
	fileTypeNotAllowedText = `File type not allowed. Please upload one of the following: ${allowedFileTypes?.join(', ')}`,
	restrictFileSizeText = `File size exceeds the allowed limit of ${maxSizeMB} MB. Please select a smaller file.`,
	FileSizeExceededButAllowedText = `File size exceeds the allowed limit of ${maxSizeMB} MB. Please select a smaller file.`,
	progressBarInterval = 100,
	UploadFileIcon = <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2L6.5 7.5H10V15H14V7.5H17.5L12 2Z" />
		<path d="M18 18H6V20H18V18Z" />
	</svg>
}) => {
	const [isDragging, setIsDragging] = useState(false)
	const [fileInfo, setFileInfo] = useState<FileInfo | null>(null)
	const [uploadProgress, setUploadProgress] = useState<number>(0)
	const [uploading, setUploading] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const isValidFileTypeArray = Array.isArray(allowedFileTypes) && allowedFileTypes.every(type => typeof type === 'string')
	const acceptTypes = isValidFileTypeArray ? allowedFileTypes.join(',') : undefined

	const isFileTypeAllowed = (file: File): boolean => {
		if (!isValidFileTypeArray) return true
		return allowedFileTypes!.some((type) => file.name.toLowerCase().endsWith(type.toLowerCase()))
	}

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) validateAndHandleFile(file)
	}

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDragging(true)
	}

	const handleDragLeave = () => setIsDragging(false)

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDragging(false)
		const file = event.dataTransfer.files[0]
		if (file) validateAndHandleFile(file)
	}

	const validateAndHandleFile = (file: File) => {
		const fileSizeInMB = file.size / (1024 * 1024)
		const isFileTooLarge = fileSizeInMB > maxSizeMB

		if (!isFileTypeAllowed(file)) {
			const error = fileTypeNotAllowedText
			setErrorMessage(error)
			onError?.(error)
			return
		}

		if (isFileTooLarge && restrictFileSize) {
			const error = restrictFileSizeText
			setErrorMessage(error)
			onError?.(error)
		} else if (isFileTooLarge) {
			const error = FileSizeExceededButAllowedText
			setErrorMessage(error)
			onError?.(error)
		} else {
			setErrorMessage(null)
			onError?.(null)
		}

		handleFileUpload(file)
	}

	const handleFileUpload = (file: File) => {
		setFileInfo({ name: file.name, size: file.size, type: file.type })
		setUploading(true)
		onFileUpload?.(file)

		const interval = setInterval(() => {
			setUploadProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval)
					setUploading(false)
					return 100
				}
				return prev + 10
			})
		}, progressBarInterval)
	}

	const deleteFile = () => {
		setFileInfo(null)
		setUploadProgress(0)
		setErrorMessage(null)
		onFileUpload?.(null)
		onError?.(null)
	}

	const getFileIcon = (type: string) => {
		if (type.includes('pdf') && fileIcons.pdf) return fileIcons.pdf
		if (type.includes('image') && fileIcons.image) return fileIcons.image
		if ((type.includes('excel') || type.includes('spreadsheet')) && fileIcons.excel) return fileIcons.excel
		return fileIcons.default || '📁'
	}

	return (
		<div
			className={`upload-button ${isDragging ? 'dragging' : ''}`}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			style={uploadStyles}
		>
			{!fileInfo || uploading ? (
				<>
					{uploading ? (
						<div className="progress-container" style={progressStyles}>
							<div
								className="progress-bar"
								style={{
									width: `${uploadProgress}%`,
									backgroundColor: uploadProgress > 90 ? 'darkgreen' : 'orange',
								}}
							></div>
							<p className="file-info">
								{fileInfo?.name} - {fileInfo?.size ? Math.round(fileInfo.size / 1024) : 0} KB
							</p>
						</div>
					) : (
						<label className="upload-content">
							<input
								type="file"
								onChange={handleFileSelect}
								style={{ display: 'none' }}
								accept={acceptTypes}
							/>
							<div className="icon">{UploadFileIcon}</div>
							<div className="upload-text">{uploadText}</div>
							<div className="sub-text">{subText}</div>
						</label>

					)}
				</>
			) : (
				<div className="uploaded-file">
					<div className='uploaded-file-content'>
						<div className="file-icon">{getFileIcon(fileInfo.type)}</div>
						<div className="file-details">
							<div className='file-name'>{fileInfo.name}</div>
							<div className='file-size'>{Math.round(fileInfo.size / 1024)} KB</div>
							<div className='error-message'>{errorMessage && <span className="error-message-text" style={{ ...errorStyles, color: 'red' }}>{errorMessage}</span>}</div>
						</div>
					</div>
					<button className="delete-btn" onClick={deleteFile}>
						{fileIcons.delete ? fileIcons.delete : (<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 3H15"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10 3V2C10 1.44772 10.4477 1 11 1H13C13.5523 1 14 1.44772 14 2V3H10Z"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4 6H20"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L6 19C6.05 19.61 6.58 20 7.2 20H16.8C17.42 20 17.95 19.61 18 19L19 6H5Z"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						)}
					</button>
				</div>
			)}
			{/* </div> */}
		</div>
	)
}

export default UploadButton
