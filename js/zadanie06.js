document.addEventListener("DOMContentLoaded", () => {
    var shoppingList = document.getElementById("shopping-list");
    var button1 = document.getElementById("button-1");
    var button2 = document.getElementById("button-2");
    var button3 = document.getElementById("button-3");

    button1.addEventListener("click", () => {
        var li = document.createElement("li");
        li.textContent = "chleb";
        shoppingList.appendChild(li);
    })

    button2.addEventListener("click", () => {
        shoppingList.children[shoppingList.children.length - 1].remove();
    })

    button3.addEventListener("click", () => {
        shoppingList.appendChild(shoppingList.children[1]);
    })
});