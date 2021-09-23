import React from "react";
import { Link } from "react-router-dom";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import Result from "antd/lib/result";

import {
  useConfirmModalPayload,
  useConfirmModalVisible,
} from "features/cart/selectors";
import { confirmOrderModal } from "features/cart/model";
import { paths } from "pages/paths";

import "./styles.scss";

export const ConfirmOrderModal = () => {
  const visible = useConfirmModalVisible();
  const order = useConfirmModalPayload();

  return (
    <Modal
      visible={visible}
      onCancel={() => confirmOrderModal.close()}
      maskClosable={false}
      destroyOnClose
      footer={null}
    >
      <Result
        status="success"
        title="Your order successfully confirmed!"
        subTitle={`Order number: ${order?.orderId}. You can check your order status in the relevant section.`}
        style={{ padding: "0" }}
        extra={[
          <Link
            to={paths.home()}
            onClick={() => confirmOrderModal.close()}
            key="return"
          >
            <Button>Buy Again</Button>
          </Link>,
          <Link
            to={paths.status()}
            onClick={() => confirmOrderModal.close()}
            key="checkOrders"
          >
            <Button type="primary">Check orders</Button>
          </Link>,
        ]}
      />
    </Modal>
  );
};
