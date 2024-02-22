import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import { useDispatch, useSelector } from "react-redux";
import { getallprofile } from "../features/profiles/ProfileSlice";
import Profiles from "../components/Profiles";

const NewTicket = () => {
  const { profiles, isLoading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getallprofile());
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
      <h1 className="text-secondary text-center">All Users</h1>
      <Backbutton location={"/"} />
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((item, index) => (
              <Profiles item={item} key={item._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewTicket;
