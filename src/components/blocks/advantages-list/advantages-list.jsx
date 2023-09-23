import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { AdvantageItem, AdvantageList, StyledAdvantages } from "./styles";


function AdvantagesList({ advantages }) {
  return (
    <StyledAdvantages>
      {advantages?.length ? (
        <>
          <Title>Почему фермерские продукты лучше?</Title>
          <AdvantageList $isGridList >
            {advantages.map((advantage) => (
              <AdvantageItem key={advantage.id}>
                <AdvantageCard  {...advantage} />
              </AdvantageItem>
            ))}
          </AdvantageList>
        </>
      ) : null}
      <Button minWidth={353}>Купить</Button>
    </StyledAdvantages>
  );
}

export default AdvantagesList;