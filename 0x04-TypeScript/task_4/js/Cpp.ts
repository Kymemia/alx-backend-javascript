namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements(): string {
			return "Requirements for Cpp";
		}

		getAvailableTeacher(): string {
			if (this.teacher && this.teacher.experienceTeachingC > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
		} else {
			return "No available teacher";
		}
		}
	}
}
