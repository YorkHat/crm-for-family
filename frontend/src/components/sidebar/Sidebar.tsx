import React from 'react';
import { YhSidebarWrapper } from './SidebarStyled';
import { SidebarHeader } from './SidebarHeader';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar = (): JSX.Element => {
  return (
    <YhSidebarWrapper>
      <SidebarHeader />
      <SidebarFooter />
    </YhSidebarWrapper>
  );
};
