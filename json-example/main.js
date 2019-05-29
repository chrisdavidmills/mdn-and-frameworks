const topHeading = document.getElementById('React');

let jsonFiles = [
  'react.json'
];

function getJSON(jsonFile) {
  return fetch(jsonFile)
  .then(
    response => response.json()
  )
}

getJSON(jsonFiles[0])
.then(result => {
  addEntry(result.entries.react.conditional_content);
})

function addEntry(obj) {
  let container = document.createElement('div');
  let subheading = document.createElement('h4');
  subheading.textContent = obj.title;
  let bodyText = document.createElement('div');
  bodyText.innerHTML = obj.body;

  container.appendChild(subheading);
  container.appendChild(bodyText);
  document.body.appendChild(container);
}
