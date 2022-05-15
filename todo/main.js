const nameInput = document.querySelector("#nameInput");
const contentInput = document.querySelector("#contentInput");
const form = document.querySelector("#todoForm");
const itemsList = document.querySelector("#itemsList");

nameInput.addEventListener("input", () => {
    nameInput.classList.remove("is-invalid");
});

contentInput.addEventListener("input", () => {
    contentInput.classList.remove("is-invalid");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();
    if (!name || !content) {
        !name && nameInput.classList.add("is-invalid");
        !content && contentInput.classList.add("is-invalid");
        return;
    }

    nameInput.value = "";
    contentInput.value = "";

    const item = document.createElement("div");
    item.classList.add("list-group-item", "d-flex");

    const itemContent = document.createElement("div");
    itemContent.innerText = `${name} : ${content}`;
    itemContent.classList.add("me-auto");

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-trash-fill", "clickable");
    icon.addEventListener("click", () => {
        itemsList.removeChild(item);
    });

    item.appendChild(itemContent);
    item.appendChild(icon);

    itemsList.appendChild(item);
});
