import "../styles/Auth.css";
import Input from "../components/Input";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useForm from "../hooks/useForm";

const SignUp = () => {
  const navigate = useNavigate();
  const { values, handleChange, isSubmitting, handleSubmit } =
    useForm("signUp");

  return (
    <div className="auth-page">
      <div className="auth-page-inner">
        <Box component={"form"} onSubmit={handleSubmit} className={"auth-form"}>
          <div className="auth-form-body">
            <div className="auth-form-body-title">Sign up</div>
            <div className="auth-form-inputs">
              <Input
                required
                autoFocus
                onChange={handleChange}
                name={"name"}
                label={"Your name"}
                value={values.name}
              />
              <Input
                required
                onChange={handleChange}
                type={"email"}
                name={"email"}
                label={"Email"}
                value={values.email}
              />
              <Input
                required
                onChange={handleChange}
                name={"mobile"}
                label={"Mobile"}
                value={values.mobile}
              />
              <Input
                required
                onChange={handleChange}
                name={"password"}
                label={"Enter password"}
                type={"password"}
                value={values.password}
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
              <span onClick={() => navigate("/signin")}>Sign In</span>
            </small>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
