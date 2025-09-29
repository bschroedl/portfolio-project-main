import Projects from "../components/Projects.jsx";
import ConnectionsImage from "../assets/CommunicationConnections.png";
import PlayerGuessGame from "../assets/PlayerGuessGame.png";


function ProjectList() {
    // const projectList = [
    //     {id: 1, title: 'RESTful API Development', description: '' +
    //             'Created Java application to simulate an API for event tickets.' +
    //             'Developed a RESTful API using Spring Boot to handle API calls, ensuring communication between client and server.' +
    //             'Connected API to MySQL database using JDBC for manual queries.' +
    //             'Conducted testing using Postman to verify the functionality of the API endpoints.',
    //         imageLink: ConnectionsImage},
    //     {id: 2, title: 'Two', description: 'Twice the x', imageLink: PlayerGuessGame},
    //     {id: 3, title: 'Three', description: 'Triplets', imageLink: 'https://placehold.co/600x400?text=Code+Only'},
    // ]

    const projects = [
        {
            title: 'Event System',
            description: 'In this project I created to replicate a ticked system for an event. There are 4 tables in the database for Venue, Events, Attendants, and Tickets.',
            imageLink: 'https://placehold.co/600x400?text=Code+Only',
            gitHubLink: 'https://github.com/bschroedl/EventSystem',
        },
        {
            title: 'Communication Connections',
            description: 'In this project I lead a team of 4 in developing a replica of New York Times Connection game. The requirements were to create a game for learning communication concepts.',
            imageLink: ConnectionsImage,
            gitHubLink: 'https://github.com/bschroedl/Connections_V2',
        },
        {
            title: 'NFL Player Guessing Game',
            description: 'Created a game where you can either guess a players team or a players name from a team with number and position.',
            imageLink: PlayerGuessGame,
            gitHubLink: 'https://github.com/bschroedl/NFL-Player-Guessing-Game',
        },
        {
            title: 'English Capstone Project',
            description: 'Creating a password generator that uses humidity as a seed for randomness.',
            imageLink: 'https://placehold.co/600x400?text=Code+Only',
            gitHubLink: 'https://github.com/bschroedl/Capstone-Project',
        },
    ]

    return (
        <div>
            {projects.map((project, index) => (
                <Projects
                    title={project.title}
                    description={project.description}
                    imageLink={project.imageLink}
                    gitHubLink={project.gitHubLink}
                    reverse={index % 2 === 1}
                />
            ))}
        </div>
    );
}

export default ProjectList;