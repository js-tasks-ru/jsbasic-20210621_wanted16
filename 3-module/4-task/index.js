function showSalary(users, age) {
  return users
    .filter(item => {
      return item['age'] <= age;
    })
    .map(item => {
      return `${item['name']}, ${item['balance']}\n`;
    })
    .join('')
    .slice(0, -1);
}
