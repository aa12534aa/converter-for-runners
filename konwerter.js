// dane
const boxesName = [
    {
        id: '1',
        name: 'min/km to km/h',
        placeholder: 'entre min/km' 
    },
    {
        id: '2',
        name: 'km/h to min/km',
        placeholder: 'entre km/h'
    },
    {
        id: '3',
        name: 'm/s to km/h',
        placeholder: 'entre m/s'
    }
];
//

// html
let Html = '';
boxesName.forEach(element => {
    Html += `
    <div class="box">
        <div class="boxTitle">${element.name}</div>
        <div class="inputButton">
            <input class="inputConvert jsInputConverter${element.id}" type="text" placeholder="${element.placeholder}">
            <button class="buttonConvert jsButtonConverter" data-boxid="${element.id}">
                Convert
            </button>
        </div>
        <div class="boxOutput jsOutput${element.id}">
        </div>
    </div>
    `;
});

document.querySelector('.mainContainer')
    .innerHTML = Html;
//

// wyswietlanie przkonwertowanych wartosci
document.querySelectorAll('.jsButtonConverter')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const { boxid } = button.dataset;
            const inputElement = document.querySelector(`.jsInputConverter${boxid}`)
            let number = Number(inputElement.value)

            if (boxid === '1') {
                document.querySelector(`.jsOutput${boxid}`)
                    .innerHTML = `${minTokm(number)} km/h`;
            } else if (boxid === '2') {
                document.querySelector(`.jsOutput${boxid}`)
                    .innerHTML = `${kmToMin(number)} min/km`;
            } else {
                document.querySelector(`.jsOutput${boxid}`)
                    .innerHTML = `${msToKm(number)} km/h`;
            }
        })
    })
//

// glowne dzialanie programu
function minTokm(min) {
    let minRounded = Math.floor(min);
    let sec = (min - minRounded) * 10 / 6;
    return Math.floor(60 / (minRounded + sec) * 100) / 100;
}

function kmToMin(km) {
    let min = 60 / km;
    let sec = (min - Math.floor(min)) * 6 / 10;
    return Math.floor(min) + Math.floor(sec * 100) / 100;
}

function msToKm(ms) {
    return Math.floor(ms * 3.6 * 100) / 100;
}
//
