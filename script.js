const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formulario);
  const intereses = Array.from(formulario.querySelectorAll('input[name="intereses"]:checked'))
                         .map(el => el.value);

  resultado.innerHTML = `
    <p><strong>Nombre:</strong> ${formData.get("nombre")}</p>
    <p><strong>País:</strong> ${formData.get("pais")}</p>
    <p><strong>Género:</strong> ${formData.get("genero")}</p>
    <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
  `;
});

document.getElementById("resetea").addEventListener("click", () => {
  formulario.reset();
  resultado.innerHTML = "";
});
