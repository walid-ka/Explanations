const title = document.getElementById("title");
const button = document.getElementById("btn");


button.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    title.classList.toggle("highlight");
    title.innerText = `Welcome, ${name}!`;
});