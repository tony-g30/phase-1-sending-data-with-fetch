function submitData(name, email) {
    // Configuration object for the POST request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    };
  
    // Fetch request
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json()) // Parse JSON from response
      .then(data => {
        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New user ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Append error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  