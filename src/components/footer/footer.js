
import './footer.css'

export default function createFooter() {

    const main = document.querySelector('main');

    const footer = document.createElement('footer');
    footer.className='footer';

    const parragraphFooter = document.createElement('p');
    parragraphFooter.textContent = 'Creada por Marta Ramírez Linares';
    parragraphFooter.className = 'pFooter';

    const iconAnchor = document.createElement('a');
    iconAnchor.href= 'https://www.instagram.com/martaarl?igsh=ZG5yeGRrbms5a2Fk&utm_source=qr';

         const icon = document.createElement('img');
         icon.className = 'iconInsta'
         icon.src= '/public/assets/instaicon.png';
         icon.alt= 'Símbolo de Instagram ,red social';

         iconAnchor.appendChild(icon);
    
    footer.append(parragraphFooter, iconAnchor);

    main.appendChild(footer);

    return

}

/*Me queda añadir la imagen de instagram al lado del texto para enlazarla con el perfil*/ 