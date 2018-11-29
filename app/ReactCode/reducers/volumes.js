import * as types from "../actions/types";

export const volumes = function(state = {}, action) {
  switch (action.type) {
    case types.SET_VOLUME_LIST: {
      state = action.volumes;
      return state;
    }
    default:
      return {};
  }
};
