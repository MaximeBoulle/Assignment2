const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Leanne@gmail.com"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Ervin@gmail.com"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Samantha@gmail.com"
    },
    {
        "id": 4,
        "name": "John Doe",
        "username": "johndoe",
        "email": "johndoe@gmail.com"
    },
    {
        "id": 5,
        "name": "Alice Smith",
        "username": "alicesmith",
        "email": "alicesmith@gmail.com"
    },
    {
        "id": 6,
        "name": "Jane Doe",
        "username": "janedoe",
        "email": "janedoe@gmail.com"
    },
    {
        "id": 7,
        "name": "Bob Johnson",
        "username": "bobjohnson",
        "email": "bobjohnson@gmail.com"
    },
    {
        "id": 8,
        "name": "Michael Wilson",
        "username": "michaelwilson",
        "email": "michaelwilson@gmail.com"
    },
    {
        "id": 9,
        "name": "Emily Davis",
        "username": "emilydavis",
        "email": "emilydavis@gmail.com"
    },
    {
        "id": 10,
        "name": "David Lee",
        "username": "davidlee",
        "email": "davidlee@gmail.com"
    },
    {
        "id": 11,
        "name": "Sarah Miller",
        "username": "sarahmiller",
        "email": "sarahmiller@gmail.com"
    },
    {
        "id": 12,
        "name": "Matthew Brown",
        "username": "matthewbrown",
        "email": "matthewbrown@gmail.com"
    },
    {
        "id": 13,
        "name": "Olivia Wilson",
        "username": "oliviawilson",
        "email": "oliviawilson@gmail.com"
    },
    {
        "id": 14,
        "name": "Daniel Smith",
        "username": "danielsmith",
        "email": "danielsmith@gmail.com"
    },
    {
        "id": 15,
        "name": "Sophia Johnson",
        "username": "sophiajohnson",
        "email": "sophiajohnson@gmail.com"
    },
    {
        "id": 16,
        "name": "James Jones",
        "username": "jamesjones",
        "email": "jamesjones@gmail.com"
    },
    {
        "id": 17,
        "name": "Emma Martinez",
        "username": "emmamartinez",
        "email": "emmamartinez@gmail.com"
    },
    {
        "id": 18,
        "name": "Alexander Davis",
        "username": "alexanderdavis",
        "email": "alexanderdavis@gmail.com"
    },
    {
        "id": 19,
        "name": "Ava Smith",
        "username": "avasmith",
        "email": "avasmith@gmail.com"
    },
    {
        "id": 20,
        "name": "William Taylor",
        "username": "williamtaylor",
        "email": "williamtaylor@gmail.com"
    }
];

export const getDataById = (id) => data.find(user => user.id === parseInt(id));

const {floor, random} = Math;
const getRandom = items => items[floor(random() * items.length)];
export const getRandomData = () => getRandom(data);
