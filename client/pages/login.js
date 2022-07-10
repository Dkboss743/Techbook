import Layout from "../components/Layout";
import axios from "axios";
import { useReducer, useState } from "react";
import { showErrorMessage, showSuccessMessage } from "../helpers/alerts";
import { reducer } from "../store/Authentication";
import { API } from "../config";

const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
  success: "",
  buttonText: "Registor",
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    setState({
      ...state,
      buttonText: "Loggin in",
    });
    try {
      const response = await axios.post(`${API}/login`, {
        email: state.email,
        password: state.password,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Login",
        error: error.response.data.error,
      });
    }
  };
  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };
  const loginForm = () => {
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            required
            value={state.email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type you email"
          ></input>
        </div>
        <div className="form-group">
          <input
            required
            value={state.password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type you password"
          ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-warning">
            {state.buttonText}
          </button>
        </div>
      </form>
    );
  };
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Login</h1>
        <br />
        {state.success && showSuccessMessage(state.success)}
        {state.error && showErrorMessage(state.error)}
        {loginForm()}
      </div>
    </Layout>
  );
};
export default Login;
