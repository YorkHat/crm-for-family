import React from 'react';
import { YhSidebarWrapper } from './SidebarStyled';
import { SidebarBody } from './SidebarBody';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar = (): JSX.Element => {
  return (
    <YhSidebarWrapper>
      <SidebarBody />
      <SidebarFooter />
    </YhSidebarWrapper>
  );
};
