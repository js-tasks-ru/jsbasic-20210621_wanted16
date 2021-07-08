function highlight(table) {
  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    const element = rows[i];
    const ageCell = element.cells[1];
    const genderCell = element.cells[2];
    const statusCell = element.cells[3];
    
    if (statusCell.dataset.available === "true") {
      element.classList.add("available");
    } else {
      element.classList.add("unavailable");
    }

    if (typeof statusCell.dataset.available === "undefined") {
      element.setAttribute("hidden", "true");
    }

    if (genderCell.innerHTML === "f") {
      element.classList.add("female");
    } else {
      element.classList.add("male");
    }

    if (ageCell.innerHTML < 18) {
      element.style.textDecoration = "line-through";
    }
  }
}
