import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

    const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: 0,
    email: "",
    program: "-- None --",
    graduationYear: 2023,
    graduated: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    const newStudent = {
      ...formData,
     
      id: Date.now(),
    };

  
    setStudents([...students, newStudent]);
    
  
    setFormData({
      firstName: "",
      lastName: "",
      image: "",
      phone: 0,
      email: "",
      program: "-- None --",
      graduationYear: 2023,
      graduated: false,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={formData.image} onChange={handleChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
