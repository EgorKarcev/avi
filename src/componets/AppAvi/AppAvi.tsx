import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterTransferAvi from '../FilterTransferAvi';
import ListAvi from '../ListAvi';
import { loadTick } from '../../service/redux/action';
import './AppAvi.scss';
//@ts-ignore
import logo from '../../image/logo.jpg';
const AppAvi = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(loadTick());
  }, [dispath]);

  return (
    <div className="avi">
      <img className="avi__header" src={logo} alt="fsad" />
      <div className="avi__section">
        <div className="avi__filterTransfer">
          <FilterTransferAvi />{' '}
        </div>
        <div className="avi__ticket">
          <ListAvi />{' '}
        </div>
      </div>
    </div>
  );
};
export default AppAvi;
