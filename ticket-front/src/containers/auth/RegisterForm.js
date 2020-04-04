import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { changeField, register, initializeForm } from "../../modules/auth";
import { check } from "../../modules/user";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const {
      accountId,
      password,
      passwordConfirm,
      username,
      address,
      phoneNumber
    } = form;
    if (
      [
        accountId,
        password,
        passwordConfirm,
        username,
        address,
        phoneNumber
      ].includes("")
    ) {
      setError("빈 칸을 입력하세요.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      changeField({
        form: "register",
        key: "password",
        value: ""
      });
      changeField({
        form: "register",
        key: "passwordConfirm",
        value: ""
      });
      return;
    }
    dispatch(register({accountId, password, username, address, phoneNumber}));
  };

  // 컴포넌트 처음 렌더링 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정입니다.");
      }
      console.log("기타오류 발생");
      console.log(authError);
      setError("회원가입 실패");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  //user 값 설정 확인
  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log("localStorage is not working");
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
