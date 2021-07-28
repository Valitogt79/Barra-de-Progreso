// obtener los pasos (steps)
const steps = document.querySelectorAll(".step");

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
  if (currentStep < steps.length) {
    currentStep++;
    updateProgress();
  }
});

//escuchar el boton anterior
prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    //sumar 1 a los pasos
    currentStep--;
    updateProgress();
  }
});

//funcion para actualizar el progreso
function updateProgress() {
  //actualizar pasos
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  //actualizar barra
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  bar.style.width = progress + "%";

  // control de los botones
  if (currentStep === steps.length) {
    nextButton.disabled = true;
  } else if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = nextButton.disabled = false;
  }
}
