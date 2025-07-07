import './contactMe.css';

export default function createContactMe (){

   const main = document.querySelector('main');
  
   const contactSection = document.createElement('section');
   contactSection.className = 'contactSection';
   contactSection.id= "contactMe";

   const contactTitle = document.createElement('h3');
   contactTitle.className = 'contact';
   contactTitle.textContent = 'Ponte en contacto conmigo';
   
   const contactFormulary = document.createElement('form');
   /*contactFormulary.id= contactFormulary;*/
   contactFormulary.className = 'contactForm';

   const name = document.createElement('label');
   name.textContent = 'Nombre';
   name.setAttribute('for', 'name');
   const nameInput = document.createElement('input')
   nameInput.id = 'name';
   nameInput.required = true;
   nameInput.name = 'nombre';

   const surname = document.createElement('label');
   surname.textContent = 'Apellidos';
   surname.setAttribute ('for', 'name');
   const surnameInput = document.createElement('input');
   surnameInput.id = 'surname';
   surnameInput.type = 'text';
   surnameInput.name = 'apellidos';

   const email = document.createElement('label');
   email.textContent = 'Correo electrónico';
   email.setAttribute('for', 'name');
   
   const inputEmail = document.createElement('input');
   inputEmail.id = 'email';
   inputEmail.type = 'email';
   inputEmail.name = 'correo';
   inputEmail.required = true;

   const message = document.createElement('label');
   message.textContent='Mensaje';
   message.setAttribute('for', 'name');
   
   const messageText = document.createElement('textarea');
   messageText.id ='message';
   messageText.name='mensaje';
   messageText.required = true;

   const submitButton = document.createElement('button');
   submitButton.textContent = '📥 Enviar';
   submitButton.type = 'submit';

   contactFormulary.append(name, nameInput, surname, surnameInput, email, inputEmail,message, messageText, submitButton);
   
   contactSection.append(contactTitle, contactFormulary);

   main.appendChild(contactSection);
   
   contactFormulary.addEventListener('submit', (e) =>{
      e.preventDefault();
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      contactForm.reset();

      alert('Su formulario ha sido enviado correctamente')
   
   });

   return contactSection
} ;

