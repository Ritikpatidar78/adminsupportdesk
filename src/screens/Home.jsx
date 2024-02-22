import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="container-fluid p-5">
      <h1 className="text-secondary text-center">Welcome Admin</h1>
      <div className="card p-5 my-3">
        <h2 className="text-center mb-3">Here is Your All Users And Tickets</h2>
        <Link className="btn btn-outline-secondary my-2" to={"/new"}>
          View All User
        </Link>
        <Link className="btn btn-outline-secondary my-2" to={"/all-ticket"}>
          View All Tickets
        </Link>
      </div>
    </div>
  );
};

export default Home;
