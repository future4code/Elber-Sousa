import React, { useState } from "react";
import ProductsGrid from "./Trips";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 16px;
  gap: 32px;
`;

function ListTripsPage() {
  const [planetFilter] = useState("");
  const [durationFilter] = useState(0);


  return (
    <AppContainer>
      <ProductsGrid
        planetFilter={planetFilter}
        durationFilter={durationFilter}
      />
    </AppContainer>
  );
}

export default ListTripsPage;