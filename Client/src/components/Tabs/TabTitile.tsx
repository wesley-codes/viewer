import React, { ReactElement, useCallback } from "react";
import { ListItem, TabsButton, TabsPaneContainer } from "../../styles/Tab.styles";

export interface TabTitleProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}

type TabPaneProps = {
  title: string;
  children: ReactElement | ReactElement[];
};
export const TabTitle = ({
  title,
  index,
  setSelectedTab,
  isActive,
}: TabTitleProps) => {
  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <ListItem >
      <TabsButton isActive={isActive} onClick={handleOnClick}>{title}</TabsButton>
    </ListItem>
  );
};








 export const TabPane = ({ children }: TabPaneProps): JSX.Element => (
  <TabsPaneContainer>{children}</TabsPaneContainer>
);

