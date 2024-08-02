import * as Subjects from './Subjects';

Subjects.cpp.teacher = Subjects.cTeacher;
console.log("C++");
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

Subjects.java.teacher = Subjects.cTeacher;
console.log("Java");
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

Subjects.react.teacher = Subjects.cTeacher;
console.log("React");
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
