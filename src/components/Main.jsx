import Search from "./Search.jsx";


function Main() {
    return (
        <div className='lg:mt-36 lg:mb-48 lg:w-3/4 mt-18 mb-24 mx-auto'>
            <h1 className='text-center md:text-8xl sm:text-6xl text-4xl text-[#1098F7]'>Brian's Portfolio</h1>
            <p className='mt-2 w-5/6 mx-auto'>
                Welcome! This portfolio highlights some of the projects I've worked on as a developer.
                Some of the technologies I've used include Python, Java, HTML, CSS, JavaScript, MySQL, React, Tailwind CSS, and more.
                Through both school and personal projects, I've learned new languages and improve my skills.
            </p>
            {/*<Search />*/}
        </div>
    );
}

export default Main;