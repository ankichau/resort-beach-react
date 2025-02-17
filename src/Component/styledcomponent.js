import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img1}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
