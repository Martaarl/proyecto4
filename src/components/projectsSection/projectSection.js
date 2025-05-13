import './projectSection.css'
export default function createProjectsSection () {
     
    const main = document.querySelector('main');

    const projectTitle = document.createElement('h1');
    projectTitle.textContent = 'Proyectos creados por mi';
    projectTitle.className = 'projectTitle';

    const projectSection = document.createElement('section');
    projectSection.className = 'projectSection';

    const cards = [
        {name: 'Proyecto 1', image: '/assets/proyecto1.png', number: '/assets/1.png', link: 'https://github.com/Martaarl/landinpage.git' },
        {name: 'Proyecto 2', image: '/assets/proyecto2.png', number: '/assets/2.png', link: 'https://github.com/Martaarl/proyecto2galeriacambios.git' },
        {name: 'Proyecto 3', image: '/assets/proyecto3.png', number: '/assets/3.png', link: 'https://github.com/Martaarl/proyecto3.git' }
    ];

    cards.forEach(card=>{

    const cardDiv = document.createElement('div');
    cardDiv.className= 'cardDiv';
   
    const anchorCard = document.createElement('a');
    anchorCard.href= card.link;
    anchorCard.textContent = card.name;
    anchorCard.className = 'anchorCard';

    const imgCard = document.createElement('img');
    imgCard.src= card.image;
    imgCard.className = 'imgCard';

    const numberCard = document.createElement('img');
    numberCard.src= card.number;
    numberCard.className = 'numberCard';

    cardDiv.append(anchorCard,imgCard,numberCard);

    projectSection.appendChild(cardDiv);

    });    

    main.append(projectTitle, projectSection);

    return main
}