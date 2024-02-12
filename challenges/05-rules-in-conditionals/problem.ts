const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsencesToFailSchool = 100
const studentNumberOfAbsences = 109

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  } else {
    if(studentNumberOfAbsences > numberOfAbsencesToFailSchool) {
      return { error: true, message: 'Student was not approved because of his absences'}
    } else {
      return { error: false, message: 'Student was approved :)'}
    }
  }
}

console.log(checkIfStudentPassedTheSchoolYear())