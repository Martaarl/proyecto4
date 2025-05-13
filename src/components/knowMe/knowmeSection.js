import './knowmeSection.css';

export default function createknowmeSection (){

    const main = document.querySelector('main');

    const knowmeSection = document.createElement('section');
    knowmeSection.className='knowmeSection';

    const divUser = document.createElement('div');
    divUser.className = 'divUser';

        const imageUser = document.createElement('img');
        imageUser.className = 'imageUser';
        imageUser.src = '/assets/user.png';
        imageUser.alt = 'Imagen de la creadora del contenido';

        const nameUser = document.createElement('p');
        nameUser.className = 'nameUser';
        nameUser.textContent= 'Marta Ramírez, Full-Stack Developer';

    divUser.append(imageUser, nameUser);

    const descriptionUser = document.createElement('p');
    descriptionUser.className = 'descriptionUser';
    descriptionUser.textContent = 'Desarrolladora full-stack, con manejo de Frontend y pronto con un asombroso dominio de Backend';

    knowmeSection.append(divUser, descriptionUser);

    main.appendChild(knowmeSection);

    return main
}