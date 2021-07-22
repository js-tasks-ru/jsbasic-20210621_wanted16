/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.createTable(rows);
  }

  createTable(rows) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let rowMarkup = rows.map(elem => this.createRow({ name: elem.name, age: elem.age, salary: elem.salary, city: elem.city }) ).join('');

    thead.innerHTML = '<tr><td>Имя</td><td>Возраст</td><td>Зарплата</td><td>Город</td><td></td></tr>';
    table.insertAdjacentElement('beforeend', thead);

    table.insertAdjacentHTML('beforeend', `<tbody>${rowMarkup}</tbody>`);

    let buttons = table.querySelectorAll('tbody button');
    buttons.forEach(element => {
      this.addEventListenerRow(element);
    });

    return table;
  }

  createRow({name, age, salary, city}) {
    return `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`;
  }

  addEventListenerRow(elem) {
    elem.addEventListener('click', () => { 
      return elem.closest('tr').remove(); 
    }, { once: true });
  }
}
