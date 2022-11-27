const accordionItem = document.querySelectorAll(".accordionItem"); // Recebe todos os items do classe accordion item



accordionItem.forEach((item) => { // O item recebido será o accordion item clickado
    const accordionHeaderItem = item.querySelector(".accordionHeader"); // Seleciona o accordionHeader (parte que será clickada)

    accordionHeaderItem.addEventListener("click", () => { // Ao clickar executa a arrow function
        const accordionContentItem = item.querySelector(".accordionContent"); // Seleciona o content accordion (o que será exibido)

        const itemActived =  document.querySelector(".active"); // Seleciona o elemento com classe .active

        verifyActive(item, accordionContentItem, itemActived); // Executa a função que verifica se está ativo e passa os parametros
    });
});

/* 
item = acorddion selecionado
content = accordion content
contentActived = o que possuir classe active
*/

function verifyActive(item, content, contentActived) { // Passa os parametros recebidos através do onclick acima
    const iconItem = item.querySelector(".arrow");
    const iconItemActived = document.querySelectorAll(".arrow"); 

    /* 
        iconItem = seleciona o a img com classe .arrow clickada
        iconItemActived = seleciona todos as imgs
    */

    // faz com que volte ao icon com a seta para baixo
    iconItemActived.forEach((item) => (item.classList.remove("arrowRotate")));

    if (contentActived) {
        contentActived.style.height = 0; // Volta o height para 0
        contentActived.classList.remove("active"); // abre o container
    }

    if(content !== contentActived) {
        iconItem.classList.add("arrowRotate") // adiciona a seta para cima
        content.classList.add("active") // fecha o container
        content.style.height = content.scrollHeight + 10 + "px"; // scrollHeight faz com que caiba todo o content quando aberto
    };
};

