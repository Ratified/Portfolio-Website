import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectInterface from "../types/Project";

import "../css/project.css"

const Project = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<ProjectInterface | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                if(id !== undefined) {
                    const response = await fetch('/data/projects.json'); 
                    const data: ProjectInterface[] = await response.json();
    
                    // Find the project by id
                    const selectedProject = data.find(proj => proj.id === parseInt(id, 10));
                    if (selectedProject) {
                        setProject(selectedProject);
                    } else {
                        console.error("Project not found");
                    }
                } else {
                    console.error("Project id not provided");
                }
            } catch (error) {
                console.error("Failed to fetch project", error);
            }
        };

        fetchProject();
    }, [id]);

    return (
        <>
            <h1 className="title">{project?.title}</h1>

            <div className="project">          
                {project ? (
                    <>
                        <div className="project-images-grid">
                            {project.images.map((image, index) => (
                                <img key={index} src={image} alt={project.title} className={`project-image img-${index + 1}`} />
                            ))}
                        </div>
                        <div className="project-details">
                            {/* <h3>{project.title}</h3> */}
                            <p>{project.description}</p>
                            <h2>Key Features:</h2>
                            <ul>
                                {project.keyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <h2>Technologies Used:</h2>
                            <ul>
                                {project.technologiesUsed.map((technology, index) => (
                                    <li key={index}>{technology}</li>
                                ))}
                            </ul>
                            <a href={project.url} className="">View Project</a>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </>
    );
};

export default Project;