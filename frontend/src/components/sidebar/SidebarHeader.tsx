import React from 'react';
import { SidebarLinkName, SidebarLinkType } from '../../types';
import clientRoute from '../../clientRoute';
import { YhSidebarHeader } from './SidebarStyled';
import { generateSidebarLinks } from './generateSidebarLinks';

export const sidebarHeaderLinks: SidebarLinkType[] = [
  {
    path: clientRoute.root,
    name: SidebarLinkName.home,
  },
  {
    path: clientRoute.root,
    name: SidebarLinkName.familyProfile,
  },
  {
    path: clientRoute.root,
    name: SidebarLinkName.calendar,
  },
  {
    path: clientRoute.root,
    name: SidebarLinkName.statistic,
  },
  {
    path: clientRoute.root,
    name: SidebarLinkName.notes,
  },
];

const links = generateSidebarLinks(sidebarHeaderLinks);

export const SidebarHeader = (): JSX.Element => {
  return <YhSidebarHeader>{links}</YhSidebarHeader>;
};
