interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

class Maestro implements Teacher {
	constructor (
		public readonly firstName: string,
		public readonly lastName: string,
		public fullTimeEmployee: boolean,
		public yearsOfExperience?: number,
		public location: string,
		public additionAttributes: { [key: string]: any } = {}
	) {
		Object.assign(this, additionalAttributes);
	}
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {
	constructor (private firstName: string, private lastName: string) {}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
