import React, { useState, useRef, useEffect } from 'react';
import { Upload, Plus, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';

interface FileMetadata {
  _id: string;
  filename: string;
  length: number;
  uploadDate: string;
  contentType: string;
}

interface UploadStatus {
  status: 'idle' | 'uploading' | 'success' | 'error';
  message?: string;
}

const Models: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle' });
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/files');
      if (!response.ok) throw new Error('Failed to fetch files');
      const filesList = await response.json();
      setFiles(filesList);
    } catch (error) {
      console.error('Error loading files:', error);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus({ status: 'idle' });
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadStatus({ status: 'uploading' });

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://localhost:3000/api/files', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload file');

      setUploadStatus({
        status: 'success',
        message: 'File uploaded successfully!',
      });

      await loadFiles();
      
      // Reset form after successful upload
      setTimeout(() => {
        setSelectedFile(null);
        setUploadStatus({ status: 'idle' });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 3000);

    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus({
        status: 'error',
        message: 'Failed to upload file. Please try again.',
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Files</h1>
        <label 
          htmlFor="file-upload"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>Upload File</span>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Your Files</h2>
        </div>

        <div className="p-6">
          {selectedFile ? (
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{selectedFile.name}</h3>
                    <p className="text-sm text-gray-500">{formatFileSize(selectedFile.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {uploadStatus.status === 'idle' && (
                <button
                  onClick={handleUpload}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Upload File
                </button>
              )}

              {uploadStatus.status === 'uploading' && (
                <div className="mt-4 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-gray-600">Uploading...</span>
                </div>
              )}

              {uploadStatus.status === 'success' && (
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>{uploadStatus.message}</span>
                </div>
              )}

              {uploadStatus.status === 'error' && (
                <div className="mt-4 flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>{uploadStatus.message}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {files.length > 0 ? (
                files.map((file) => (
                  <div key={file._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{file.filename}</h3>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.length)} • {new Date(file.uploadDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No files uploaded yet</h3>
                  <p className="text-gray-500 mb-4">Upload your first file to get started</p>
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Upload File</span>
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Models;