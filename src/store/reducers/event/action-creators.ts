import { IEvent } from './../../../models/IEvent';
import { AppDispatch } from './../../index';
import { IUser } from './../../../models/IUser';
import { SetGuestsAction, EventActionEnum, SetEventsAction } from './types';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),

  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },

  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      //при работе с сервером нужно обработать isLoading, error
      //const events = JSON.parse(localStorage.getItem('events')) || []; даёт ошибки
      //let events: any;
      const eventsFromLS = localStorage.getItem('events');
      const events =
        typeof eventsFromLS === 'string'
          ? (JSON.parse(eventsFromLS) as IEvent[])
          : [];

      //   const parsedEvents = JSON.parse(events) as IEvent[];
      events.push(event);
      dispatch(EventActionCreators.setEvents(events));
      localStorage.setItem('events', JSON.stringify(events));
    } catch (e) {
      console.log(e);
    }
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      //let events: any;
      const eventsFromLS = localStorage.getItem('events');
      const events =
        typeof eventsFromLS === 'string'
          ? (JSON.parse(eventsFromLS) as IEvent[])
          : [];
      const currentUserEvents: IEvent[] = events.filter(
        (event: IEvent) => event.author === username || event.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {}
  },
};
