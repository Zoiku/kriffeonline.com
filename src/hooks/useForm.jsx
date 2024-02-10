import { useFormik } from "formik";
import useAlert from "./useAlert";
import axios from "../services/axios";
import useAuth from "./useAuth";

const useForm = (name) => {
  const { signIn } = useAuth();
  const { handleOpenFailAlert } = useAlert();

  const signInForm = {
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/login", values);
        signIn(data.usertoken);
      } catch (error) {
        handleOpenFailAlert(error.message);
      }
      return 0;
    },
  };

  const signUpForm = {
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.get("/singup", values);
      } catch (error) {
        handleOpenFailAlert(error.message);
      }
      return 0;
    },
  };

  const forms = {
    signIn: signInForm,
    signUp: signUpForm,
  };

  const { initialValues, onSubmit } = forms[name];
  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: () => onSubmit(values),
  });

  return { values, isSubmitting, handleChange, handleSubmit };
};

export default useForm;
