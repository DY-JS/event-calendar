import moment, { Moment } from 'moment';
export const rules = {
  required: (message: string = 'Required field') => ({
    required: true,
    message: message,
  }),
};

export const dateRules = {
  // isDateExist: (message: string) => () => ({
  //   validator(_: any, value: Moment) {
  //     if (value) {
  //       Promise.resolve();
  //     }
  //     return Promise.reject(new Error(message));
  //   },
  // }),

  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
