import './header.css';

export default function createHeader() {
    const header = document.querySelector('header');

    const divOwner = document.createElement('div');
    divOwner.className = 'divOwner';

        const imgOwner = document.createElement('img');
        imgOwner.className ='imgOwner';
        imgOwner.src = "/assets/MRL.png";
        imgOwner.alt = 'Marta Ramírez Linares';

        const linkLinkedin  = document.createElement('a');
        linkLinkedin.className = 'linkLinkedin';
        linkLinkedin.textContent = 'Marta Ramírez';
        linkLinkedin.href='https://www.linkedin.com/in/martaram%C3%ADrezlinares?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
        linkLinkedin.target= '_blank';

    divOwner.append(imgOwner, linkLinkedin);

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
 
    header.append(divOwner, options);

    return header;
    
}

