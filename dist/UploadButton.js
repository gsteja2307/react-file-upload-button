import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const UploadButton = ({ maxSizeMB = 10, restrictFileSize = false, allowedFileTypes, uploadText = _jsx("strong", { style: { color: 'red' }, children: "Drag and Drop your file or Click to Upload" }), subText = `You can upload up to ${maxSizeMB} MB`, uploadStyles, progressStyles, errorStyles, fileIcons = {}, onError, onFileUpload, fileTypeNotAllowedText = `File type not allowed. Please upload one of the following: ${allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.join(', ')}`, restrictFileSizeText = `File size exceeds the allowed limit of ${maxSizeMB} MB. Please select a smaller file.`, FileSizeExceededButAllowedText = `File size exceeds the allowed limit of ${maxSizeMB} MB. Please select a smaller file.`, progressBarInterval = 100, UploadFileIcon = _jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M12 2L6.5 7.5H10V15H14V7.5H17.5L12 2Z" }), _jsx("path", { d: "M18 18H6V20H18V18Z" })] }) }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [fileInfo, setFileInfo] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const isValidFileTypeArray = Array.isArray(allowedFileTypes) && allowedFileTypes.every(type => typeof type === 'string');
    const acceptTypes = isValidFileTypeArray ? allowedFileTypes.join(',') : undefined;
    const isFileTypeAllowed = (file) => {
        if (!isValidFileTypeArray)
            return true;
        return allowedFileTypes.some((type) => file.name.toLowerCase().endsWith(type.toLowerCase()));
    };
    const handleFileSelect = (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file)
            validateAndHandleFile(file);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = () => setIsDragging(false);
    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file)
            validateAndHandleFile(file);
    };
    const validateAndHandleFile = (file) => {
        const fileSizeInMB = file.size / (1024 * 1024);
        const isFileTooLarge = fileSizeInMB > maxSizeMB;
        if (!isFileTypeAllowed(file)) {
            const error = fileTypeNotAllowedText;
            setErrorMessage(error);
            onError === null || onError === void 0 ? void 0 : onError(error);
            return;
        }
        if (isFileTooLarge && restrictFileSize) {
            const error = restrictFileSizeText;
            setErrorMessage(error);
            onError === null || onError === void 0 ? void 0 : onError(error);
        }
        else if (isFileTooLarge) {
            const error = FileSizeExceededButAllowedText;
            setErrorMessage(error);
            onError === null || onError === void 0 ? void 0 : onError(error);
        }
        else {
            setErrorMessage(null);
            onError === null || onError === void 0 ? void 0 : onError(null);
        }
        handleFileUpload(file);
    };
    const handleFileUpload = (file) => {
        setFileInfo({ name: file.name, size: file.size, type: file.type });
        setUploading(true);
        onFileUpload === null || onFileUpload === void 0 ? void 0 : onFileUpload(file);
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, progressBarInterval);
    };
    const deleteFile = () => {
        setFileInfo(null);
        setUploadProgress(0);
        setErrorMessage(null);
        onFileUpload === null || onFileUpload === void 0 ? void 0 : onFileUpload(null);
        onError === null || onError === void 0 ? void 0 : onError(null);
    };
    const getFileIcon = (type) => {
        if (type.includes('pdf') && fileIcons.pdf)
            return fileIcons.pdf;
        if (type.includes('image') && fileIcons.image)
            return fileIcons.image;
        if ((type.includes('excel') || type.includes('spreadsheet')) && fileIcons.excel)
            return fileIcons.excel;
        return fileIcons.default || '📁';
    };
    return (_jsx("div", { className: `upload-button ${isDragging ? 'dragging' : ''}`, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, style: uploadStyles, children: !fileInfo || uploading ? (_jsx(_Fragment, { children: uploading ? (_jsxs("div", { className: "progress-container", style: progressStyles, children: [_jsx("div", { className: "progress-bar", style: {
                            width: `${uploadProgress}%`,
                            backgroundColor: uploadProgress > 90 ? 'darkgreen' : 'orange',
                        } }), _jsxs("p", { className: "file-info", children: [fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.name, " - ", (fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.size) ? Math.round(fileInfo.size / 1024) : 0, " KB"] })] })) : (_jsxs("label", { className: "upload-content", children: [_jsx("input", { type: "file", onChange: handleFileSelect, style: { display: 'none' }, accept: acceptTypes }), _jsx("div", { className: "icon", children: UploadFileIcon }), _jsx("div", { className: "upload-text", children: uploadText }), _jsx("div", { className: "sub-text", children: subText })] })) })) : (_jsxs("div", { className: "uploaded-file", children: [_jsxs("div", { className: 'uploaded-file-content', children: [_jsx("div", { className: "file-icon", children: getFileIcon(fileInfo.type) }), _jsxs("div", { className: "file-details", children: [_jsx("div", { className: 'file-name', children: fileInfo.name }), _jsxs("div", { className: 'file-size', children: [Math.round(fileInfo.size / 1024), " KB"] }), _jsx("div", { className: 'error-message', children: errorMessage && _jsx("span", { className: "error-message-text", style: Object.assign(Object.assign({}, errorStyles), { color: 'red' }), children: errorMessage }) })] })] }), _jsx("button", { className: "delete-btn", onClick: deleteFile, children: fileIcons.delete ? fileIcons.delete : (_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M9 3H15", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M10 3V2C10 1.44772 10.4477 1 11 1H13C13.5523 1 14 1.44772 14 2V3H10Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M4 6H20", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M5 6L6 19C6.05 19.61 6.58 20 7.2 20H16.8C17.42 20 17.95 19.61 18 19L19 6H5Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) })] })) }));
};
export default UploadButton;
