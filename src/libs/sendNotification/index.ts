import notification from "antd/lib/notification";
import { TCheckOrderData } from "features/orders/types";

export const sendNotification = ({ orderId, status }: TCheckOrderData) => {
  const config = {
    message: "Order status changed",
    description: `Your order № ${orderId} changed status to ${status.toUpperCase()}.`,
  };
  if (status !== "closed") {
    return notification.info(config);
  }
  return notification.success(config);
};
