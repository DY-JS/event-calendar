import { Badge, BadgeProps, Calendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Moment } from 'moment';
import { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from './../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    //в этой функции Dayjs обязательно
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(
      (event) => event.date === formatedDate
    );
    //находим все события этого дня

    return (
      <div>
        {currentDayEvents.map((event, i) => (
          <div key={i}>{event.description}</div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
