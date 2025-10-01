function Projects({title, description, imageLink, gitHubLink, languages, date, reverse}) {
    return (
        <div className={(reverse ? 'xl:flex xl:flex-row-reverse ' : 'xl:flex xl:flex-row ') + ' xl:h-[80vh] xl:mt-0 mt-16 border-t-4 xl:pt-0 pt-10 border-[#9E9E9E] md:rounded-4xl rounded-2xl'}>
            <img src={imageLink} alt={title} className='m-auto xl:max-w-[75vh]  xl:max-h-[60vh] lg:w-[75%] md:w-[80%] w-[90%] xl:w-auto rounded-2xl border-r-2 border-b-2 object-contain'/>
            <ul className='m-auto xl:w-100 w-5/6 xl:mt-auto mt-4'>
                <li className='text-2xl lg:text-3xl font-medium text-[#1098F7] '>{title}</li>
                <li>{date}</li>
                <li className='ml-4 text-[#1A1A1A]'>{description}</li>
                <li className='text-[#1A1A1A]'>- {languages}</li>
                <a href={gitHubLink} target='_blank' className='text-[#1A1A1A]'><li><b>GitHub Page</b></li></a>
            </ul>
        </div>
    );
}

export default Projects;