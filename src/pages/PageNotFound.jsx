import styled from "styled-components";

import errorImage from "../assets/svg/404-error-page.svg";

const StyledImage = styled.img`
  max-width: 45%;
  min-width: 55rem;
  display: flex;
  margin: auto;
`;

function PageNotFound() {
  return (
    <div>
      <StyledImage src={errorImage} alt="gif page not found" />
    </div>
  );
}

export default PageNotFound;
