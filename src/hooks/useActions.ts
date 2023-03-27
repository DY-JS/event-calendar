import { allActionCreators } from './../store/reducers/allAction-creators';
import { AppDispatch } from './../store/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//этот хук useActions вызывает все экшн криэйторы в приложении(хранятся в allActionCreators)
export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
};
