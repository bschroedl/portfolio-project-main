function Projects({title, description, imageLink, gitHubLink, reverse}) {
    return (
        <div className={'flex ' + (reverse ? 'flex-row-reverse ' : 'flex-row ') + 'h-[80vh] border-t-4 border-[#E0E0E0] rounded-4xl'}>
            <img src={imageLink} alt={title} className='m-auto max-w-[75vh] max-h-[60vh] rounded-2xl border-r-2 border-b-2 object-contain'/>
            <ul className='m-auto w-100'>
                <li className='text-2xl font-medium text-[#1098F7] '>{title}</li>
                <li className='ml-4 text-[#1A1A1A]'>{description}</li>
                <li className='text-[#1A1A1A]'>- Languages/Concepts</li>
                <a href={gitHubLink} target='_blank' className='text-[#1A1A1A]'><li>Link to GitHub Page</li></a>
            </ul>
        </div>
    );
}

export default Projects;