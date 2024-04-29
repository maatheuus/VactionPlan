import styled from "styled-components";

import errorImage from "../assets/svg/404-error-page.svg";
import Button from "../ui/Button";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.img`
  max-width: 45%;
  min-width: 45rem;
  display: flex;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <StyledImage src={errorImage} alt="gif page not found" />
    </Container>
  );
}

export default PageNotFound;
