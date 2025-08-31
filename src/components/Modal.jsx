import React, { useState } from 'react'

export default function Modal({ projects, index }) {

    const [selectedProject, setSelectedProject] = useState(projects[index]);

    return (
        <div>{selectedProject.title}</div>
    )
}
