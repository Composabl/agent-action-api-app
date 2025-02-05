 // JavaScript function to handle the form submission
 async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const observation = {};

    // Create the observation object from the form data
    formData.forEach((value, key) => {
        observation[key] = parseFloat(value);  // Convert string values to floats
    });

    const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ observation })
    });

    const result = await response.json();

    // Display the result in the output div
    document.getElementById('result').textContent = `Action: ${result.action}`;
}