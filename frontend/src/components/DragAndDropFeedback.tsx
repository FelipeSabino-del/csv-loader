// DragAndDropFeedback.tsx
import React from "react";
import { Flex } from "@chakra-ui/react";

interface DragAndDropFeedbackProps {
  isDragging: boolean;
  onDragLeave: React.DragEventHandler<HTMLDivElement>;
}

const DragAndDropFeedback = ({ isDragging, onDragLeave, ...rest }: DragAndDropFeedbackProps) => {
  return (
    <>
      {isDragging && (
        <Flex
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.8)"
          justifyContent="center"
          alignItems="center"
          color="white"
          zIndex={1000}
          onDragLeave={onDragLeave}
          {...rest}
        >
          Drop your file here
        </Flex>
      )}
    </>
  );
};

export default DragAndDropFeedback;
