import styled from 'styled-components';
import headerImg from './images/pattern-bg.png';
import InfoCard from './components/InfoCard';
import Input from './components/Input';
import Map from './components/Map';

function App() {
  return (
    <>
      <Background>
        <FlexContainer>
          <Input />
          <InfoCard />
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
  Import Ip address finder api
  Get ip from search bar
  Find ip location in api
  Pass location to map
  Display location and info in map
*/
