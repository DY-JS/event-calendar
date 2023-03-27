import { Layout, Row, Menu, Col } from 'antd';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../models/IUser';
import { RouteNames } from '../router';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  };

  // const privateMenuItems = [
  //   {
  //     key: 'login',
  //     onClick: logout,
  //     children: 'Logout',
  //   },
  // ];   через map можно отрисовать <Menu.Item key="login" onClick={logout}>
  //   Logout
  // </Menu.Item>

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>Ulbi</div>
            <Col xs={24} sm={20} md={4} lg={2}>
              <Menu theme="dark" mode="horizontal" selectable>
                <Menu.Item key="login" onClick={logout}>
                  Logout
                </Menu.Item>
              </Menu>
            </Col>
          </>
        ) : (
          <Col xs={24} sm={20} md={4} lg={2}>
            <Menu theme="dark" mode="horizontal" selectable>
              <Menu.Item
                key="logout"
                onClick={() => {
                  navigate(RouteNames.LOGIN);
                }}
              >
                Logout
              </Menu.Item>
            </Menu>
          </Col>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
