function testURL(event) {
    event.preventDefault();
    url = event.target.elements["url_to_test"].value
    fetchConfig = {mode: "cors"}
    paragraphToUpdate = document.getElementById("results");
    consoleStyle = "color: #f96d00; background: #393e46; font-weight: bold"

    fetch(url, fetchConfig)
        // Make request and log response code, continue if successful
        .then(response => {
            if (!response.ok) {
                paragraphToUpdate.innerText = `Network response not ok: ${response.status}\n\nCheck debug console for further information.`
            } else {
                paragraphToUpdate.innerText = `Request successful! Status: ${response.status}\n\nThe application may be vulnerable to cross-origin attacks.\n\nCheck debug console for captured data`
                console.log("%c  -- RESPONSE HEADERS --  ", consoleStyle)
                headerString = ""
                for (const [key, value] of response.headers.entries()) {
                    headerString += `${key}: ${value}\n`
                }
                console.log(headerString)
                return response
            }
        })
        // Convert response body into text
        .then(response => response.text())
        // Log body data
        .then(body => {
            console.log("%c  -- RESPONSE BODY --  ", consoleStyle)
            console.log(body.replace(/[\r\n\r\n]+/, ""))
        })
        // Error handling
        .catch(error => {
            console.error(error)
        })
}
