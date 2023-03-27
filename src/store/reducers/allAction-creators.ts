import { AuthActionCreators } from './auth/action-creators';
import { EventActionCreators } from './event/action-creators';
//сюда складываем все акшн-креаторы
export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
