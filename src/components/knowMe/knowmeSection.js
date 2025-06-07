import './knowmeSection.css';

export default function createknowmeSection (){

    const main = document.querySelector('main');

    const knowmeSection = document.createElement('section');
    knowmeSection.className='knowmeSection';
    knowmeSection.id='aboutMe'; 

    const divUser = document.createElement('div');
    divUser.className = 'divUser';

        const imageUser = document.createElement('img');
        imageUser.className = 'imageUser';
        imageUser.src = '/assets/user.png';
        imageUser.alt = 'Imagen de la creadora del contenido';

        const nameUser = document.createElement('h3');
        nameUser.className = 'nameUser';
        nameUser.textContent= 'Marta Ramírez /// Full-Stack Developer';

    divUser.append(imageUser, nameUser);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'descriptionDiv';

        const descriptionUser = document.createElement('p');
        descriptionUser.className = 'descriptionUser';
        descriptionUser.textContent = '"Desarrolladora full-stack, actualmente con manejo de Frontend y en pleno estudio de Backend. Hize fisioterapia y siempre me quedó la espinita clavada, hasta que finalmente hace 10 meses decidí comenzar con este proyecto. Abajo encontrarás algunas de mis habilidades, pero no dudes en visitar mi cuenta de GitHub para ver mis proyectos."';

        const descriptionSkills = document.createElement('div');
        descriptionSkills.className = 'descriptionSkills';

        const skillsUser = [
            '/public/assets/html.png',
            '/public/assets/css3.png',
            '/public/assets/javascript.png', 
            '/public/assets/node.png', 
            '/public/assets/vite.svg',
            '/public/assets/github.png', 
            '/public/assets/visualstudio.png'
                ];
    
        skillsUser.forEach(imag=>{
            const skillImage = document.createElement('img');
            skillImage.className = 'skills';
            skillImage.src= imag;
            skillImage.alt = 'Herramientas utilizadas por el usuario';
        
        descriptionSkills.appendChild(skillImage);
        })

    descriptionDiv.append(descriptionUser, descriptionSkills);
    
    knowmeSection.append(divUser, descriptionDiv);

    console.log(descriptionDiv);

    main.appendChild(knowmeSection);

    return main
}