import "../styles/Auth.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const GoBackHome = () => (
  <div style={{ display: "inline-block" }}>
    <NavLink
      to={"/"}
      style={{
        textDecoration: "none",
        display: "flex",
        alignContent: "center",
        gap: 10,
        color: "inherit",
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <KeyboardBackspaceIcon fontSize="inherit" />
      </span>
      <span style={{ display: "flex", alignItems: "center" }}>Return home</span>
    </NavLink>
  </div>
);

const SignIn = () => {
  const navigate = useNavigate();
  const { values, isSubmitting, handleChange, handleSubmit } = useForm({
    name: "signIn",
  });

  return (
    <div className="auth-page">
      <div className="auth-page-inner">
        <Box
          component={"form"}
          onSubmit={(values) => handleSubmit(values)}
          className={"auth-form"}
        >
          <div className="auth-form-body">
            <div>
              <GoBackHome />
            </div>
            <div className="auth-form-body-title">Sign in</div>
            <div className="auth-form-inputs">
              <Input
                required
                autoFocus
                onChange={handleChange}
                type={"email"}
                name={"email"}
                label={"Email"}
                values={values.email}
              />
              <Input
                required
                onChange={handleChange}
                name={"password"}
                label={"Password"}
                type={"password"}
                values={values.password}
              />
            </div>
            <div>
              <Button
                loading={isSubmitting}
                type={"submit"}
                label={"Sign in"}
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
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>
                {" "}
                <u>Sign Up</u>{" "}
              </span>
            </small>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignIn;
