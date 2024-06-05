import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
const [projects, setProjects] = useState(data);

const categories = data.map(item => item.category)
const uniqueCategories = ['all', ...new Set(categories)];
console.log(uniqueCategories);

const filterProjectstHandler = (category) => {
  if(category === 'all') {
    setProjects(data)
    return;
  }
  const filterProjects = data.filter(project => project.category === category);
  setProjects(filterProjects);
}

  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <div className='container portfolio__container'>
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectstHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio;
