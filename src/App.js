import React, { useState, useEffect } from 'react';

import {
  Center,
  ChakraProvider,
  Box,
  Divider,
  Heading,
  Input,
  VStack,
  HStack,
  Image,
  extendTheme,
} from '@chakra-ui/react';

import TempChart from './components/TempChart';
import { addSeconds } from 'date-fns';
import Today from './components/Today';
import Week from './components/Week';
import WeatherPlaceholder from './components/WeatherPlaceholder';
import { openWeatherAPI, getAddressGoogleAPI } from './services';
import sun from './sun.jpg';

const themeWithFont = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Montserrat',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
      },
    },
  },
});

// The "WeatherTable" component of the app, included in this file as it's central to the function
// of the weather app and is responsible for rendering "Today", "TempChart", "Week"
// recieves `weatherData` and `givenAddress` from App `state` as a result of service calls
// then, `weatherData` is immediately destructured into the keys we're interested in
const WeatherTable = ({
  weatherData: { current, hourly, daily },
  givenAddress,
}) => {
  // Prepare the data for entry into the temperature chart
  const hourlyTemps = hourly
    .map(({ temp, dt }) => {
      return { temp, dt: addSeconds(new Date(0), dt) };
    })
    .slice(0, 24);

  // 8 days of info come in the `daily` data block from OpenWeather
  // destruct the first day to get information for the <Today> component,
  // then slice the the "tail" or `restOfWeek` to get our 6 days total
  const [{ temp, pop }, ...restOftheWeek] = daily.slice(0, daily.length - 1);
  return (
    <div>
      <Today
        current={current}
        todayPrecipitation={pop}
        givenAddress={givenAddress}
      />
      <Divider mt={2} mb={5} />
      <TempChart todayTemps={temp} data={hourlyTemps} />
      <Divider my={2} />
      <Week weekData={restOftheWeek} />
    </div>
  );
};

const App = () => {
  const [currrentLocation, setCurrentLocation] = useState({});
  const [openWeatherData, setOpenWeatherData] = useState({});
  const [addressName, setAddressName] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setCurrentLocation(coords)
    );
  }, []); // Only run this effect once, on page load

  useEffect(() => {
    const { latitude, longitude } = currrentLocation;
    if (latitude && longitude) {
      openWeatherAPI({ latitude, longitude }).then(data =>
        setOpenWeatherData(data)
      );
    }
  }, [currrentLocation]); // Only run this effect when the currentLocation changes

  useEffect(() => {
    const { latitude, longitude } = currrentLocation;
    if (latitude && longitude) {
      getAddressGoogleAPI({ latitude, longitude }).then(({ results }) => {
        // Combine the string resulting from the Google API, not ideal, but achieves the text we want
        // i.e "Richmond, VA"
        setAddressName(
          results[0].address_components[1].short_name +
            ', ' +
            results[0].address_components[2].short_name
        );
      });
    }
  }, [currrentLocation]); // Only run this effect when the currentLocation changes

  return (
    <ChakraProvider theme={themeWithFont}>
      <Center p={10}>
        <VStack spacing={8}>
          <Box style={{ width: '650px' }}>
            {typeof openWeatherData.daily !== 'undefined' &&
            addressName.length > 0 ? (
              <div>
                <header>
                  <HStack>
                    <Image width={50} src={sun} mb={1} />
                    <Heading as="h1" size="lg" fontWeight={400} pb={3}>
                      Weather Watcher
                    </Heading>
                    <div>
                      <Input
                        hidden={true}
                        value={addressName}
                        placeholder="NOTUSED"
                        onChange={({ target: { value } }) => console.log(value)}
                      />
                    </div>
                  </HStack>
                </header>
                {/* This is the "main" component responsible for much of the rendering */}
                {/* Implemented above as `WeatherTable` */}
                <WeatherTable
                  weatherData={openWeatherData}
                  givenAddress={addressName}
                />
              </div>
            ) : (
              <WeatherPlaceholder />
            )}
          </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default App;
