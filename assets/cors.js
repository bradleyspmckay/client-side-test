function testURL(event) {

    event.preventDefault();
    paragraphToUpdate = document.getElementById("results");
    
    fetch(event.target.elements["url_to_test"].value)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        } else {
            paragraphToUpdate.innerText = `Request successful! Status: ${response.status}\n\nThe application may be vulnerable to cross-origin attacks.`
        }
    })
    .catch(error => {
        // Handle errors, including CORS errors
        if (error.message.includes('Failed to fetch')) {
            paragraphToUpdate.innerText = 'CORS error: The request was blocked by CORS policy.';
        } else {
            paragraphToUpdate.innerText =  `An error occurred: ${error.message}`;
        }
    });
    }