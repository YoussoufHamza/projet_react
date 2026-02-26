import { useEffect, useState } from "react";
import { STUDENTS } from "../data/Students";
import { Link } from "react-router-dom";

const Students = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(STUDENTS);
  }, []);

  return (
    <div>
      <h2>Étudiants</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {students.map(student => (
          <div key={student.id} style={{
            background: "white",
            padding: "15px",
            margin: "10px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h4>{student.nom}</h4>
            <p>Ville: {student.ville}</p>
            <p>Note: {student.note}/20</p>

            <Link to={`/students/${student.id}`}>
              <button style={{
                background: "black",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px"
              }}>
                Détails
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
