export default function about(){

  //set active nav button
  const activeBtn = document.querySelector("button.active")
  const aboutBtn = document.querySelector("button.about")
  activeBtn.classList.remove("active")
  aboutBtn.classList.add("active")

  const content = document.querySelector('#content');
  const titleContainer = document.createElement('div')
  const title = document.createElement("h1");
  titleContainer.classList.add('title-container')
  title.classList.add('title')
  title.textContent = "About Us";
  titleContainer.appendChild(title);
  content.appendChild(titleContainer);
  
  const contactInfoContainer = document.createElement('div')
  const contactInfo = document.createElement('h3')
  contactInfo.classList.add('contactInfo')
  contactInfo.textContent = 'Contact Us';
  content.appendChild(contactInfoContainer)
  contactInfoContainer.appendChild(contactInfo)
  
  const contacts = {
    contact1:{
      firstName: 'Mike',
      lastName: 'Camenzuli',
      position: 'Owner/Lead Baker',
      phone: '(123)456-7890',
      email: 'defrealemail@fakemail.com',
    },
    contact2:{
      firstName: 'Fred',
      lastName: 'Camenzuli',
      position: 'Baker',
      phone: '(789)456-1230',
      email: 'notfakeemail@fakemail.com',
    },
    contact3:{
      firstName: 'Ann',
      lastName: 'Camenzuli',
      position: 'Reception',
      phone: '(890)123-456',
      email: 'thisemailisfake@fakemail.com',
    }
  }

}