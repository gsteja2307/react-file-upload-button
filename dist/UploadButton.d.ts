import React, { CSSProperties, ReactNode } from 'react';
import './UploadButton.css';
interface UploadButtonProps {
    maxSizeMB?: number;
    restrictFileSize?: boolean;
    allowedFileTypes?: Array<string>;
    uploadText?: ReactNode;
    subText?: ReactNode;
    uploadStyles?: CSSProperties;
    progressStyles?: CSSProperties;
    errorStyles?: CSSProperties;
    fileIcons?: {
        pdf?: ReactNode;
        image?: ReactNode;
        excel?: ReactNode;
        default?: ReactNode;
        delete?: ReactNode;
    };
    onError?: (error: string | null) => void;
    onFileUpload?: (file: File | null) => void;
    fileTypeNotAllowedText?: string;
    restrictFileSizeText?: string;
    FileSizeExceededButAllowedText?: string;
    progressBarInterval?: number;
    UploadFileIcon?: ReactNode;
    showPreview?: boolean;
    showFileIcon?: boolean;
}
declare const UploadButton: React.FC<UploadButtonProps>;
export default UploadButton;
