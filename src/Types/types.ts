import { Colors } from './enums'
import { FC } from 'react'

export interface ISidebarNav {
  id: number
  title: string
  path: string
}

export interface IFamilyProfile {
  id: number
  name: string
  online: string
}

export interface ITask {
  id: number
  task: string
}

export interface IStatisticsItem {
  id: number
  number: number
  title: string
  color: Colors
}

export interface IRoute {
  path: string
  component: FC
}