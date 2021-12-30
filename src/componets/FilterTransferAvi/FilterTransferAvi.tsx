import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AviTransferAll,
  AviTransferNone,
  AviTransferOne,
  AviTransferTwo,
  AviTransferThree,
  AviTransferAllBig,
} from '../../service/redux/action';
import useTypeSelector from '../../service/redux/HookRedux/useTypeSelector';

import './FilterTransferAvi.scss';

const FilterTransferAvi = () => {
  const filterStatus = useTypeSelector((state) => state.filter.filter);
  const dispath = useDispatch();
  const itemFilter = [
    { filterId: 'All_transfer', label: 'All', status: filterStatus.booAll },
    { filterId: 'Dont_transfer', label: 'Without transfers', status: filterStatus.booNone },
    { filterId: 'One_transfer', label: '1 Transfers', status: filterStatus.booOne },
    { filterId: 'Two_transfer', label: '2 Transfers', status: filterStatus.booTwo },
    { filterId: 'Three_transfer', label: '3 Transfers', status: filterStatus.booThree },
  ];
  const filterClick = (item: { filterId?: string; label?: string; status: any }) => {
    const FilterDontAll = itemFilter.filter((item) => item.label !== 'All');
    const chekedAll =
      item.status === false && FilterDontAll.filter((item) => item.status).length === FilterDontAll.length - 1;
    if (chekedAll) {
      dispath(AviTransferAll(true));
    }

    switch (item.label) {
      case 'All':
        dispath(AviTransferAllBig(!filterStatus.booAll));
        break;
      case 'Without transfers':
        dispath(AviTransferNone(!filterStatus.booNone));
        if (filterStatus.booNone) {
          dispath(AviTransferAll(false));
        }
        break;
      case '1 Transfers':
        dispath(AviTransferOne(!filterStatus.booOne));
        if (filterStatus.booOne) {
          dispath(AviTransferAll(false));
        }
        break;
      case '2 Transfers':
        dispath(AviTransferTwo(!filterStatus.booTwo));
        if (filterStatus.booTwo) {
          dispath(AviTransferAll(false));
        }
        break;
      case '3 Transfers':
        dispath(AviTransferThree(!filterStatus.booThree));
        if (filterStatus.booThree) {
          dispath(AviTransferAll(false));
        }
        break;

      default:
        break;
    }
  };

  const el = itemFilter.map((item) => (
    <label htmlFor={item.filterId} className="filter" key={item.filterId}>
      <input
        type="checkbox"
        id={item.filterId}
        onChange={() => filterClick(item)}
        checked={item.status}
        className="filter__checkbox"
      />
      {item.label}
    </label>
  ));
  return <div className="filter__transfer">{el}</div>;
};

export default FilterTransferAvi;
