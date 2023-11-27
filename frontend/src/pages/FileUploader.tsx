import React, { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import FileInputButton from "../components/FileInputButton";
import SelectedFileDisplay from "../components/SelectedFileDisplay";
import DragAndDropFeedback from "../components/DragAndDropFeedback";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const FileUploader = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file !== undefined) {
      setSelectedFile(file);
    }
    setIsDragging(false);
  };

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsSubmitting(true);
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        await api.post('/api/files', formData);
  
        history.push('/search');
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box mt={[6, 4, 2]} onDragOver={handleDragOver} onDrop={handleDrop} w="100%" h="100%">
      {selectedFile && <SelectedFileDisplay selectedFile={selectedFile} onDelete={handleDeleteFile} />}
      <FileInputButton onChange={handleFileChange} />
      <Flex align="center" justify="center" flexFlow="column" w="100%" mt="2%">
        <Button
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
          w="50%"
          fontSize="15px"
          onClick={handleUpload}
          isDisabled={!selectedFile}
          isLoading={isSubmitting}
          loadingText="Submitting"
          spinnerPlacement="end"
        >
          Upload
        </Button>
      </Flex>
      <DragAndDropFeedback isDragging={isDragging} onDragLeave={handleDragLeave}/>
    </Box>
  );
};

export default FileUploader;
