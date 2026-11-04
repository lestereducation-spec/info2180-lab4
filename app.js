const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", async function () {
    try {
        const response = await fetch("superheroes.php");

        if (!response.ok) {
            throw new Error("The request failed.");
        }

        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error(error);
        alert("Unable to load the superheroes.");
    }
});