// Your provided URL
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Async function with a callback
async function fetchData(callback) {
    try {
        // Fetch data from the provided URL using async/await
        const response = await fetch(url);
        const data = await response.json();

        // Call the callback function with the result
        callback(null, data.title);
    } catch (error) {
        // If there's an error, pass it to the callback
        callback(error, null);
    }
}

// Callback function to display the title on the webpage
function displayTitle(error, title) {
    const outputDiv = document.getElementById('output');

    if (error) {
        outputDiv.textContent = 'Error fetching data.';
    } else {
        outputDiv.textContent = `Title: ${title}`;
    }
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', async () => {
    // Call the async function with the callback
    await fetchData(displayTitle);
});
