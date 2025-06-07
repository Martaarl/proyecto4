import './projectSection.css'
import createProjectCard from './projectCard';

export default function createProjectsSection () {
     
    const main = document.querySelector('main');

    const projectTitle = document.createElement('h1');
    projectTitle.textContent = 'Proyectos creados por mi';
    projectTitle.className = 'projectTitle';

    const projectSection = document.createElement('section');
    projectSection.className = 'projectSection';
    projectSection.id= 'myProjects';

    const cards = [
        {name: '➡️  Proyecto 1 ⬅️', image: '/assets/proyecto1.png', number: '/assets/1.png', link: 'https://github.com/Martaarl/landinpage.git' },
        {name: '➡️  Proyecto 2 ⬅️', image: '/assets/proyecto2.png', number: '/assets/2.png', link: 'https://github.com/Martaarl/proyecto2galeriacambios.git' },
        {name: '➡️  Proyecto 3 ⬅️', image: '/assets/proyecto3.png', number: '/assets/3.png', link: 'https://github.com/Martaarl/proyecto3.git' }
    ];

    const pagination = document.createElement('div');
    pagination.className= 'buttonsPagination';

    const preButton = document.createElement('button');
    preButton.textContent = '⬅️ Anterior';

    const nextButton = document.createElement('button');
    nextButton.textContent = '➡️ Siguiente';

    pagination.append(preButton, nextButton);

    let currentPage = 0;
    const projectPage = 1;

    function paginationForProjects () {
        projectSection.innerHTML = '';

        const firstPageShow = currentPage * projectPage;
        const projectShowed = cards.slice(firstPageShow, firstPageShow + projectPage);

            projectShowed.forEach(project=>{
                const card = createProjectCard(project);
                projectSection.appendChild(card);
            });    

            preButton.disabled = currentPage === 0;
            nextButton.disabled = firstPageShow + projectPage >= cards.length;
             };
        
             preButton.addEventListener('click', () => {
                if(currentPage>0){
                    currentPage--;
                    paginationForProjects();
                }
             });

             nextButton.addEventListener('click', () => {
                if((currentPage+1) * projectPage < cards.length){
                    currentPage++;
                    paginationForProjects();
                }
             });

            paginationForProjects();

            main.append(projectTitle, projectSection, pagination);

    return main
}