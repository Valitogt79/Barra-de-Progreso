// obtener los pasos (steps)
const steps = document.querySelectorAll(".steps");

//obtener la barra de progreso
const bar = document.getElementById("bar");

//obtener la referencia a los botones
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//Guardar el paso en el que estamos
let currentStep = 1;

//escuchando el botón siguiente
nextButton.addEventListener("click", () => {
  //sumar 1 a los pasos
  currentStep++;
  steps.forEach((step, index) => {
    console.log(index);
    if (index < currentStep) {
      step.classList.add("active");
    }
  });
});
