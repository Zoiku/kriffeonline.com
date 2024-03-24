import "../styles/Auth.css";
import Input from "../components/Input";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useForm from "../hooks/useForm";
import { GoBackHome } from "./SignIn";

const SignUp = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, isSubmitting, handleSubmit } = useForm({
    name: "signUp",
  });

  return (
    <div className="auth-page">
      <div className="auth-page-inner">
        <Box component={"form"} onSubmit={handleSubmit} className={"auth-form"}>
          <div className="auth-form-body">
            <div>
              <GoBackHome />
            </div>
            <div className="auth-form-body-title">Sign up</div>
            <div className="auth-form-inputs">
              <Input
                required
                autoFocus
                onChange={handleChange}
                name={"fullname"}
                label={"Your name"}
                value={values.fullname}
                error={errors.fullname}
                helperText={errors.fullname ? errors.fullname : "Please enter your full name"}
              />
              <Input
                required
                onChange={handleChange}
                type={"email"}
                name={"email"}
                label={"Email"}
                value={values.email}
                error={errors.email}
                helperText={errors.email ? errors.email : "Please enter a valid email"}
              />
              <Input
                required
                onChange={handleChange}
                name={"phonenumber"}
                label={"Mobile"}
                value={values.phonenumber}
                error={errors.phonenumber}
                helperText={errors.phonenumber ? errors.phonenumber : "Enter exactly 10 digits "}
              />
              <Input
                required
                onChange={handleChange}
                name={"password"}
                label={"Password"}
                type={"password"}
                value={values.password}
                error={errors.password}
                helperText={errors.password ? errors.password : "Password should be at least 8 characters"}
              />
            </div>
            <div>
              <Button
                loading={isSubmitting}
                type={"submit"}
                label={"Sign up"}
                fullWidth
              />
            </div>
            <div>
              <small>
                By continuing, you agree to Kriffee Online's Conditions of Use
                and Privacy Notice.
              </small>
            </div>
          </div>
          <div className="auth-form-footer">
            <small>
              Already have an account?{" "}
              <span onClick={() => navigate("/signin")}>
                {" "}
                <strong>Sign In</strong>{" "}
              </span>
            </small>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
