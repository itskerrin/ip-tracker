import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoCard = () => {
  return (
    <>
      <Container>
        <div>
          <span>IP ADDRESS</span>
          <p>192.212.174.101</p>
        </div>
        <div>
          <span>LOCATION</span>
          <p>Brooklyn, NY 10001</p>
        </div>
        <div>
          <span>TIMEZONE</span>
          <p>UTC -05:00</p>
        </div>
        <div>
          <span>ISP</span>
          <p>SpaceX Starlink</p>
        </div>
      </Container>
    </>
  );
};

export default InfoCard;
