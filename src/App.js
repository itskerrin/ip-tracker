import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import headerImg from './images/pattern-bg.png';
import InfoCard from './components/InfoCard';
import Input from './components/Input';
import Map from './components/Map';

function App() {
  const [IP, setIP] = useState({
    ip: 'IP ADDRESS',
    ipLocation: 'REGION',
    timezone: '',
    isp: 'INTERNET SERVICE PROVIDER',
    country: '',
    lat: 51.501476,
    lon: -0.140634,
  });

  const searchIP = async (text) => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_zpSJBRpxX144DxUilmrP1C74H8Hk4&ipAddress=${text}`
    );

    setIP({
      ip: response.data['ip'],
      ipLocation: response.data['location']['region'],
      timezone: response.data['location']['timezone'],
      isp: response.data['isp'],
      country: response.data['location']['country'],
      lat: response.data['location']['lat'],
      lon: response.data['location']['lng'],
    });

    // console.log(response.data);
  };

  return (
    <>
      <Background>
        <FlexContainer>
          <Input searchIP={searchIP} />
          <InfoCard
            ip={IP.ip}
            ipLocation={IP.ipLocation}
            timezone={IP.timezone}
            isp={IP.isp}
          />
        </FlexContainer>
      </Background>
      <Map latitude={IP.lat} longitude={IP.lon} />
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
