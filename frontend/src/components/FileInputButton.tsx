import React from "react";
import { Button, Input } from "@chakra-ui/react";

interface FileInputButtonProps {
  onChange: (file: File) => void;
}

const FileInputButton = ({ onChange }: FileInputButtonProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <>
      <Input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        accept=".csv"
        mb={4}
        display="none"
      />
      <label htmlFor="file-upload">
        <Button as="span" variant="solid" colorScheme="green" w="100%">
          Choose file
        </Button>
      </label>
    </>
  );
};

export default FileInputButton;
