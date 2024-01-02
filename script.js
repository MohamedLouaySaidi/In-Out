const restaurant = [
  {
    id: 1,
    image: 'img/astragole.jpg' ,
    title: 'Astragole' ,
    description: '17 Av. Charles Nicolle, Tunis 1082' ,
    link: 'img/astragole_star.png' ,
    exlink: 'restaurant_example.html' ,
  },
  {
    id: 2,
    image: 'img/salle_a_manger.jpg' ,
    title: 'Salle A Manger' ,
    description: '3 Rue Imam Sahnoun, Tunis 1002' ,
    link: 'img/salle_a_manger_star.png' ,
    exlink: 'restaurant_example.html' ,
  },
  {
    id: 3,
    image: 'img/la_villa_didon.jpg' ,
    title: 'La Villa Didon' ,
    description: 'Rue Mendes France Byrsa, Carthage, Tunisia' ,
    link: 'img/la_villa_didon_star.png' ,
    exlink: 'restaurant_example.html' ,
  },
  {
    id: 4,
    image: 'img/les_dunes.png' ,
    title: 'Les Dunes' ,
    description: '130 Avenue Taieb Mehiri La Marsa, La Marsa, Tunisia' ,
    link: 'img/les_dunes_star.png' ,
    exlink: 'restaurant_example.html' ,
  },
]

const categories = [...new Set(restaurant.map((item)=>
  {return item}))]

  let cart = document.getElementById('root')
  cart.innerHTML = categories.map((item)=>
  {
    var{image, title, description, link, exlink} = item;
    return(
      `<div class="box boxrest" onclick="window.location.href='${exlink}';">
        <div class="img-box">
          <img class="resultimg" src=${image}></img>          
        </div>
        <div class="left">
          <a href="${exlink}"><p>${title}</p></a>
          <h2>${description}</h2>
          <img class="starimg" src=${link}></img>
        </div>
      </div>`
    )
  }).join('')

 
  
  /*check syntax*/
 /*var mainimg = document.getElementById('mainimg');
  var smallimg = document.getElementsByClassName('small-img');

  smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
  }
  smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
  }
  smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
  }
  smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
  }*/
/*
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});
*/
  