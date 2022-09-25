import { SidebarLinkType } from '../../types';
import { YhFooterLinks, YhHeaderLinks } from './SidebarStyled';
import React, { ReactNode } from 'react';
import { getOrElse } from '../../utils';

export const generateSidebarLinks = (sidebarLinks: SidebarLinkType[], isHeaderLink: boolean = true): ReactNode[] => {
  return sidebarLinks.map((link: SidebarLinkType): ReactNode => {
    const { name, path } = link;

    return getOrElse(
      isHeaderLink,
      <YhHeaderLinks to={path}>{name}</YhHeaderLinks>,
      <YhFooterLinks to={path}>{name}</YhFooterLinks>,
    );
  });
};
