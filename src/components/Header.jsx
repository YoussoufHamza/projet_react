import { useEffect, useState } from "react";
import { STUDENTS } from "../data/Students";

const Header = () => {

  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ddd"
    }}>
      <div>
        <h3>Students App</h3>
        <small>TP8 - Global</small>
      </div>

      <div>
        Étudiants: {STUDENTS.length}
        <span style={{ marginLeft: "15px" }}>
          Heure: {time}
        </span>
      </div>
    </div>
  );
};

export default Header;
