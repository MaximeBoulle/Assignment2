document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const responseContainer = document.getElementById('responseContainer');
    const userMessageInput = document.getElementById('userMessage');

    fetchButton.addEventListener('click', () => {
        const userMessage = userMessageInput.value;

        fetch(`/api?data=${userMessage}`)
            .then(response => response.json())
            .then(data => {
                responseContainer.textContent = `Data : ${data.data}`;
            })
    });
});
