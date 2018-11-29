import * as types from "./types";

export function setVolumeList(volumes) {
  return dispatch => {
    dispatch({
      type: types.SET_VOLUME_LIST,
      volumes
    });
  };
}
