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

        const nameUser = document.createElement('h3');
        nameUser.className = 'nameUser';
        nameUser.textContent= 'Marta Ramírez, Full-Stack Developer';

        const skillsUser = [
                             '/public/assets/css3.png',
                            '/public/assets/github.png', 
                             '/public/assets/javascript.png', 
                             '/public/assets/node.png', 
                             '/public/assets/visualstudio.png'
                            ];
        skillsUser.className = 'skillsUser'    ;

        skillsUser.forEach(imag=>{
            const skillImage = document.createElement('img');
            skillImage.className = 'skills';
            skillImage.src= imag;
            skillImage.alt = 'Herramientas utilizadas por el usuario';
            divUser.appendChild(skillImage);
        })

    divUser.append(imageUser, nameUser );

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'descriptionDiv';

    const descriptionUser = document.createElement('p');
    descriptionUser.className = 'descriptionUser';
    descriptionUser.textContent = 'Desarrolladora full-stack, actualmente con manejo de Frontend y en pleno estudio de Backend. Hize fisioterapia y siempre me quedó la espinita clavada, hasta que finalmente hace 10 meses decidí comenzar con este proyecto';

    descriptionDiv.appendChild(descriptionUser);
    
    knowmeSection.append(divUser, descriptionDiv);

    main.appendChild(knowmeSection);

    return main
}