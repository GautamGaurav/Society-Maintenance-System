import { ADD_BUILDER, UPDATE_BUILDER, DELETE_BUILDER } from "../contants/index";

export const AddBuilder = (data) => {
  return {
    data,
    type: ADD_BUILDER,
  };
};

export const UpdateBuilder = (data) => {
  return {
    data,
    type: UPDATE_BUILDER,
  };
};

export const DeleteBuilder = (data) => {
  return {
    data,
    type: DELETE_BUILDER,
  };
};
