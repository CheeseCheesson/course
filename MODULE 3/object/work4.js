function giveJobToStudent(student, jobName) {
    student.job = jobName
    console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.job}`);
    return student
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');