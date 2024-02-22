import React from "react";
import { Link } from "react-router-dom";

const Utickets = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.product}</td>
      <td>{new Date(item.createdAt).toLocaleDateString("en-IN")}</td>
      <td>
        {item.status === "New" ? (
          <>
            <span className="badge text-bg-success">{item.status}</span>
          </>
        ) : item.status === "Solved" ? (
          <>
            <span className="badge text-bg-primary">{item.status}</span>
          </>
        ) : (
          <>
            <span className="badge text-bg-danger">{item.status}</span>
          </>
        )}
      </td>
      <td>
        <Link
          to={`/usersingleticket/${item._id}`}
          className="btn btn-sm btn-dark"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default Utickets;
