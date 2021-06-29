const userName = document.querySelector("#name");
const form = document.querySelector("#submit-form");
const repoGH = document.querySelector("#repositories");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = userName.value;
  console.log(user);

  const url = `https://api.github.com/users/${user}/repos`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      repoOnPage(results);
    })
    .catch((e) => {
      alert("Username not found");
    });
});

function repoOnPage(i) {
  for (var j = 0; j < i.length; j++) {
    console.log(i[j].name);
    console.log(i[j].html_url);
    let repoItem = document.createElement("li");
    repoItem.innerHTML = `Repo name: ${i[j].name} --- Repo url: ${i[j].html_url}`;
    repositories.appendChild(repoItem);
  }
}
