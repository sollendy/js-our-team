//creare variabili su elementi HTML
//creare array principale
//nidificare al suo interno gli oggetti dell'array
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//creare variabili su elementi HTML
const contImpiegatiEl = document.getElementById('contenitore-profili');
const listaImpiegatiEl = document.createElement("ul");
contImpiegatiEl.append(listaImpiegatiEl);

//creare array principale
const impiegati = [
    {
        nome: 'Patrizia',
        cognome: "bottale",
        ruolo: "fondatore & Capo",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/angela-caroll-chief-editor.jpg",
    },

    {
        nome: 'Cinzia',
        cognome: "Cerulli",
        ruolo: "Game designer",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/angela-lopez-social-media-manager.jpg",
    },
    
    {
        nome: 'Giulia',
        cognome: "Toscano",
        ruolo: "software engineer",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/barbara-ramos-graphic-designer.jpg",
    },
    
    {
        nome: 'Claudio',
        cognome: "Bartolotta",
        ruolo: "senior programmer",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/scott-estrada-developer.jpg",
    },
    
    {
        nome: 'Mariano',
        cognome: "Aleotti",
        ruolo: "graphic engineer",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/walter-gordon-office-manager.jpg",
    },
    
    {
        nome: 'Michele',
        cognome: "Fasani",
        ruolo: "game tester",
        foto: "https://github.com/sollendy/js-our-team/blob/main/img/wayne-barnett-founder-ceo.jpg",
    },
];
//console.log(impiegati);
//adesso vedo come vengono stampati in pagina gli elementi
//ListaImpiegatiEl.append(impiegati); così è inefficace
//applico il ciclo prima for in modo tale da prendere gli elementi dell'array uno per uno e poi for in perché forse così ottengo la stampa in pagina di ogni elemento


for (let i = 0; i< impiegati.length; i++) {
    let teamMember = document.createElement("li");
    teamMember.append(`${impiegati[i].nome} `);
    teamMember.append(`${impiegati[i].cognome} - `);
    teamMember.append(`${impiegati[i].ruolo} - `);
    teamMember.append(`${impiegati[i].foto}`);

    listaImpiegatiEl.append(teamMember);

    for (let key in impiegati[i]) {
        console.log(key + ": " + impiegati[i][key]);
    }
}