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
      employee0:{
        image: employee0.src = male30, 
        firstName: 'Mike',
        lastName: 'Camenzuli',
        position: 'Owner/Lead Baker',
        phone: '(123)456-7890',
        email: 'defrealemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      employee1:{
        image: employee1.src = male60,
        firstName: 'Fred',
        lastName: 'Camenzuli',
        position: 'Baker',
        phone: '(789)456-1230',
        email: 'notfakeemail@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      },
      employee2:{
        image: employee2.src = female60,
        firstName: 'Ann',
        lastName: 'Camenzuli',
        position: 'Reception',
        phone: '(890)123-4567',
        email: 'thisemailisfake@fakemail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores deleniti quis omnis rem amet perspiciatis, eligendi aliquid dolor, quas, optio dolorum? Consequatur, ducimus?',
        fullname: function () {
          return `${this.firstName} ${this.lastName}`
        }
      }
    }
  }



  function buildAbout(){
    for (const item in businessInfo) {
      const employeeObj = businessInfo[item];
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

  const storeInfo = {
    hours:{
      sun: 'Sunday - Closed',
      mon: 'Monday - 8:00am - 4:00pm',
      tues: 'Tuesday - 8:00am - 4:00pm',
      wed: 'Wednesday - 8:00am - 4:00pm',
      thurs: 'Thursday - 8:00am - 4:00pm',
      fri: 'Friday - 8:00am - 4:00pm',
      sat: 'Saturday - 8:00am - 4:00pm',
    }, 
    location: {
      address: '123 Fake Street',
      city: 'Fakeville',
      province: 'Żejtun',
      country: 'Malta',
    },
    phone: '(890)-123-4567',
    email: 'mikesmaltesebakery@fakemail.com'
  }



  function buildContactForm(){
    for (const item in storeInfo){
      const storeInfoObj = storeInfo[item];
      const storeInfoContainer = document.createElement('div');
      const title = document.querySelector('.contactInfo')
      storeInfoContainer.classList.add(`${item}-container`)
      title.appendChild(storeInfoContainer);

      const containerLabel = document.createElement('h3')
      containerLabel.classList.add(`${item}-subtitle`)
      containerLabel.textContent = item.charAt(0).toUpperCase() + item.slice(1);
      storeInfoContainer.appendChild(containerLabel)


    }
    const hoursSubtitle = document.querySelector('.hours-subtitle');
    const operatingHoursContainer = document.createElement('div');
    operatingHoursContainer.classList.add('operating-hours')
    
    const locationSubtitle = document.querySelector('.location-subtitle');
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-details')
    
    const phoneSubtitle = document.querySelector('.phone-subtitle');
    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('phone-number')
    const phone = document.createElement('p')
    phoneContainer.appendChild(phone)
    phone.textContent = storeInfo.phone
    
    const emailSubtitle = document.querySelector('.email-subtitle');
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-address')
    const email = document.createElement('p')
    emailContainer.appendChild(email)
    email.textContent = storeInfo.email

    hoursSubtitle.appendChild(operatingHoursContainer);
    locationSubtitle.appendChild(locationContainer);
    phoneSubtitle.appendChild(phoneContainer);
    emailSubtitle.appendChild(emailContainer);

    const iterateHours = (obj) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
  
          // console.log(`key: ${key}, value: ${currentObj[key]}`);
          const operatingHours = document.querySelector('.operating-hours')
          const hours = document.createElement('p');
          operatingHours.appendChild(hours);
          hours.textContent = currentObj[key];
  
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };

    const iterateLocation = (obj) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
  
          // console.log(`key: ${key}, value: ${currentObj[key]}`);
          const locationDetails = document.querySelector('.location-details')
          const location = document.createElement('p');
          locationDetails.appendChild(location);
          location.textContent = currentObj[key];
  
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };
    
    // iterate(storeInfo)
    iterateHours(storeInfo.hours)
    iterateLocation(storeInfo.location)
  }



  buildAbout();
  buildContactForm();
}