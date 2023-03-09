/*get the number of lower*/
function characters() {
  let upperCase = document.getElementById("uppercase").checked;
  let lowerCase = document.getElementById("lowercase").checked;

  const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lower = ["abcdefghijklmnopqrstuvwxyz"];

  let characters = document.getElementById("length").value;
  document.getElementById("result").innerHTML = characters;

  let randomPass = "";
  for (let i = 0; i < characters; i++) {
    if (upperCase) {
      randomPass += upper[0].charAt(Math.floor(Math.random() * 10));
    }
    if (lowerCase) {
      randomPass += lower[0].charAt(Math.floor(Math.random() * 10));
    }
    if (upperCase + lowerCase === 0) {
      alert("check the box!");
      return;
    }
  }
  const generatedPass = randomPass.slice(0, characters);
  document.getElementById("password__result").value = generatedPass;
  return characters;
}
characters();
document.getElementById("length").addEventListener("input", characters);
document.getElementById("btn").addEventListener("click", characters);

// const passwordGenerate = () => {
//     let staticPassword = "",
//     randomPassword = ""

//     for (let i = 0; i < passLength; i++) {
//         let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
//         if(excludeDuplicate) {

// !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
//         } else {
//             randomPassword += randomChar;
//         }
//     }
//     passwordInput.value = randomPassword;
// }

// generateBtn.addEventListener("click", passwordGenerate);
