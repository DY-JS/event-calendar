import { Button, Row, Modal } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { AppDispatch } from '../store';

const Event: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setIsModalOpen(false);
    createEvent(event);
  };

  return (
    <div>
      {/* {JSON.stringify(events, null, 2)} */}
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setIsModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null} //если не null будут кнопки
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </div>
  );
};

export default Event;
