export const convertGrade = (grade: string) => {
  switch (grade) {
    case 'Did not know':
      return 1
    case 'Forgot':
      return 2
    case 'A lot of thought':
      return 3
    case 'Confused':
      return 4
    case 'Knew the answer':
      return 5
    default:
      break
  }
}
