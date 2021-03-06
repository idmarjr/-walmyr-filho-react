import styled from "styled-components";

const StyledCourses = styled.div`
  padding: 48px 0;
  background-color: #ededed;
`;

const StyledCoursesH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
`;

const StyledCoursesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCoursesInsideContainer = styled.li`
  list-style: none;
  margin-bottom: 24px;
  background: #fff;
  box-shadow: 1px 1px 3px -1px rgba(0,0,0, 0.3);
  transition: background 0.3s ease;

  :hover {
    background-color: rgba(240, 165, 0, 0.7);
  }

  @media (min-width: 960px) {
    flex-basis: calc(100% / 3 - 20px)
  }
`;

const StyledCoursesLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  border-radius: 3px;

  :hover {
    color: #fff;
    text-shadow: 1px 1px 0px rgba(0,0,0, 0.5);
  }
`;

const StyledCoursesParagraph = styled.p`
  margin-top: 0;
`;

export {
    StyledCoursesH2,
    StyledCoursesContainer,
    StyledCoursesInsideContainer,
    StyledCoursesLink,
    StyledCoursesParagraph
};

export default StyledCourses;
