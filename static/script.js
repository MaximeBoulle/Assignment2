document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const fetchButton2 = document.getElementById('fetchButton2');
    const responseContainer = document.getElementById('responseContainer');
    const userIdInput = document.getElementById('userId');



    fetchButton.addEventListener('click', () => {

        const userId = userIdInput.value;

        if (!userId) {
            alert("Insert an ID !");
            return;
        }

        fetch(`/api/id/${userId}`)
            .then(response => response.json())
            .then(data => {
                responseContainer.textContent = `ID ${userId} : Name : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
            })
    });

    fetchButton2.addEventListener('click', () => {

            fetch(`/api/random/`)
                .then(response => response.json())
                .then(data => {
                    responseContainer.textContent = `ID ${data.id} : nom : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
                })
    });
});
