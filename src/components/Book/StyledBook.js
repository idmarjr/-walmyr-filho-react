import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// StyledBook
////////////////////////////////////////////////////////////////////////////////
const StyledBook = styled.div`
  padding: 48px 0;
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBookContainer
////////////////////////////////////////////////////////////////////////////////
const StyledBookContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: start;
    text-align: right;
  }
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBookH2
////////////////////////////////////////////////////////////////////////////////
const StyledBookH2 = styled.h2`
  margin-top: 0;
`;
////////////////////////////////////////////////////////////////////////////////
// StyledBookH3
////////////////////////////////////////////////////////////////////////////////
const StyledBookH3 = styled.h3`
  margin-bottom: 12px;
`;
////////////////////////////////////////////////////////////////////////////////
// StyledBookH4
////////////////////////////////////////////////////////////////////////////////
const StyledBookH4 = styled.h4`
  margin-top: 0;
  font-size: 120%;
`;

////////////////////////////////////////////////////////////////////////////////
// StyleBookDescription
////////////////////////////////////////////////////////////////////////////////
const StyleBookDescription = styled.div`
  margin: 0 auto 24px auto;

  @media (min-width: 960px) {
    max-width: 60%;
    margin-right: 48px;
    margin-left: 0;
  }
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogParagraph
////////////////////////////////////////////////////////////////////////////////
const StyledBlogParagraph = styled.p`

`;

////////////////////////////////////////////////////////////////////////////////
// StyleBookPreview
////////////////////////////////////////////////////////////////////////////////
const StyleBookPreview = styled.div`

`;

////////////////////////////////////////////////////////////////////////////////
// StyledBookImage
////////////////////////////////////////////////////////////////////////////////
const StyledBookImage = styled.img`
  max-width: 400px;
`;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
export {
  StyledBookContainer,
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyledBlogParagraph,
  StyledBookImage,
  StyleBookDescription,
  StyleBookPreview
};

export default StyledBook;