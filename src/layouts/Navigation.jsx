function Navigation() {
    return (
        <>
            <nav className="fixed w-1/2 left-1/2 transform -translate-x-1/2
            top-8 p-96">
                <ul className="flex flex-row justify-between">
                    <a href="#" className="bg-[#E0E0E0] rounded-full hover:bg-amber-200">Home</a>
                    <a href="#" className="bg-[#E0E0E0] rounded-full">About Me</a>
                    <a href="#" className="bg-[#E0E0E0] rounded-full">Projects</a>
                    <a href="#" className="bg-[#E0E0E0] rounded-full">Contact</a>
                    <a href="#" className="bg-[#E0E0E0] rounded-full">GitHub</a>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;