interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Lewis";
	lastName: "Hamilton";
	age: 37;
	location: "London";
};

const secondStudent: Student = {
	firstName: "Sebastian";
	lastName: "Vettel";
	age: 42;
	location: "Deustchland";
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();
	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
});
