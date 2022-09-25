import { SidebarLinkType } from '../../types';
import { YhBodyLinks, YhFooterLinks } from './SidebarStyled';
import React, { ReactNode } from 'react';
import { getOrElse } from '../../utils';

export const generateSidebarLinks = (sidebarLinks: SidebarLinkType[], isHeaderLink: boolean = true): ReactNode[] => {
  return sidebarLinks.map((link: SidebarLinkType): ReactNode => {
    const { name, path } = link;

    return getOrElse(
      isHeaderLink,
      <YhBodyLinks to={path}>{name}</YhBodyLinks>,
      <YhFooterLinks to={path}>{name}</YhFooterLinks>,
    );
  });
};
