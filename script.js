"use strict";
{
    const heightElement = document.querySelector(".js-height");
    const weightElement = document.querySelector(".js-weight");
    const formElement = document.querySelector(".js-form");
    const bmiElement = document.querySelector(".js-bmi");
    const dateElement = document.querySelector(".js-date");
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
        dateElement.innerText = newDate;
    };
    setInterval(calcDate, 1000);
}
