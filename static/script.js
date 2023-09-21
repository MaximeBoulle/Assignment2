document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const responseContainer = document.getElementById('responseContainer');
    const userIdInput = document.getElementById('userId');



    fetchButton.addEventListener('click', () => {

        const userId = userIdInput.value;

        fetch(`/api/id/${userId}`)
            .then(response => response.json())
            .then(data => {
                responseContainer.textContent = `ID ${userId} : nom : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
            })
    });
});
