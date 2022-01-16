import React, { FC } from "react";
import { Card } from "antd";
import styles from "./CardMedium.module.scss";

const CardMedium: FC = (props: any) => {
  const {children} = props
  return (
    <Card className={styles.card}>
      {children}
    </Card>
  );
};

export default CardMedium;
