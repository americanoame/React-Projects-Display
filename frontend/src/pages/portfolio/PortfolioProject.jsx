import Projects from './Projects';
import data from './data';
import './portfolio.css';

const PortfolioProject = () => {
  return (
    <section>
      <h2>Recent Projects</h2>
      <div>
        <Projects projects={data} />
      </div>
    </section>
  );
};

export default PortfolioProject;
