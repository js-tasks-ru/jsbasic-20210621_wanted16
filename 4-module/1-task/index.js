function makeFriendsList(friends) {
  let list = document.createElement("ul");

  friends.forEach(element => {
    list.innerHTML += makeListElement(element.firstName, element.lastName);
  });

  return list;
}

function makeListElement(firstName, lastName) {
  return `<li>${firstName} ${lastName}</li>`;
}
