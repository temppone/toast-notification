import {
  INotification,
  NotificationActionTypes,
  SET_NOTIFICATION,
} from "../../@types";

export const setNotification = (
  notification: INotification
): NotificationActionTypes => {
  return {
    type: SET_NOTIFICATION,
    payload: notification,
  };
};
