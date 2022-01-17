import React, { FC, useState, useEffect } from "react";
import CardMedium from "../../components/Card/CardMedium";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login: FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const pswValidRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*.,-]).{8,20}$/;
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
  }, [isLogged]); // eslint-disable-line

  const isLocalLogedIn = localStorage.getItem("isLogged");

  const signOut = () => {
    localStorage.removeItem("isLogged");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      {isLocalLogedIn ? (
        <>
          <p className={styles.text}>You are logged in</p>
          <div className={styles.button}>
            <Button onClick={() => navigate("/converter")}>
              Currency Converter
            </Button>
          </div>
          <div className={styles.button}>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        </>
      ) : (
        <CardMedium>
          <div>
            <p className={styles.text} style={{ textAlign: "left" }}>
              LOGIN
            </p>
            <Form name="basic-login" onFinish={onFinish} autoComplete="off">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input size="large" placeholder="Username" data-testid="username"/>
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
                <Input.Password size="large"  placeholder="Password" data-testid="password"/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit"  data-testid="login">
                  Login
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
