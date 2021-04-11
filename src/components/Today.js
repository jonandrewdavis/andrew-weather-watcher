import { HStack, Heading, Stat, StatLabel, VStack } from '@chakra-ui/react';
import Degree from './Degree';
import formattedTime from '../utils/formatTime';

const Today = ({ current, todayPrecipitation, givenAddress }) => {
  const { dt, weather, temp, humidity, wind_speed } = current;
  return (
    <HStack>
      <HStack justify="space-between">
        <img
          alt={weather[0].description}
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        />
        <Heading as="h2" size="2xl">
          {Math.floor(temp)}
          <Degree />
        </Heading>
      </HStack>
      <Stat>
        <StatLabel fontSize="xs">Precipitation: {todayPrecipitation}</StatLabel>
        <StatLabel fontSize="xs">Humidity: {humidity}</StatLabel>
        <StatLabel fontSize="xs">Wind: {wind_speed}</StatLabel>
      </Stat>
      <VStack align="flex-end">
        <Heading as="h3" size="md">
          {givenAddress}
        </Heading>
        <Stat>
          <StatLabel>{formattedTime(dt, 'eeee, h:mm b')}</StatLabel>
        </Stat>
      </VStack>
    </HStack>
  );
};

export default Today;
