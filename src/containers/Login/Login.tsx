import React, { FC, useState, useEffect } from "react";
import CardMedium from "../../components/Card/CardMedium";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login: FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const pswValidRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,20}$/;
  const userNameValidRegex = /^.{5,20}$/;

  const onFinish = (values: any) => {
    const isUserNameValid = userNameValidRegex.test(values.username);
    const isPSWvalid = pswValidRegex.test(values.password);

    if (!isUserNameValid) {
      message.error("Username value has minimum 5 maximum 20 character limit");
    }
    if (!isPSWvalid) {
      message.error(
        "Password value has minimum 8 and maximum 20 character limit and must have at least 1 uppercase, 1 lowercase and 1 special character",
        5
      );
    }
    if (isUserNameValid && isPSWvalid) {
      localStorage.setItem("isLogged", "true");
      setIsLogged(true);
    }
  };

  useEffect(() => {
    isLogged && navigate("/converter");
  }, [isLogged]);

  const isLocalLogedIn = localStorage.getItem("isLogged");

  return (
    <div className={styles.container}>
      {isLocalLogedIn ? (
        <Button type="text" onClick={() => navigate("/converter")}>
          Go to Currency Converter
        </Button>
      ) : (
        <CardMedium>
          <div>
            <p>Login</p>
            <Form
              name="basic-login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </CardMedium>
      )}
    </div>
  );
};

export default Login;
