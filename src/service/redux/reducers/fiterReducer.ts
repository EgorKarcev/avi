interface StateFilter {
  filter: { booAll: boolean; booNone: boolean; booOne: boolean; booTwo: boolean; booThree: boolean };
}

const init: StateFilter = {
  filter: { booAll: true, booNone: true, booOne: true, booTwo: true, booThree: true },
};

export interface FilterAllBigAction {
  type: 'FIlTER_ALL_BIG';
  booAll: boolean;
}

export interface FilterAllAction {
  type: 'FIlTER_ALL';
  booAll: boolean;
}

export interface FilterNoneAction {
  type: 'FIlTER_NONE';
  booNone: boolean;
}

export interface FilterOneAction {
  type: 'FIlTER_ONE';
  booOne: boolean;
}

export interface FilterTwoAction {
  type: 'FIlTER_TWO';
  booTwo: boolean;
}
export interface FilterThreeAction {
  type: 'FIlTER_THREE';
  booThree: boolean;
}

type FilterAction =
  | FilterAllBigAction
  | FilterAllAction
  | FilterNoneAction
  | FilterOneAction
  | FilterTwoAction
  | FilterThreeAction;

export function filterReducer(state = init, action: FilterAction): StateFilter {
  switch (action.type) {
    case 'FIlTER_ALL_BIG':
      return {
        ...state,
        filter: {
          booAll: action.booAll,
          booNone: action.booAll,
          booOne: action.booAll,
          booTwo: action.booAll,
          booThree: action.booAll,
        },
      };
    case 'FIlTER_ALL':
      return { ...state, filter: { ...state.filter, booAll: action.booAll } };
    case 'FIlTER_NONE':
      return { ...state, filter: { ...state.filter, booNone: action.booNone } };
    case 'FIlTER_ONE':
      return { ...state, filter: { ...state.filter, booOne: action.booOne } };
    case 'FIlTER_TWO':
      return { ...state, filter: { ...state.filter, booTwo: action.booTwo } };
    case 'FIlTER_THREE':
      return { ...state, filter: { ...state.filter, booThree: action.booThree } };
    default:
      return state;
  }
}
