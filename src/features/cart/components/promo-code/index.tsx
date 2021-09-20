import React, { ChangeEvent, useState } from "react";

import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Spin from "antd/lib/spin";
import Typography from "antd/lib/typography";

import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";

import {
  useCheckPromoCodeFetching,
  usePromoCheckStatus,
  usePromoCode,
} from "features/cart/selectors";

import {
  checkPromoCodeFx,
  setCodeCheckResult,
} from "features/cart/controllers";

import useDebounce from "hooks/useDebounce";

import "./styles.css";

const { Text } = Typography;

export const PromoCode = () => {
  const [promoCode, setPromoCode] = useState("");
  const promoCodeFetching = useCheckPromoCodeFetching();
  const codeStatus = usePromoCheckStatus();
  const code = usePromoCode();

  useDebounce(
    () => {
      if (promoCode) {
        checkPromoCodeFx(promoCode);
      }
    },
    500,
    [promoCode]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);

    if (codeStatus) {
      setCodeCheckResult("");
    }
  };

  return (
    <Card title="Do you have promo code?" className="promo-code__container">
      <div className="promo-code__code">
        <Input
          value={promoCode}
          size="large"
          placeholder="Enter your promo code"
          onChange={handleChange}
        />
        {promoCodeFetching && <Spin indicator={<LoadingOutlined spin />} />}
        {codeStatus === "done" && <CheckCircleTwoTone twoToneColor="#52c41a" />}
        {codeStatus === "fail" && <CloseCircleTwoTone twoToneColor="#EA2027" />}
      </div>
      {codeStatus === "done" && (
        <Text type="secondary" strong style={{ color: "#52c41a" }}>
          {code.description}
        </Text>
      )}
      {codeStatus === "fail" && (
        <Text type="secondary" style={{ color: "#EA2027" }}>
          Wrong code
        </Text>
      )}
    </Card>
  );
};
