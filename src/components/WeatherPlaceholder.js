import { Center, Heading, Spinner, VStack } from '@chakra-ui/react';

const WeatherPlaceholder = () => (
  <Center>
    <VStack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Heading
        as="h3"
        size="sm"
        style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}
      >
        Fetching Your Weather
      </Heading>
      <Heading
        as="h4"
        size="xs"
        style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}
      >
        (Please allow location access for this page)
      </Heading>
    </VStack>
  </Center>
);

export default WeatherPlaceholder;
