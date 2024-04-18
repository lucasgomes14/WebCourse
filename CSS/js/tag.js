const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag]: this[padrao]
    }
}

document.querySelectorAll(".tag").forEach(elemento => { //todos que estão com a class tag
    const tagName = elemento.tagName.toLowerCase() // transforma o nome da tag em minusculo do elemento atual

    elemento.style.borderColor = colors.get(tagName)  // transforma a borda do elemento atual na cor #616161

    if (!elemento.classList.contains("nolabel")) { // se não existir a classe nolabel no elemento 
        const label = document.createElement("label") // cria um elemento label
        label.style.backgroundColor = colors.get(tagName) //coloca a cor de fundo desse label em #616161
        label.innerHTML = tagName; // obtenho o tagName
        elemento.insertBefore(label, elemento.childNodes[0]) // e insere antes o label no seu primeiro elemento filho presente
    }
})