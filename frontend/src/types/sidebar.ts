export type SidebarLinkType = {
  path: string;
  name: SidebarLinkName;
};

export enum SidebarLinkName {
  home = 'Профиль',
  familyProfile = 'Профиль семьи',
  calendar = 'Календарь',
  statistic = 'Статистика',
  notes = 'Заметки',
  settings = 'Настройки',
  aboutUs = 'О нас',
}
