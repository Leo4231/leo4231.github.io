function setName() {
  var visitorname = prompt("Hey There! May I know your name?")

  if (visitorname.length != 0) {
    document.getElementById("name").innerHTML = "Hello " + visitorname + ", welcome to my page! ";
  }
  else {
    document.getElementById("name").innerHTML = "Hello friend, welcome to my page! ";
  }
}
