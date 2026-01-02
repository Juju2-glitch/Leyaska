
let biblioteca = []

const open = document.getElementById("abrir");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

const form = document.getElementById("book-form");
const title = document.querySelector("main section:nth-child(1)");
const listBooks = document.querySelector("main > section:nth-child(2) footer");

//Modal

open.addEventListener("click",()=>{
    modal_container.classList.add("show");
});


close.addEventListener("click",()=>{
    modal_container.classList.remove("show");
});




// Logica



form.addEventListener("submit",(e) => {
    e.preventDefault();


    const nuevoLibro={
        id:Date.now(),
        titulo:document.getElementById("title").value,
        autor:document.getElementById("autor").value,
        resena:document.getElementById("resena").value,
        calificacion:document.getElementById("calificacion").value,
        url:document.getElementById("url").value
    }

    biblioteca.push(nuevoLibro);
    form.reset();
    modal_container.classList.remove("show");


    console.log(biblioteca)

    renderizarLibro();

})


const renderizarLibro = ()=>{
    listBooks.innerHTML = `<ul id="lista-titulos"></ul>`;
    const ul = document.getElementById("lista-titulos");

    biblioteca.forEach(libro=>{
        const li = document.createElement("li");
        const span = document.createElement("span");
        const div =document.createElement("div");

        div.innerHTML = `<svg class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>`;
        span.textContent = libro.titulo;
        span.style.cursor = "pointer";

        li.append(div,span);

        li.onclick = ()=> mostrarDetalle(libro);
        ul.appendChild(li);
    });

};


function mostrarDetalle(libro) {
    title.innerHTML = `
        <div class="detalle-libro">
            <img src="${libro.url}" alt="${libro.titulo}" style="width: 200px; border-radius: 8px;">
            <h1>${libro.titulo}</h1>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Calificación:</strong> ${libro.calificacion}/10</p>
            <div class="resena-container">
                <p>${libro.resena}</p>
            </div>
            <button class="botoes" onclick="window.location.reload()" style="margin-top: 20px;">Volver al inicio</button>
        </div>
    `;
}