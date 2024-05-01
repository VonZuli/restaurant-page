import female60 from './images/female_baker_60s.png'
import male60 from './images/male_baker_60s.png'
import male30 from './images/male_baker_30s.png'

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
  
  const aboutInfoContainer = document.createElement('div')
  const aboutInfoSubtitle = document.createElement('h3')
  aboutInfoContainer.classList.add('aboutInfoContainer')
  aboutInfoSubtitle.textContent = 'Meet the team';
  aboutInfoSubtitle.classList.add('aboutInfoSubtitle')
  content.appendChild(aboutInfoContainer)
  aboutInfoContainer.appendChild(aboutInfoSubtitle)


  // const contactInfoContainer = document.createElement('div')
  const contactInfo = document.createElement('h3')
  contactInfo.classList.add('contactInfo')
  contactInfo.textContent = 'Contact Us';
  // content.appendChild(contactInfoContainer)
  aboutInfoContainer.appendChild(contactInfo)

  const employee0 = new Image()
  const employee1 = new Image()
  const employee2 = new Image()

  
  const businessInfo = {
    employeeInfo:{
      contact1:{
        image: employee0.src = male30, 
        firstName: 'Mike',
        lastName: 'Camenzuli',
        position: 'Owner/Lead Baker',
        phone: '(123)456-7890',
        email: 'defrealemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi reprehenderit aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      contact2:{
        image: employee1.src = male60,
        firstName: 'Fred',
        lastName: 'Camenzuli',
        position: 'Baker',
        phone: '(789)456-1230',
        email: 'notfakeemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi reprehenderit aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      contact3:{
        image: employee2.src = female60,
        firstName: 'Ann',
        lastName: 'Camenzuli',
        position: 'Reception',
        phone: '(890)123-456',
        email: 'thisemailisfake@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi reprehenderit aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      }
    }
  }

  // const storeInfo = {
  //   hours: 
  //   location:
  //   phone:
  //   email:
  // }

  function buildAbout(){
    for (const item in businessInfo) {
      const itemObj = businessInfo[item];
      for (const employee in businessInfo[item]){
        const employeeObj = businessInfo[item][employee];
        const bioCard = document.createElement('div')
        bioCard.classList.add('bio-card')
        const cardContainer = document.createElement('div')
        const subtitle = document.querySelector('.aboutInfoSubtitle')
        cardContainer.classList.add('card-container')
        subtitle.appendChild(cardContainer)
        const aboutInfoImage = document.createElement('img')
        aboutInfoImage.src = employeeObj.image

        cardContainer.appendChild(bioCard)
        bioCard.appendChild(aboutInfoImage)

        const bioInfoContainer = document.createElement('div')
        bioInfoContainer.classList.add('bioInfoContainer')
        bioCard.appendChild(bioInfoContainer)
        const name = document.createElement('h4')
        name.classList.add('employee-name')
        name.textContent = employeeObj.fullname(employeeObj.firstName, employeeObj.lastName);
        bioInfoContainer.appendChild(name)

        const position = document.createElement('h4')
        position.classList.add('position')
        position.textContent = employeeObj.position;
        bioInfoContainer.appendChild(position)

        const bio = document.createElement('p')
        bio.classList.add('bio')
        bio.textContent = employeeObj.bio;
        bioInfoContainer.appendChild(bio)
      }
    }
  }

  function buildContactForm(){

  }
  buildAbout();
  buildContactForm();
}