import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import "./advantages-list.css"

function AdvantagesList({advantages}) {
    
  return (
    <section className="advantages-list">
      {advantages?.length ? (
      <>
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="advantages-list__list">
        {advantages.map((advantage) => (
          <li className="advantages-list__item" key={advantage.id}>
            <AdvantageCard  {...advantage}/>
          </li> 
          ))}
      </ul>
      <Button minWidth={353}>Купить</Button>
      </>
      )
      :null} 
    </section>
  );
}

export default AdvantagesList;