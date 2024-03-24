import { useFormik } from "formik";
import useAlert from "./useAlert";
import axios from "../services/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signUpSchema = z.object({
  fullname: z.string(),
  email: z.string().email("Invalid email address"),
  phonenumber: z
    .string()
    .min(10, "Please enter exactly 10 digits")
    .max(10, "Please enter exactly 10 digits"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});

const useForm = ({ name }) => {
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
    validate: (formValues) => {
      try {
        signUpSchema.parse(formValues);
      } catch (error) {
        return error.formErrors.fieldErrors;
      }
    },
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

  const { initialValues, onSubmit, validate } = forms[name];
  const { values, isSubmitting, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues,
      onSubmit: () => onSubmit(values),
      validate: validate ?? undefined,
      validateOnBlur: false,
      validateOnChange: false,
    });

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useForm;
