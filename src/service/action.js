import fetchAvi from "./fetchAvi";

export const AviTicket = (tickets) => ({ type: 'AVI_FETCH_TICKET', tickets });
export const AviBoo = (booSort) => ({ type: 'AVI_BOO_TOKEN', booSort });

export const AviTransferAll = (booAll) => ({ type: 'AVI_BOO_FIlTER_ALL', booAll });
export const AviTransferAllBig = (booAll) => ({ type: 'AVI_BOO_FIlTER_ALL_BIG', booAll });
export const AviTransferNone = (booNone) => ({ type: 'AVI_BOO_FIlTER_NONE', booNone });
export const AviTransferOne = (booOne) => ({ type: 'AVI_BOO_FIlTER_ONE', booOne });
export const AviTransferTwo = (booTwo) => ({ type: 'AVI_BOO_FIlTER_TWO', booTwo });
export const AviTransferThree = (booThree) => ({ type: 'AVI_BOO_FIlTER_THREE', booThree });
export const loader = (stop) => ({type: 'AVI_LOAD', stop})


export const loadTick = () => async (dispath) => {
    const id = await fetchAvi.getApi().then((res)=> res.searchId)
    let stop = false;
    while (stop === false) {
        try{
                // eslint-disable-next-line no-await-in-loop
        const resTick = await fetchAvi.getTicket(id).then((res) => res);
        stop = resTick.stop

        dispath(AviTicket(resTick.tickets));
      }
      catch(err) {
      //
      }
    }
    dispath(loader(stop))
}

// (async () => {
//     const id = await FetchAvi.getApi().then((res) => res.searchId);
//     let stop = false;
//     while (stop === false) {
//       try{
//                 // eslint-disable-next-line no-await-in-loop
//         const resTick = await FetchAvi.getTicket(id).then((res) => res);
//         stop = resTick.stop
//         dispath(AviTicket(resTick.tickets));
//       }
//       catch(err) {
//       //
//       }
//     }
//   })();