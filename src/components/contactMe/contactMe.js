import './contactMe.css';

export default function createContactMe (){

   const main = document.querySelector('main');
  
   const formTemplate = document.getElementById('contactFormulary');
   const formClone = formTemplate.content.cloneNode(true);

   main.appendChild(formClone);
   
   const contactForm = document.querySelector('.contactForm');

   contactForm.addEventListener('submit', (e) =>{
      e.preventDefault();
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      contactForm.append(name, surname, email, message );
   
   });

   return
} ;
