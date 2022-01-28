import styled from 'styled-components';

const InfoCard = ({ ip, ipLocation, timezone, isp, country }) => {
  return (
    <>
      <Container>
        <Section>
          <span>IP ADDRESS</span>
          <p>{ip}</p>
        </Section>
        <Section>
          <span>LOCATION</span>
          <p>
            {ipLocation}, {country}
          </p>
        </Section>
        <Section>
          <span>TIMEZONE</span>
          <p>UTC {timezone}</p>
        </Section>
        <Section>
          <span>ISP</span>
          <p>{isp}</p>
        </Section>
      </Container>
    </>
  );
};

export default InfoCard;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  width: 80vw;
  border-radius: 10px;
  padding: 0.6em;
  margin-top: 1.2em;
  margin-bottom: -9em;
  z-index: 100;
`;

const Section = styled.div`
  padding: 0.6em 0;

  span {
    color: hsl(0, 0%, 59%);
    font-size: 0.7em;
    font-weight: 400;
    letter-spacing: 1px;
  }

  p {
    color: hsl(0, 0%, 17%);
    margin-top: 0.5em;
    font-weight: 500;
  }
`;
