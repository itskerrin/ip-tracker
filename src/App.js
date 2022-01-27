import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import headerImg from './images/pattern-bg.png';
import InfoCard from './components/InfoCard';
import Input from './components/Input';
import Map from './components/Map';

function App() {
  const [IP, setIP] = useState('IP ADDRESS');
  const [isp, setIsp] = useState('INTERNET SERVICE PROVIDER');
  const [ipLocation, setIpLocation] = useState('REGION');
  const [timezone, setTimezone] = useState('');

  const searchIP = async (text) => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_zpSJBRpxX144DxUilmrP1C74H8Hk4&ipAddress=${text}`
    );

    setIP(response.data['ip']);
    setIsp(response.data['isp']);
    setIpLocation(response.data['location']['region']);
    setTimezone(response.data['location']['timezone']);
    console.log(response);
  };

  return (
    <>
      <Background>
        <FlexContainer>
          <Input searchIP={searchIP} />
          <InfoCard
            ip={IP}
            ipLocation={ipLocation}
            timezone={timezone}
            isp={isp}
          />
        </FlexContainer>
      </Background>
      <Map ip={IP} />
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
