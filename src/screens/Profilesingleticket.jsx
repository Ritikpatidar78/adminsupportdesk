import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import {
  createnote,
  deleteticket,
  editticket,
  getallnote,
  getsingleticket,
} from "../features/profiles/ProfileSlice";
import Note from "../components/Note";

const ProfilesingleTicket = () => {
  const API_URL = "https://supportdeskbackend-o50j.onrender.com";
  const { id } = useParams();
  const { sticket, isLoading, notes } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formnote, setformnote] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      ticketid: sticket._id,
      userid: sticket.user,
      note: formnote,
    };
    dispatch(createnote(data));
    setformnote("");
  };

  const handleupdate = (ticket) => {
    const data = {
      ...ticket,
      status: "Solved",
    };
    dispatch(editticket(data));
    navigate(`/userticket/${sticket.user}`);
  };

  const handledelete = (id) => {
    dispatch(deleteticket(id));
    navigate(`/userticket/${sticket.user}`);
  };

  useEffect(() => {
    dispatch(getsingleticket(id));
    dispatch(getallnote(id));
    if (!user) {
      navigate("/login");
    }
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
      <h1 className="text-secondary text-center">Your Ticket</h1>
      <Backbutton location={`/userticket/${sticket.user}`} />
      <div className="card p-3 my-3">
        <h1 className="card-title">Product : {sticket.product}</h1>
        <h3>Description : {sticket.description}</h3>
        <p className="text-secondary border-top pt-2">
          Ticket ID :{sticket._id}
        </p>
        <p className="text-secondary">
          Date: {new Date(sticket.createdAt).toLocaleDateString("en-IN")}
        </p>

        <p>
          Status :{" "}
          {sticket.status === "New" ? (
            <>
              <span className="badge text-bg-success">{sticket.status}</span>
            </>
          ) : sticket.status === "Solved" ? (
            <>
              <span className="badge text-bg-primary">{sticket.status}</span>
            </>
          ) : (
            <>
              <span className="badge text-bg-danger">{sticket.status}</span>
            </>
          )}
        </p>
        <div>
          <img
            className="rounded-t-lg w-100 p-3 border border-black image px-6"
            src={`https://supportdeskbackend-o50j.onrender.com/${sticket.coverimg}`}
            alt="img"
          />
        </div>
      </div>
      {sticket.status === "Closed" ? (
        <></>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Note +
          </button>
        </>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                name="formnote"
                value={formnote}
                onChange={(e) => setformnote(e.target.value)}
                placeholder="Give Your Note Here"
                className="form-control my-3"
                required
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                onClick={handlesubmit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {notes.length === 0 || !notes ? (
        <>
          <div className="card p-3 my-3">
            <h3>No Notes Here </h3>
          </div>
        </>
      ) : (
        <>
          <div className="card p-3 my-3">
            <h3>Notes : </h3>
            <ul className="my-3 list-group">
              {notes.map((item) => (
                <Note item={item} key={item._id} />
              ))}
            </ul>
          </div>
        </>
      )}
      {sticket.status === "New" ? (
        <>
          {" "}
          <button
            onClick={() => {
              handleupdate(sticket);
            }}
            className="btn btn-danger w-100"
          >
            Solve Ticket
          </button>
        </>
      ) : (
        <></>
      )}
      {sticket.status === "Closed" ? (
        <>
          {" "}
          <button
            onClick={() => {
              handledelete(sticket._id);
            }}
            className="btn btn-danger w-100"
          >
            Delete Ticket
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfilesingleTicket;
