import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { list } from '../../utils/list';
import { useLocation } from 'react-router-dom';

const Side = () => {
  const { pathname } = useLocation();

  return (
    <SidebarContainer>
      {list.map(item => (
        <div
          key={item.id}
          className={pathname === `/${item.name}` ? 'select' : 'no-select'}
        >
          <Link to={item.name} className="link-style">
            {item.name}
          </Link>
        </div>
      ))}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #657c65;

  display: flex;
  flex-direction: column;

  .link-style {
    font-weight: 700;

    font-size: 2rem;
  }

  .select {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 100px;

    background-color: #747171;
  }

  .no-select {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 100px;
    opacity: 0.4;
  }
`;

export default Side;
