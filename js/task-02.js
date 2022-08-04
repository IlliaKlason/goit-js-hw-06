const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.querySelector("#ingredients");
ingredients.map(ingredient => {
  const liItem = document.createElement('li')
  liItem.classList.add("item")
  liItem.textContent = ingredient
  listItems.append(liItem)
})
console.log(listItems);


