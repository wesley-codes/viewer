import React from "react";
import {
  LoaderContainer,
  LoaderSVG,
  Container,
} from "../../styles/Loader.styles";

const Loader = () => {
  return (
    <React.Fragment>
      <Container>
        <LoaderContainer>
          <LoaderSVG width={70} height={70} />
        </LoaderContainer>
        <h3>Loading ...</h3>
      </Container>
    </React.Fragment>
  );
};

export default Loader;
