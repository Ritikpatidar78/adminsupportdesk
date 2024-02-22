import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/auth/UserSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { user, isError, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(login(formdata));

    setformdata({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (user) {
      toast.success("Registerd");
      navigate("/");
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="container-fluid p-5">
        <h1 className="text-center text-secondary">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container-fluid p-5">
      <h1 className="text-center text-secondary">Login Only For Admin</h1>
      <div className="card p-3 my-3">
        <form className="my-3" onSubmit={handlesubmit}>
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={handlechange}
            className="form-control my-3"
            required
          />
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={handlechange}
            className="form-control my-3"
            required
          />
          <button className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
