const apiUrl = 'https://restcountries.com/v3.1/all';
let loader = document.querySelector('#loader');


async function displayItems(filterText = '') {
    try {
        loader.style.display = 'flex';
        const res = await fetch(apiUrl);
        const data = await res.json();
        loader.style.display = 'none';

        const filteredData = data.filter(item =>
            item.name.common.toLowerCase().includes(filterText.toLowerCase())
        );

        const productHTML = filteredData.map(item => `
            <div class="box">
            <div>
            <img src="${item.flags.svg}" class="boximg" alt="Flag of ${item.name.common}">
            </div>
                <h2 class="h2">${item.name.common}</h2>
            </div>
        `).join('');

        document.querySelector('.main__div').innerHTML = productHTML;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('filterInput').addEventListener('input', (event) => {
    displayItems(event.target.value);
});

displayItems();
 

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.createElement("button");
    toggleSwitch.textContent = "🌙 Dark Mode";
    toggleSwitch.classList.add("toggle-btn");
    document.querySelector(".nav").appendChild(toggleSwitch);

    function toggleTheme() {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            toggleSwitch.textContent = "☀️ Light Mode";
        } else {
            toggleSwitch.textContent = "🌙 Dark Mode";
        }
    }

    toggleSwitch.addEventListener("click", toggleTheme);
});







// const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'd59dbd9747msh950a0d4f46aaf4bp188c12jsn11cf69907a27',
//         'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
//     }
// };

// const select = document.querySelector("select");
// const narx = document.querySelector("#narx"); 

// async function getdata() {
//     try {
//         const response = await fetch(url, options);
//         const res = await response.json();



//     } catch (error) {
//         console.error("Ошибка при получении данных:", error);
//     }
// }

// getdata();
