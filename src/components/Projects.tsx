import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Project  from "../types/Project";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true)
        const fetchProjects = async () => {
            try{
                const response = await fetch("/data/projects.json")
                const data: Project[] = await response.json()
                setProjects(data)

                console.log(projects)
            } catch (error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <section className="projects" id="projects">
        <h2 className="title">My Projects</h2>
        <p className="description">Check Out Some of My Latest Projects</p>
        <div className="projects__cards">
            {projects.map(project => (
                <div key={project.id} className="project__card">
                    <h3 className="mini-title">{project.title}</h3>
                    <img src={project.images[0]} alt={project.title} />

                    <div className="project__details">
                        <p className="bold"><span className="highlight">Category:</span> {project.scope}</p>
                        <p>{project.description}</p>
                        <Link to={`/project/${project.id}`} className="btn-project">View Project</Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects
