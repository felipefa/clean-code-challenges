function rulesInConditionals() {
  const necessaryGradeToBeApproved = 7;
  const studentGrade = 10;

  const numberOfAbsencesToFailSchool = 100;
  const studentNumberOfAbsences = 109;

  function checkIfStudentPassedTheSchoolYear() {
    const isGradeBelowNecessary = studentGrade < necessaryGradeToBeApproved;

    if (isGradeBelowNecessary) {
      return { error: true, message: 'Student was not approved because his grade was below the necessary' };
    }

    const isStudentAbsenceAboveLimit = studentNumberOfAbsences > numberOfAbsencesToFailSchool;

    if (isStudentAbsenceAboveLimit) {
      return { error: true, message: 'Student was not approved because of his absences' };
    }

    return { error: false, message: 'Student was approved :)' };
  }

  console.log(checkIfStudentPassedTheSchoolYear());
}

rulesInConditionals();
