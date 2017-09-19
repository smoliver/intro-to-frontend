window.onload = () => {
  let app = document.getElementById ('app');
  
  let truthTest = document.createElement ('section');
  truthTest.className = 'truthTest';
  let title = document.createElement ('h2');
  title.textContent = "Manipulating the DOM";
  truthTest.appendChild (title);
  let description = document.createElement ('p');
  description.textContent = "Wondering what happened to the content on the page? We got rid of it using javascript!"
  truthTest.appendChild (description);
  let eltLink = document.createElement ('a');
  eltLink.setAttribute ('href', 'https://developer.mozilla.org/en-US/docs/Web/API/Element');
  eltLink.setAttribute ('target', '_blank');
  eltLink.textContent = " You can create, destroy and manipulate elements using the browsers built in web api";
  description.appendChild (eltLink);

  let truthApp = document.createElement ('section');


  let truthTitle = document.createElement ('h3');
  truthTitle.textContent = 'Javascript Truthiness';
  truthApp.appendChild (truthTitle);

  let truthInput = document.createElement ('input');
  truthInput.setAttribute ('type', 'text');
  truthApp.appendChild (truthInput);

  let truthButton = document.createElement ('button');
  truthButton.textContent = 'evaluate';
  truthApp.appendChild (truthButton);

  let truthOutput = document.createElement ('p');
  truthApp.appendChild (truthOutput);


  truthButton.addEventListener ('click', evaluateTruth.bind (this, truthInput, truthOutput));

  truthTest.appendChild (truthApp);

  while (app.firstChild) {
    app.removeChild (app.firstChild);
  }

  app.appendChild (truthTest);
  
}

function evaluateTruth (textInput, textOutput) {
  textOutput.textContent = eval (textInput.value)
}