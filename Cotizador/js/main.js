const pantalla = document.querySelector("pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
	boton.addEventListener("click", ()=> {
		const botonApretado = boton.textContent;
		console.log(boton.textContent);
	})
})