import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styles";
import { TitleSize } from "../title/title";


function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton $isActive key={index} >
                  <TitleText level="4" size={TitleSize.MICRO} $isActive>
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={index} onClick={() => setActiveTab(index)}>
                <TitleText level="4" size={TitleSize.MICRO}>{item.title}</TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div >
  );
}

export default Tabs;