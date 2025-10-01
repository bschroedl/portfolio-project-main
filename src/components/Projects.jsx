function Projects({title, description, imageLink, gitHubLink, languages, date, reverse}) {
    return (
        <div className={(reverse ? 'md:flex md:flex-row-reverse ' : 'md:flex md:flex-row ') + ' md:h-[80vh] md:mt-0 mt-16 border-t-4 md:pt-0 pt-10 border-[#9E9E9E] md:rounded-4xl rounded-2xl'}>
            <img src={imageLink} alt={title} className='m-auto md:max-w-[75vh]  md:max-h-[60vh] w-[90%] md:w-auto rounded-2xl border-r-2 border-b-2 object-contain'/>
            <ul className='m-auto md:w-100 w-5/6 md:mt-auto mt-4'>
                <li className='text-2xl font-medium text-[#1098F7] '>{title}</li>
                <li>{date}</li>
                <li className='ml-4 text-[#1A1A1A]'>{description}</li>
                <li className='text-[#1A1A1A]'>- {languages}</li>
                <a href={gitHubLink} target='_blank' className='text-[#1A1A1A]'><li><b>GitHub Page</b></li></a>
            </ul>
        </div>
    );
}

export default Projects;