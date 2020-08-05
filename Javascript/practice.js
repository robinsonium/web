console.log("my script is working yo!")

console.log(document.body);
var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
body.innerHTML = "Hello World";
var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod.innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
}
