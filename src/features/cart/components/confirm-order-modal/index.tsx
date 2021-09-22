import React from "react";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import {
  useCart,
  useConfirmModalVisible,
  useTotalPrice,
} from "features/cart/selectors";
import { confirmOrderModal } from "features/cart/model";

import "./styles.scss";

const { Title } = Typography;

export const ConfirmOrderModal = () => {
  const visible = useConfirmModalVisible();
  const cart = useCart();
  const total = useTotalPrice();

  return (
    <Modal
      title="You won't be able to specify order after confirm."
      visible={visible}
      onCancel={() => confirmOrderModal.close()}
      destroyOnClose
      footer={null}
    >
      <div className="order-confirm__wrapper">
        <div className="order-confirm__list">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.count}
              </li>
            ))}
          </ul>
        </div>
        <Title className="order-confirm__total" level={5}>
          Total: {total.toFixed(2)} BYN
        </Title>
        <div className="order-confirm__actions">
          <Button onClick={() => confirmOrderModal.close()}>Close</Button>
          <Button type="primary" onClick={() => confirmOrderModal.close()}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};
