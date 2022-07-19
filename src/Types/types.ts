import {Colors} from './enums'

export interface ISidebarNav {
  id: number
  title: string
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