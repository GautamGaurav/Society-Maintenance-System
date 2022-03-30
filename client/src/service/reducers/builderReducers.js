import { ADD_BUILDER, UPDATE_BUILDER, DELETE_BUILDER } from "../contants/index";
const initialState = {
  builderData: [],
};

const builder = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUILDER:
      return {
        builder: action.data,
      };
    case UPDATE_BUILDER:
      return {
        builder: action.data,
      };
    case DELETE_BUILDER:
      return {
        builder: action.data,
      };
    default:
      return state;
      break;
  }
};

export default builder;
