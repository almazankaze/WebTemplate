import { NAV_ACTION_TYPES } from "./navbar-types";

const NAV_INITIAL_STATE = {
  isMenuOpen: false,
};

export const NavReducer = (state = NAV_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case NAV_ACTION_TYPES.SET_IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: payload,
      };

    default:
      return state;
  }
};
