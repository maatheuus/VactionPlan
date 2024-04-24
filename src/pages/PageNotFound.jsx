import styled from "styled-components";

import errorImage from "../assets/svg/404-error-page.svg";
import Button from "../ui/Button";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.img`
  max-width: 45%;
  min-width: 55rem;
  display: flex;
  margin: auto;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <StyledImage src={errorImage} alt="gif page not found" />
    </div>
  );
}

export default PageNotFound;
