import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import NewTicket from "./screens/NewTicket";
import Login from "./screens/Login";
import AllTickets from "./screens/AllTickets";
import PageNotFound from "./screens/PageNotFound";
import UserTickets from "./screens/UserTickets";
import SingleTicket from "./screens/SingleTicket";
import ProfilesingleTicket from "./screens/Profilesingleticket";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTicket />} />
        <Route path="/all-ticket" element={<AllTickets />} />
        <Route path="/ticket/:id" element={<SingleTicket />} />
        <Route path="/usersingleticket/:id" element={<ProfilesingleTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userticket/:id" element={<UserTickets />} />
      </Routes>
    </Router>
  );
};

export default App;
