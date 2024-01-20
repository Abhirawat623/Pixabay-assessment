export const searchedImageReducer= (state, { type, payload }) => {
  switch (type) {
    case "SINGLE_IMAGE_MODAL":
      return {
        ...state,
        isSingleImageModalOpen: !state.isSingleImageModalOpen,
      };

    default:
      return state;
  }
};
