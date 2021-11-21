import {
  INotification,
  NotificationActionTypes,
  SET_NOTIFICATION,
} from "../../@types";

const initialState: INotification = {
  message: "",
  type: "success",
};

const notificationReducer = (
  state = initialState,
  action: NotificationActionTypes
) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.message,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export default notificationReducer;
