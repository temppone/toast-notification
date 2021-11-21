export const SET_NOTIFICATION = "SET_NOTIFICATION";

export interface INotification {
  message: string;
  type: "success" | "danger" | "warning";
}

interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: INotification;
}

export type NotificationActionTypes = SetNotificationAction;
