function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "d452da0fe2cb4btd0a16e31f1oe44d2f";

  let context =
    "You are a romantic poem expert, and love to write short poems. Your mission is to generate a four line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with SheCodes AI inside a <stong> element at the end of the poem";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating the English poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
