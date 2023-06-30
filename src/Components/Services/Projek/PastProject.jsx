import React from 'react'
import './PastProject.css'
import { projectData } from './projectData';

function PastProject() {
  return (
    <div className="PastProject">
            <div className="pp-big-title">
                Past Projects
            </div>
            <div className="pp-content-container">
                {projectData.map((project, index) => {
                    return (
                        <div className="pp-container">
                            <img src={project.image} alt="" className='pp-image' />
                            <span className="pp-title">
                                {project.title}
                            </span>
                            <span className="pp-content">
                                {project.content}
                            </span>
                            <form action={project.link}>
                                <button type="submit" className='pp-read-more'>Read More</button>
                            </form>
                        </div>
                    );
                })}
            </div>
        </div>
  )
}

export default PastProject