import { useState, useEffect } from "react";
import StudentCard from "../../components/StudentCard";

const Students = () => {
	const [studentData, setStudentData] = useState("");
	const [singleStudent, setSingleStudent] = useState("");

	let studentId = 0;

	const getStudents = () => {
		fetch("http://10.128.0.2:3002/api/students")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStudentData(data);
			});
	};

	const getStudentById = () => {
		fetch(`http://10.128.0.2:3002/api/students/${studentId}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSingleStudent(data);
			})
			.catch((err) => {
				alert("No Student with that ID found, please try again.");
				console.log(err);
			});
	};

	useEffect(getStudents, []);

	return (
		<div>
			<div>
				<input placeholder="Input Student ID" type="number" onChange={(e) => (studentId = e.target.value)} />
				<button onClick={getStudentById}>Get Student</button>
			</div>

			{singleStudent ? (
				<StudentCard studentObj={singleStudent} />
			) : studentData ? (
				studentData.map((studentObj) => {
					return <StudentCard studentObj={studentObj} />;
				})
			) : (
				""
			)}
		</div>
	);
};

export default Students;
