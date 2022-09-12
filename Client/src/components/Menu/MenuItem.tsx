import React, { ReactNode } from "react";
import {
  ListItem,
  LinkItem,
  LinkName,
  ToolTip,
} from "../../styles/Menu.styles";

interface MenuItemProps {
  active: boolean;
  children: ReactNode;
  title: string;
  tooltip: string;
}

const MenuItem = ({ active, children, title, tooltip,}: MenuItemProps) => {
  return (
    <ListItem active={+active} >
      <LinkItem active={+active}>
        {children}
        <LinkName active={+active}>{title}</LinkName>
      </LinkItem>
      <ToolTip active={+active}>{tooltip}</ToolTip>
    </ListItem>
  );
};

export default MenuItem;
