import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import { useDispatch, useSelector } from "react-redux";
import { getallticket } from "../features/profiles/ProfileSlice";
import Tickets from "../components/Tickets";

const AllTickets = () => {
  const dispatch = useDispatch();
  const { tickets, isLoading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getallticket());
  }, [user]);

  if (isLoading) {
    return (
      <div className="container-fluid p-5">
        <h1 className="display-5 text-secondary text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container-fluid p-5">
      <h1 className="text-secondary text-center">All Tickets</h1>
      <Backbutton location={"/"} />
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">User Name</th>
              <th scope="col">Product</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => (
              <Tickets key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;
