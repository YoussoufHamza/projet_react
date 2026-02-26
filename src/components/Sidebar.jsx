import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      background: "#f5f5f5",
      padding: "20px",
      minHeight: "80vh"
    }}>
      <NavLink to="/" end style={linkStyle}>Accueil</NavLink>
      <NavLink to="/students" style={linkStyle}>Étudiants</NavLink>
      <NavLink to="/info" style={linkStyle}>À propos</NavLink>
    </div>
  );
};

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "10px",
  marginBottom: "10px",
  textDecoration: "none",
  background: isActive ? "black" : "white",
  color: isActive ? "white" : "black",
  borderRadius: "8px"
});

export default Sidebar;
