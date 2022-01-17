import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardMedium from "../../components/Card/CardMedium";
import HistoricalTable from "./HistoricalTable";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../redux/rootReducer";
import * as actions from "./redux/action";

import { Form, Button, Select, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./Converter.module.scss";

const Converter: FC = () => {
  const [listCurrencies, setListCurrencies] = useState({});
  const [firstCurrency, setFirstCurrency] = useState<string | null>(null);
  const [secondCurrency, setSecondCurrency] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const dispatch = useDispatch();
  const getCurrencies = (state: AppState) => state.converter;
  const { currencies, error, rates } = useSelector(getCurrencies);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.getCurrenciesStart());
  }, []); // eslint-disable-line

  useEffect(() => {
    setListCurrencies(currencies);
  }, [currencies]);

  const onFirstCurrencyChange = (currency: string) => {
    setFirstCurrency(currency);
    setIsUpdating(true);
  };

  const onSecondCurrencyChange = (currency: string) => {
    setSecondCurrency(currency);
    setIsUpdating(true);
  };

  const onFinish = () => {
    setIsUpdating(false);
    const params = {
      format: "json",
      from: firstCurrency,
      to: secondCurrency,
      amount: "1",
    };
    dispatch(actions.convertStart(params));
  };

  const selectCurrency = () => {
    return (
      <span>
        <Select size="large" onChange={(e) => onFirstCurrencyChange(e)}>
          {Object.keys(listCurrencies).map((el) => {
            return <Select.Option key={el}>{el}</Select.Option>;
          })}
        </Select>
        <ArrowRightOutlined className={styles.arrow} />
        <Select size="large" onChange={(e) => onSecondCurrencyChange(e)}>
          {Object.keys(listCurrencies).map((el) => {
            return <Select.Option key={el}>{el}</Select.Option>;
          })}
        </Select>
      </span>
    );
  };

  return (
    <div className={styles.container}>
      {error && message.error("Something went wrong")}
      <CardMedium>
        <Button className={styles.close} onClick={() => navigate("/")}>
          X
        </Button>
        <p className={styles.text}>CURRENCY CONVERTER</p>
        {rates && Object.values(rates)[0] && !isUpdating && (
          <>
            <p style={{ fontWeight: 14 }}>{`1 ${firstCurrency} equals`}</p>
            <p style={{ fontWeight: 42 }}>{`${Object.values(rates)[0]?.rate} ${
              Object.values(rates)[0]?.currency_name
            }`}</p>
          </>
        )}
        <Form name="converter" onFinish={onFinish}>
          <Form.Item name="price" style={{ display: "inline-block" }}>
            {selectCurrency()}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Results
            </Button>
          </Form.Item>
        </Form>
        {rates && Object.values(rates)[0] && !isUpdating && <HistoricalTable />}
      </CardMedium>
    </div>
  );
};

export default Converter;
