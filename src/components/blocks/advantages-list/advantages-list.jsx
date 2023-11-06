import React from "react";
import Title, { TitleLevel } from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { AdvantageItem, AdvantageList, StyledAdvantages } from "./styles";
import { AppRoute } from './../../../consts';


function AdvantagesList({ advantages }) {
  return (
    <StyledAdvantages>
      {advantages?.length ? (
        <>
          <Title level={TitleLevel.H2} >Почему фермерские продукты лучше?</Title>
          <AdvantageList $isGridList >
            {advantages.map((advantage) => (
              <AdvantageItem key={advantage.id}>
                <AdvantageCard  {...advantage} />
              </AdvantageItem>
            ))}
          </AdvantageList>
        </>
      ) : null}
      <Button minWidth={353} link={AppRoute.BUY}>Купить</Button>
    </StyledAdvantages>
  );
}

export default AdvantagesList;