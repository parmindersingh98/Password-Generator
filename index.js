let length = document.querySelector(".number");
let btn = document.querySelector(".btn");
let password = document.querySelector(".password");
let message = document.querySelector(".message");
let arr =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*()";

btn.addEventListener("click", () => {
  if (length.value > 0) {
    let arr2 = "";
    for (let i = 0; i < length.value; i++) {
      let randomNumber = Math.floor(Math.random() * arr.length);
      arr2 += arr[randomNumber];
    }

    password.textContent = arr2;
    
  } else {
    password.textContent = "Please enter a valid number!";
  }

  length.textContent = '';
});

password.addEventListener("click", function () {
  let textToCopy = this.textContent;

  navigator.clipboard.writeText(textToCopy);
  alert(`${textToCopy} is copied to clipboard.`);
});
