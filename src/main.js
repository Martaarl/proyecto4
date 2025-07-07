import './style.css'
import createHeader from './components/header/header';
import paginationForProjects from './components/projectsSection/projectSection'
import createProjectsSection from './components/projectsSection/projectSection';
import createknowmeSection from './components/knowMe/knowmeSection';
import createContactMe from './components/contactMe/contactMe';
import createFooter from './components/footer/footer';

createHeader();
createknowmeSection();
createProjectsSection();
/*paginationForProjects();*/
createContactMe();
createFooter();