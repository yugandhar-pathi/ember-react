import * as types from "../actions/types";

const volumes = (state = {}, action) => {
  switch (action.type) {
    case types.SET_VOLUME_LIST: {
      return action.volumes;
    }
    default:
      return state;
  }
};

export default volumes;
