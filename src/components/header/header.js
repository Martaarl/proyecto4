import './header.css';

export default function createHeader() {
    const header = document.querySelector('header');

    const imgOwner = document.createElement('img');
    imgOwner.src = "/assets/MRL.png";
    imgOwner.alt = 'Marta Ramírez Linares';

    const options = document.createElement('ul');
    options.className = 'options';

    const userOptions = ['Proyectos', 'Conoce más sobre mi', 'Ponte en contacto conmigo'];
    
    const hrefs = ['#myProjects', '#aboutMe', '#contactMe'];
    
    userOptions.forEach((userOption, index)=>{

        const li = document.createElement('li');
        li.className = 'userOptions';

        const a = document.createElement('a');
        a.href = hrefs[index];
        a.textContent = userOption;

        li.appendChild(a);
        options.appendChild(li);
    });

    const linkLinkedin  = document.createElement('a');
    linkLinkedin.textContent = 'Marta Ramírez';
    linkLinkedin.href='https://www.linkedin.com/in/martaram%C3%ADrezlinares?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
    linkLinkedin.target= '_blank';

    header.append(imgOwner, options, linkLinkedin);

    return header;
    
}

/*Me queda crear una función que enlace los títulos de arriba y salte directamente a la sección que corresponde en la página*/ 