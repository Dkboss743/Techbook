import Layout from "../components/Layout";
import { useReducer } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
  success: "",
  buttonText: "Registor",
};
const reducer = (state, action) => {
  if (action.type === "name") {
    return {
      ...state,
      name: action.payload,
      error: "",
      success: "",
    };
  }
  if (action.type === "email") {
    return {
      ...state,
      email: action.payload,
      error: "",
      success: "",
    };
  }
  if (action.type === "password") {
    return {
      ...state,
      password: action.payload,
      error: "",
      success: "",
    };
  }
  return {
    ...state,
  };
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
  };
  const registerForm = () => {
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            value={state.name}
            onChange={handleChange("name")}
            tpe="text"
            className="form-control"
            placeholder="Type you name"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={state.email}
            onChange={handleChange("email")}
            tpe="email"
            className="form-control"
            placeholder="Type you email"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={state.password}
            onChange={handleChange("password")}
            tpe="password"
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
        {registerForm()}
      </div>
      {/* {JSON.stringify(state)} */}
    </Layout>
  );
};
export default Register;
