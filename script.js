"use strict";
{
    let heightElement = document.querySelector(".js-height");
    let weightElement = document.querySelector(".js-weight");
    let formElement = document.querySelector(".js-form");
    let bmiElement = document.querySelector(".js-bmi");
    const inputDataOn = () => {
        let height = parseFloat(heightElement.value);
        let weight = parseFloat(weightElement.value);
        let bmi = weight / Math.pow((height / 100), 2);
        bmiElement.innerText = bmi.toFixed(2);
        if (bmi < 18.5) {
            bmiElement.className = "js-bmi underweight";
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            bmiElement.className = "js-bmi normal";
        }
        else if (bmi > 24.9 && bmi <= 30) {
            bmiElement.className = "js-bmi overweight underweight";
        }
        else {
            bmiElement.className = "js-bmi obesity";
        }
    };
    formElement.addEventListener("input", inputDataOn);
}
