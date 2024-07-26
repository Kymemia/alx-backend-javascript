export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const employee of reportWithIterator) {
    employeeNames += `${employee.name}|`;
  }
  return employeeNames.slice(0, -1);
}
