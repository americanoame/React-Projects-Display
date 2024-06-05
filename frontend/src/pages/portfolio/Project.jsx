import Card from "../../components/card/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-content">
        <div className="portfolio__project-image">
          <img src={project.image} alt="" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
      </div>
      <div className="portfolio__project-cta">
        <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">
          Demo
        </a>
        <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;

