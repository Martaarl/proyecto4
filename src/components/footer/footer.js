
import './footer.css'

export default function createFooter() {

    const main = document.querySelector('main');

    const footer = document.createElement('footer');
    footer.className='footer';

    const parragraphFooter = document.createElement('p');
    parragraphFooter.textContent = 'Creada por Marta Ramírez Linares';
    parragraphFooter.className = 'pFooter';

    footer.appendChild(parragraphFooter);

    main.appendChild(footer);

    return

}

/*Me queda añadir la imagen de instagram al lado del texto para enlazarla con el perfil*/ 