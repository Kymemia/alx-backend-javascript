namespace Subjects {
	export interface Teacher {
		firstName: string;
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		teacher: Teacher;

		getRequirements(): string {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher(): string {
			if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}
}
