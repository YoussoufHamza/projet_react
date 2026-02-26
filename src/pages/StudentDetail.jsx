import { useParams } from "react-router-dom";
import { STUDENTS } from "../data/Students";

const StudentDetail = () => {

  const { id } = useParams();
  const student = STUDENTS.find(s => s.id === parseInt(id));

  if (!student) return <h2>Étudiant introuvable</h2>;

  return (
    <div>
      <h2>Détails</h2>
      <p><strong>Nom:</strong> {student.nom}</p>
      <p><strong>Ville:</strong> {student.ville}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Note:</strong> {student.note}/20</p>
    </div>
  );
};

export default StudentDetail;
