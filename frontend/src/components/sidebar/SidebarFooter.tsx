import React from 'react';
import { SidebarLinkName, SidebarLinkType } from '../../types';
import clientRoute from '../../clientRoute';
import { generateSidebarLinks } from './generateSidebarLinks';
import { YhSidebarFooter } from './SidebarStyled';

export const sidebarFooterLinks: SidebarLinkType[] = [
  {
    path: clientRoute.root,
    name: SidebarLinkName.settings,
  },
  {
    path: clientRoute.root,
    name: SidebarLinkName.aboutUs,
  },
];

const links = generateSidebarLinks(sidebarFooterLinks, false);

export const SidebarFooter = (): JSX.Element => {
  return <YhSidebarFooter>{links}</YhSidebarFooter>;
};
