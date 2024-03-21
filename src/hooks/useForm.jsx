import { useFormik } from "formik";
import useAlert from "./useAlert";
import axios from "../services/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useForm = (name) => {
  const { signIn } = useAuth();
  const { handleOpenFailAlert, handleOpenSuccessAlert } = useAlert();
  const navigate = useNavigate();

  const signInForm = {
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/login", values);
        await signIn(data.usertoken);
      } catch (error) {
        handleOpenFailAlert({ message: error.message });
      }
      return 0;
    },
  };

  const signUpForm = {
    initialValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await axios.post("/register", values);
        if (result.status === 200) {
          handleOpenSuccessAlert({
            message: "Welcome aboard! Your account is ready.",
          });
          navigate("/signin");
        }
      } catch (error) {
        handleOpenFailAlert({ message: error.message });
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
