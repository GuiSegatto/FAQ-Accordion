const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((accordion) => { 
    const accordionHeaderItem = accordion.querySelector(".accordionHeader");
    
    accordionHeaderItem.addEventListener("click", () => {
        const accordionContentItem = accordion.querySelector(".accordionContent");

        verifyActive(accordion, accordionContentItem, itemActived);
    });
});

function verifyActive(accordion, content, contentActived) {
    const iconItem = accordion.querySelector(".arrow");
    const iconItemActived = document.querySelectorAll(".arrow");

    const itemText = accordion.querySelector(".accordionTextHeader")
    const textActived = document.querySelectorAll(".accordionTextHeader");

    iconItemActived.forEach((item) => (item.classList.remove("arrowRotate")));
    textActived.forEach((item) => (item.classList.remove("activeBold")));

    if (contentActived) {
        contentActived.style.height = 0; 
        contentActived.classList.remove("active"); 
    }

    if(content !== contentActived) {
        iconItem.classList.add("arrowRotate");
        content.classList.add("active");
        content.style.height = content.scrollHeight + 10 + "px";
        itemText.classList.add("activeBold");
    };
};

