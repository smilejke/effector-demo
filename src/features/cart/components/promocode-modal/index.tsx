import React, { ChangeEvent, FC, useState } from "react";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import Spin from "antd/lib/spin";
import {
  LoadingOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";

import {
  useCheckPromoCodeFetching,
  useConfirmModalVisible,
} from "features/cart/selectors";
import { promoCodeModal } from "features/cart/model";
import { checkPromoCodeFx } from "features/cart/controllers";

import useDebounce from "hooks/useDebounce";

import "./styles.css";

export const PromoCodeModal: FC = () => {
  const [promoCode, setPromoCode] = useState("");
  const visible = useConfirmModalVisible();
  const promoCodeFetching = useCheckPromoCodeFetching();
  useDebounce(() => checkPromoCodeFx(promoCode), 500, [promoCode]);

  const handleClose = () => {
    setPromoCode("");
    promoCodeModal.close();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  return (
    <Modal
      title="Do you have promo code?"
      visible={visible}
      onCancel={handleClose}
      destroyOnClose
      footer={null}
    >
      <div className="promo-modal__wrapper">
        <div className="promo-modal__code">
          <Input
            value={promoCode}
            placeholder="Enter your promo code"
            onChange={handleChange}
          />
          {promoCodeFetching && <Spin indicator={<LoadingOutlined spin />} />}
          {false && <CheckCircleTwoTone twoToneColor="#52c41a" />}
          {false && <CloseCircleTwoTone twoToneColor="#eb2f96" />}
        </div>
        <div className="promo-modal__actions">
          <Button onClick={handleClose}>Закрыть</Button>
          <Button type="primary" onClick={() => checkPromoCodeFx(promoCode)}>
            Завершить
          </Button>
        </div>
      </div>
    </Modal>
  );
};
