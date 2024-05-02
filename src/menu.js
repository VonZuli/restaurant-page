import pastizzi from './images/pastizzi.jpg'
import bread from './images/bread.jpg'
import timpana from './images/timpana.jpg'
import cookie from './images/molasses_rings.jpg'
import cake from './images/fig_cake.jpeg'

export default function menu(){

  document.querySelector('#content').innerHTML = ''
  //set active nav button
  const activeBtn = document.querySelector("button.active")
  const menuBtn = document.querySelector("button.menu")
  activeBtn.classList.remove("active")
  menuBtn.classList.add("active")

  const content = document.querySelector('#content');

  const titleContainer = document.createElement('div')
  const title = document.createElement("h1");
  content.appendChild(titleContainer)
  titleContainer.classList.add('title-container')
  title.classList.add('title')
  title.textContent = "Menu"
  titleContainer.appendChild(title);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer")
  content.appendChild(menuContainer);

 

  const menu0 = new Image();
  const menu1 = new Image();
  const menu2 = new Image();
  const menu3 = new Image();
  const menu4 = new Image();

  const menuItems = {
    item0: {
      image: menu0.src = pastizzi,
      name: "Pastizzi",
      description: "Flakey puff pastry with your choice of filling. (Ricotta, Curried Peas)",
      price: "$10 per dozen",
    },
    item1: {
      image: menu1.src = bread,
      name: "Calabrese Bread",
      description: "Rustic crusty bread with a soft airy interior.",
      price: "$3 per loaf",
    },
    item2: {
      image: menu2.src = timpana,
      name: "Timpana",
      description: "Delicious pasta in a rich meat sauce, encased in a savory pie crust.",
      price: "$12 per 400g",
    },
    item3: {
      image: menu3.src = cookie,
      name: "Molasses Rings (Qaghaq)",
      description: "Pastry dough filled with treacle molasses.",
      price: "$10 per dozen",
    },
    item4: {
      image: menu4.src = cake,
      name: "Fig Cake (Imqaret)",
      description: "Buttery pastry filled with a spiced, citrusy date paste, deep fried and coated in icing sugar.",
      price: "$10 per dozen",
    },
  }

  function buildMenu(){
    for (const item in menuItems) {
      const itemObj = menuItems[item];
      const menuItemContainer = document.createElement('div')
      const menuItemImage = document.createElement('img')
      menuItemImage.src = itemObj.image
      menuItemContainer.classList.add("menuItemContainer")
      menuContainer.appendChild(menuItemContainer);
      menuItemContainer.appendChild(menuItemImage)
      menuItemImage.classList.add('menuItemImg')
    
      const descriptionContainer = document.createElement('div')
      descriptionContainer.classList.add('descriptionContainer')
    
      const menuItemTitle = document.createElement('h2')
      const menuItemDescription = document.createElement('p')
      const menuItemPrice = document.createElement('p')
    
      menuItemTitle.textContent = itemObj.name
      menuItemDescription.textContent = itemObj.description
      menuItemPrice.textContent = itemObj.price
      menuItemContainer.appendChild(descriptionContainer)
      descriptionContainer.appendChild(menuItemTitle)
      descriptionContainer.appendChild(menuItemDescription)
      descriptionContainer.appendChild(menuItemPrice)
    }
  }

  buildMenu();

}