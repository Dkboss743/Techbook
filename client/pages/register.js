import Layout from "../components/Layout";
import axios from "axios";
import { useReducer } from "react";
import { showErrorMessage, showSuccessMessage } from "../helpers/alerts";
import { reducer } from "../store/Authentication";
const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
  success: "",
  buttonText: "Registor",
};

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (name) => (e) => {
    dispatch({
      type: name,
      payload: e.target.value,
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "registering",
    });
    const name = state.name;
    const email = state.email;
    const password = state.password;
    axios
      .post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        dispatch({
          type: "reset",
          payload: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({
          type: "error",
          payload: error.response.data.error,
        });
      });
  };
  const registerForm = () => {
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            value={state.name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Type you name"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={state.email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type you email"
          ></input>
        </div>
        <div className="form-group">
          <input
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
        <h1>Register</h1>
        <br />
        {state.success && showSuccessMessage(state.success)}
        {state.error && showErrorMessage(state.error)}
        {registerForm()}
      </div>
    </Layout>
  );
};
export default Register;
