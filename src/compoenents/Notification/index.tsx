import { FC, useState } from "react";
import { INotification } from "../../@types";
import { NotificationContainer } from "../../store/reducers/style";

const Notification: FC<INotification> = ({ message, type }) => {
  const [notificationMsg, setNotificationMsg] = useState("");
  const [notificationComponent, setNotificationComponent] = useState(<></>);

  const notificationsComponents = {};
  return <NotificationContainer>teste</NotificationContainer>;
};

export default Notification;
