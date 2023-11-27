import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface SelectedFileDisplayProps {
  selectedFile: File | null;
  onDelete: () => void;
}

const SelectedFileDisplay = ({ selectedFile, onDelete }: SelectedFileDisplayProps) => {
  return (
    <Flex justify="center">
      <Button
        mb={[6, 4, 2]}
        px="2%"
        w="fit-content"
        rightIcon={<DeleteIcon />}
        colorScheme="gray"
        onClick={onDelete}
      >
        File selected: {selectedFile?.name}
      </Button>
    </Flex>
  );
};

export default SelectedFileDisplay;
