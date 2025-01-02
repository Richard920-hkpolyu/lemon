import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data, formType) => {
    setLoading(true);
    try {
      await wait(2000);
      let message;

      switch (formType) {
        case 'signup':
          message = `Thanks for signing up, ${data.firstName}! Please check your email for confirmation.`;
          break;
        case 'login':
          message = `Welcome back!`;
          break;
        case 'reservation':
          message = `Thanks for your reservation ${data.firstName}, we will reserve ${data.guests} persons table for you at ${data.time} on ${data.date}!`;
          break;
        default:
          message = "Submission successful!";
      }
      setResponse({
        type: 'success',
        message,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;