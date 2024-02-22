import React, { useEffect } from "react";
import Backbutton from "../components/Backbutton";
import { useDispatch, useSelector } from "react-redux";
import { getalluserticket } from "../features/profiles/ProfileSlice";
import Tickets from "../components/Tickets";
import { useParams } from "react-router-dom";
import Utickets from "../components/Uticket";

const UserTickets = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tickets, isLoading } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getalluserticket(id));
  }, []);
  if (isLoading) {
    return (
      <div className="container-fluid p-5">
        <h1 className="display-5 text-secondary text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container-fluid p-5">
      <h1 className="text-secondary text-center">All User Tickets</h1>
      <Backbutton location={"/new"} />
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
              <Utickets key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTickets;
