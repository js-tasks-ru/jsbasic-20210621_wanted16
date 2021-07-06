function sumSalary(salaries) {
  let sum = 0;

  for (prop in salaries) {
    if (typeof salaries[prop] === 'number') {
      if ( isFinite(salaries[prop]) ) {
        sum += salaries[prop];
      }
    }
  }

  return sum;
}
