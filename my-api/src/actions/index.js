import axios from "axios";

export const COMICDATA_LOAD_START = "COMICDATA_LOAD_START";
export const COMICDATA_LOAD_SUCCESS = "COMICDATA_LOAD_SUCCESS";
export const COMICDATA_LOAD_FAILURE = "COMICDATA_LOAD_FAILURE";

export const getComicHeroData = () => dispatch => {
  dispatch({ type: COMICDATA_LOAD_START});

  axios
    .get("https://superheroapi.com/api/10156678865422045/character-id")
    .then(res =>
      console.log(res)
      // dispatch(
      //   type: COMICDATA_LOAD_SUCCESS,
      //   payload: res.data.value
      // })
    )
    .catch(err => {
      dispatch({
        type: COMICDATA_LOAD_FAILURE,
        payload: "error loading data"
      });
    });
};;