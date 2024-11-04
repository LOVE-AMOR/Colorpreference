let favoriteColors = []; 

function colorpreference() {
  for (let i = 0; i < 3; i++) {
    let color = prompt("Enter your favorite color:");
    favoriteColors.push(color);
    console.log("Your favorite colors are:", favoriteColors);
  }
}