{
    let heightElement = document.querySelector(".js-height");
    let weightElement = document.querySelector(".js-weight");
    let formElement = document.querySelector(".js-form");
    let bmiElement = document.querySelector(".js-bmi");

    const inputDataOn = () => {
        let height = heightElement.value;
        let weight = weightElement.value;
        let bmi = weight / ((height / 100) ** 2);
        bmiElement.innerText = bmi.toFixed(2);
        console.log(height, weight, bmi);
    }

    formElement.addEventListener("input", inputDataOn);
}
//INPUT example//