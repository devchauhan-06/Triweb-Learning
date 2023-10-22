import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItem from './WorksItem'

const Works = () => {

    const [item, setItem] = useState('all');
    const [projects, setProjects] = useState([projectsData]);
    const [active, setActive] = useState(0);


    useEffect(() => {
        if (item === 'all') {
            setProjects(projectsData)
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item;
            });

            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (index) => {
        setItem(projectsNav[index].name);
        setActive(index);
    };

    return (

        <div >
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={() => {
                            handleClick(index);
                        }} className={`${active === index ? 'active-work' : ''} work__item`} key={index} > {item.name} </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works


