import { useState } from 'react';
import styled from 'styled-components';
import headerImg from './images/pattern-bg.png';
import InfoCard from './components/InfoCard';
import Input from './components/Input';
import Map from './components/Map';

// https://geo.ipify.org/api/v2/country?apiKey=at_zpSJBRpxX144DxUilmrP1C74H8Hk4&ipAddress=8.8.8.8

function App() {
  const [IP, setIP] = useState('');

  const searchIP = (text) => {
    // search API
  };

  return (
    <>
      <Background>
        <FlexContainer>
          <Input searchIP={searchIP} />
          <InfoCard
          // ip={ip}
          // ipLocation={ipLocation}
          // timezone={timezone}
          // isp={isp}
          />
        </FlexContainer>
      </Background>
      <Map />
    </>
  );
}

export default App;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  background-image: url(${headerImg});
`;

// Todo
/*
  Styling X
  Import Ip address finder api
  Get ip from search bar
  Find ip location in api
  Pass location to map
  Display location and info in map
*/
