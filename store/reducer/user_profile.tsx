export const userDetails = (initialState: any = {}, action?: any) => {
  switch (action.type) {
    case "UPDATE_USER_DETAILS":
      return {
        userDetails: { ...action?.userDetails },
      };
    default:
      return initialState;
  }
};
