function Projects({title, description, reverse}) {
    return (
        <div className={'flex ' + (reverse ? 'flex-row-reverse ' : 'flex-row ') + 'h-100 border-2'}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Projects;