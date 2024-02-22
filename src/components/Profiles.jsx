import React from "react";
import { Link } from "react-router-dom";

const Profiles = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <Link to={`/userticket/${item._id}`} className="btn btn-sm btn-dark">
          View tickets
        </Link>
      </td>
    </tr>
  );
};

export default Profiles;
