// const init = {
//   tickets: [],
//   load: false,
//   booSort: true,
//   filter: { booAll: true, booNone: true, booOne: true, booTwo: true, booThree: true },
// };

// const reducer = (state = init, action) => {
//   switch (action.type) {
//     case 'FETCH_TICKET':
//       return { ...state, tickets: [...state.tickets, ...action.tickets] };
//     case 'AVI_BOO_TOKEN':
//       return { ...state, booSort: action.booSort };
//     case 'LOAD':
//       return { ...state, load: action.stop };

//     case 'FIlTER_ALL_BIG':
//       return {
//         ...state,
//         filter: {
//           booAll: action.booAll,
//           booNone: action.booAll,
//           booOne: action.booAll,
//           booTwo: action.booAll,
//           booThree: action.booAll,
//         },
//       };
//     case 'FIlTER_ALL':
//       return { ...state, filter: { ...state.filter, booAll: action.booAll } };

//     case 'FIlTER_NONE':
//       return { ...state, filter: { ...state.filter, booNone: action.booNone } };
//     case 'FIlTER_ONE':
//       return { ...state, filter: { ...state.filter, booOne: action.booOne } };
//     case 'FIlTER_TWO':
//       return { ...state, filter: { ...state.filter, booTwo: action.booTwo } };
//     case 'FIlTER_THREE':
//       return { ...state, filter: { ...state.filter, booThree: action.booThree } };
//     default:
//       return state;
//   }
// };
// export default reducer;
