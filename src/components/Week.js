import { Box, Flex, HStack, Stat, StatLabel } from '@chakra-ui/react';
import Degree from './Degree';
import formattedTime from '../utils/formatTime';

const Week = ({ weekData }) => {
  return (
    <Flex justify="space-between" flexDirection="row">
      {weekData.map((dayData, i) => {
        return (
          <Box
            flexGrow="1"
            flexShrink="1"
            flexBasis="0"
            key={i}
            d="flex"
            flexDirection="column"
            alignItems="center"
            borderWidth="1px"
            borderRadius="8px"
            p={1}
            m={2}
          >
            <Stat>
              <StatLabel fontSize="xs" p={1}>
                {formattedTime(dayData.dt, 'EEEE')}
              </StatLabel>
            </Stat>
            <img
              style={{ border: '2px solid #e9edf3', borderRadius: '100%' }}
              alt={dayData.weather[0].description}
              src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`}
            />
            <Stat pt={1}>
              <HStack>
                <StatLabel fontSize="xs">
                  {Math.floor(dayData.temp.max)}
                  <Degree />
                </StatLabel>
                <StatLabel color="#777" fontSize="xs">
                  {Math.floor(dayData.temp.min)}
                  <Degree />
                </StatLabel>
              </HStack>
            </Stat>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Week;
