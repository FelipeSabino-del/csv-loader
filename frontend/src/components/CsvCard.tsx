import { Flex, Text } from "@chakra-ui/react";

interface CsvCardProps {
  data: Record<string, any>;
}

const CsvCard = ({ data }: CsvCardProps) => {
  return (
    <Flex borderWidth="1px" borderRadius="lg" p={4} mb={4} align="flex-start" justify="center" flexDirection="column">
      {Object.entries(data).map(([key, value]) => (
        <Text key={key} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
          <strong>{key}:</strong> {value}
        </Text>
      ))}
    </Flex>
  );
};

export default CsvCard;
