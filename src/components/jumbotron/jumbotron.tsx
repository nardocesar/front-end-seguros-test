import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack, Container } from "@chakra-ui/layout";

import { JumbotronArea } from "./styles";

const JumbotronComponent = ({
  category,
  title,
  subtitle,
  buttonAction,
  buttonText,
}: {
  category?: string;
  title: string;
  subtitle: string;
  buttonAction?: () => void;
  buttonText?: string;
}) => {
  return (
    <JumbotronArea>
      <Container maxW="container.xl">
        <Stack>
          {category && (
            <>
              <Heading as="h1" size="xs">
                {category}
              </Heading>
              <Box height="12px"></Box>
            </>
          )}
          <Box maxW="md">
            <Heading as="h2" size="2xl">
              {title}
            </Heading>
            <Box height="12px"></Box>
            <Heading as="h3" size="md">
              {subtitle}
            </Heading>
            {buttonAction && (
              <>
                <Box height="24px"></Box>
                <Button onClick={buttonAction} colorScheme="orange">
                  {buttonText}
                </Button>
              </>
            )}
          </Box>
        </Stack>
      </Container>
    </JumbotronArea>
  );
};

export default JumbotronComponent;
