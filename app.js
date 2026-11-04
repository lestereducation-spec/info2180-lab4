const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const resultDiv = document.querySelector("#result");

searchButton.addEventListener("click", async function () {
    const query = searchInput.value.trim();
    const parameters = new URLSearchParams({ query });

    try {
        const response = await fetch(`superheroes.php?${parameters}`);

        if (!response.ok) {
            throw new Error("The request failed.");
        }

        const result = await response.text();
        resultDiv.innerHTML = result;
    } catch (error) {
        console.error(error);
        resultDiv.textContent = "Unable to load the superheroes.";
    }
});