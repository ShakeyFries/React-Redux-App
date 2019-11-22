import {
  COMICDATA_LOAD_START,
  COMICDATA_LOAD_SUCCESS,
  COMICDATA_LOAD_FAILURE
} from "../actions";

const initialState = {
      isLoading: false,
      error: "",
      hero: {name: "", intelligence: "", strength: "", 
        durability: "", power: "", combat: ""
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMICDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case COMICDATA_LOAD_SUCCESS:
      return{
        ...state,
        hero: { ...state.hero, name: action.payload },
        isLoading: false
      };
      case COMICDATA_LOAD_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
    default:
      return state;
  }
};

export default reducer;