```js
{
  const calcDate = () => {
    const date = new Date();
    const newDate = date.toLocaleDateString("en-EN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    document.querySelector(".js-date").innerText = newDate;
  };

  setInterval(calcDate, 1000);

  let heightElement = document.querySelector(".js-height");
  let weightElement = document.querySelector(".js-weight");
  let formElement = document.querySelector(".js-form");
  let bmiElement = document.querySelector(".js-bmi");

  const inputDataOn = () => {
    let height = heightElement.value;
    let weight = weightElement.value;
    let bmi = weight / (height / 100) ** 2;
    bmiElement.innerText = bmi.toFixed(2);

    if (bmi < 18.5) {
      bmiElement.className = "js-bmi underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      bmiElement.className = "js-bmi normal";
    } else if (bmi > 24.9 && bmi <= 30) {
      bmiElement.className = "js-bmi overweight underweight";
    } else {
      bmiElement.className = "js-bmi obesity";
    }
  };

  formElement.addEventListener("input", inputDataOn);
}
```