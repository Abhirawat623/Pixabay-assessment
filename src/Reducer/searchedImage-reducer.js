export const searchedImageReducer= (state, { type, payload }) => {
  switch (type) {
    case "SINGLE_IMAGE_MODAL":
      return {
        ...state,
        isSingleImageModalOpen: !state.isSingleImageModalOpen,
      };
    case "SEARCHED_VALUE":
      return{
        ...state,
        searchedValue:payload
      }
    default:
      return state;
  }
};
