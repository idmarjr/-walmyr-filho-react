import styled from "styled-components";

const StyledPageHeader = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px -2px rgba(0,0,0, 0.5);
`;

const StyledPageHeaderH1 = styled.h1`
  line-height: 1.2em;
  font-size: 145%;
  transition: .7s all;

  @media (min-width: 960px) {
    font-size: 200%;
  }
`;

const StyledPageHeaderH1Span = styled.span`
  display: none;

  @media (min-width: 960px) {
    display: inline;
  }
`;

export {
  StyledPageHeaderH1,
  StyledPageHeaderH1Span
};

export default StyledPageHeader;
