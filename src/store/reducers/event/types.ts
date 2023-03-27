//здесь типизируем state, action и т.п.

import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
  //isLoading - можно добавить
  //Error
}

export enum EventActionEnum {
  SET_EVENTS = 'SET_EVENTS',
  SET_GUESTS = 'SET_GUESTS',
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventsAction; // oбобщение двух actions
