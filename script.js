const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const resetear = document.getElementById("resetear");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked'))
                          .map(el => el.value);

    resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Género:</strong> ${genero || "No especificado"}</p>
        <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
    `;
});
resetear.addEventListener("click", function () {
    formulario.reset(); 
    resultado.innerHTML = ""; 
});