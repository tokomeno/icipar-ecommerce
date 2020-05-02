import { useState, useRef } from "react";

export const useCaptcha = () => {
  const [recaptcha_token, setRecaptchaToken] = useState<string>("");
  const captchaRef = useRef<any>(null);

  return {
    recaptcha_token,
    setRecaptchaToken,
    captchaRef,
  };
};
