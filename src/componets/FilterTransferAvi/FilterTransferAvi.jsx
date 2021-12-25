import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AviTransferAll,
  AviTransferNone,
  AviTransferOne,
  AviTransferTwo,
  AviTransferThree,
  AviTransferAllBig,
} from '../../service/action';

import './FilterTransferAvi.scss';

const FilterTransferAvi = () => {
  const filterSt = useSelector((state) => state.filter);
  const dispath = useDispatch();
  const itemFilter = [
    { filId: 'All_transfer', label: 'All', filAction: 'All', status: filterSt.booAll },
    { filId: 'Dont_transfer', label: 'Without transfers', filAction: 'dontTr', status: filterSt.booNone },
    { filId: 'One_transfer', label: '1 Transfers', filAction: '1Tr', status: filterSt.booOne },
    { filId: 'Two_transfer', label: '2 Transfers', filAction: '2Tr', status: filterSt.booTwo },
    { filId: 'Three_transfer', label: '3 Transfers', filAction: '3Tr', status: filterSt.booThree },
  ];
  const filterClick = (item) => {
    const overFil = itemFilter.filter((itemFil) => itemFil.label !== 'All');
    const vklAll = item.status === false && overFil.filter((itemSt) => itemSt.status).length === overFil.length - 1;
    if (vklAll) {
      dispath(AviTransferAll(true));
    }

    switch (item.filAction) {
      case 'All':
        dispath(AviTransferAllBig(!filterSt.booAll));
        break;
      case 'dontTr':
        dispath(AviTransferNone(!filterSt.booNone));
        if (filterSt.booNone) {
          dispath(AviTransferAll(false));
        }
        break;
      case '1Tr':
        dispath(AviTransferOne(!filterSt.booOne));
        if (filterSt.booOne) {
          dispath(AviTransferAll(false));
        }
        break;
      case '2Tr':
        dispath(AviTransferTwo(!filterSt.booTwo));
        if (filterSt.booTwo) {
          dispath(AviTransferAll(false));
        }
        break;
      case '3Tr':
        dispath(AviTransferThree(!filterSt.booThree));
        if (filterSt.booThree) {
          dispath(AviTransferAll(false));
        }
        break;

      default:
        break;
    }
  };

  // const chageFil = (item) => {
  //   const booAll = item.label === 'All';
  //   if (booAll) {
  //     const booAp = !item.status;
  //     console.log(booAp ? 'vkl' : 'vikl');
  //     // const el = itemFilter.find((filt) => filt.label === 'All');
  //   }
  //   const overFil = itemFilter.filter((itemFil) => itemFil.label !== 'All');
  //   const vklAll = item.status === false && overFil.filter((itemSt) => itemSt.status).length === overFil.length - 1;
  //   if (vklAll) {
  //     console.log('gsdfghgfddxfg');
  //   }

  //   setItemFilter((prev) => {
  //     return prev.map((ell) => (ell.label === item.label ? { ...ell, status: !ell.status } : ell));
  //   });
  // };

  const el = itemFilter.map((item) => (
    <label htmlFor={item.filId} className="filter" key={item.filId}>
      <input type="checkbox" id={item.filId} onChange={() => filterClick(item)} checked={item.status} />
      {item.label}
    </label>
  ));
  return <div className="filter__transfer">{el}</div>;
};

export default FilterTransferAvi;
