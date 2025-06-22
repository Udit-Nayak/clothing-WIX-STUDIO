"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { Verify } from "crypto";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSSWORD = "RESET_PASSSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSSWORD
      ? "Reset your password"
      : "Verify your Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSSWORD
      ? "Reset"
      : "Verify your Email";

  const wixClient=useWixClient();

  return <div className="">LoginPage</div>;
};

export default LoginPage;
