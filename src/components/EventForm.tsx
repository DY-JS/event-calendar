import { Row, Form, Input, Button, DatePicker, Select } from 'antd';
import axios from 'axios';
import moment, { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { formatDate } from '../utils/date';
import { rules, dateRules } from '../utils/rules';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  //const dispatch = useDispatch();
  // const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  });

  const { user } = useTypedSelector((state) => state.auth);

  // const handleDateChange = (date: Moment) => {
  //   console.log(date);
  // };

  const selectDate = (date: Moment | null) => {
    if (date) {
      //console.log(formatDate(date?.toDate()));
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  //для Select
  const deafultOption = {
    value: 'Choose guest',
    label: 'Choose guest',
    disabled: true,
  };
  const options = guests.map((guest) => ({
    value: guest.username,
    label: guest.username,
  }));

  const optionsForSelect = [deafultOption, ...options];

  const submitForm = async () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="description of event"
        name="description"
        rules={[rules.required('Please input description of event!')]}
      >
        <Input
          type="text"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Date of event"
        name="date"
        //rules={[rules.required('Please input description of event!')]}
        // rules={[
        // dateRules.isDateExist('Date is required'),
        // dateRules.isDateAfter('Invalid date'),
        // ]}
      >
        <DatePicker
          //selected={selectedDate}
          onChange={(date) => selectDate(date as Moment | null)}
          //dateFormat="MMMM d, yyyy"
        />{' '}
        {/*DatePicker из antd возвращает объект типа Moment библиотеки moment */}
      </Form.Item>
      <Form.Item
        label="Guest"
        name="guest"
        rules={[rules.required('Please input guest!')]}
      >
        <Select
          onChange={(guest: string) => setEvent({ ...event, guest: guest })}
          style={{ width: 220 }}
          options={optionsForSelect}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          {/* <Button type="primary" htmlType="submit" loading={isLoading}> */}
          <Button type="primary" htmlType="submit">
            Create event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
