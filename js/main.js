// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const employees = [
    {
        "name": "Wayne Barnet",
        "role": "Founder & CEO",
        "image": "wayne-barnet-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < employees.length; i++){
    let indexArray = employees[i];
    // console.log(indexArray);

    for (let attributeVal in indexArray) {
        console.log(attributeVal,indexArray[attributeVal]);
        const printMembers = document.getElementById("team");
        const memberImage = document.getElementById("immagini");
        // MILESTONE 2:
        // Stampare le stesse informazioni su DOM sotto forma di stringhe
        printMembers.innerHTML += `<h2> ${attributeVal} : ${indexArray[attributeVal]} </h2>`;

        // BONUS 1:
        // Trasformare la stringa foto in una immagine effettiva
        if ( attributeVal === "image") {
        memberImage.innerHTML += `<img src="${indexArray['image']}">`;
        }
    }
};



// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!