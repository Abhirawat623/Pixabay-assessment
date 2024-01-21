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
      case "IMAGE_CATEGORY":
        return{
          ...state,
          imageCat:payload
        }
    default:
      return state;
  }
};
