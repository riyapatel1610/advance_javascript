function getCurrentDate() {
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let currentDate = new Date();
  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let dayOfMonth = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();
  
  return `Today is ${dayOfMonth}, ${month} ${year}, ${dayOfWeek}.`;
}


let currentDate = getCurrentDate();
console.log(currentDate);