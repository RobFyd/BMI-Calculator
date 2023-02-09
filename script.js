let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("input", () => {
    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2); //*dzielimy przez 100 bo wpisujemy cm a potrzeba metry, height * height to to samo co height ** 2 (potega)*//

    bmiElement.innerText = bmi.toFixed(2); //*toFixed - ilosc liczb po przecinku*//

    console.log(height, weight, bmi);
})

//to jest przyklad INPUT//