import React, { ReactElement, useState } from "react";
import { TabsContainer } from "../../styles/Tab.styles";
import { TabTitle, TabTitleProps } from "./TabTitile";
type TabProps = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

const Tabs = ({ children, preSelectedTabIndex }: TabProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedTabIndex || 0
  );

  return (
  <React.Fragment>
  <TabsContainer style={{display:"flex"}}>
      {children.map((item, index) => (
        <TabTitle
          key={item.props.title}
          title={item.props.title}
          index={index}
          isActive={index === selectedTabIndex}
          setSelectedTab={setSelectedTabIndex}
        />
      ))}
    </TabsContainer>
    {children[selectedTabIndex]}

  </React.Fragment>
  );
};

export default Tabs;
