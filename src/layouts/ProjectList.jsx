import Projects from "../components/Projects.jsx";
import ConnectionsImage from "../assets/CommunicationConnections.png";
import PlayerGuessGame from "../assets/PlayerGuessGame.png";
import NeuralNetwork from "../assets/NerualNetwork.png";


function ProjectList() {

    const projects = [
        {
            title: 'Mathematics of a Neural Network',
            description: 'Created a feedforward neural network in python with no external libraries. ' +
                'Built activation, forward propagation, and backward propagation functions to manually update weights across epochs reducing mean squared error. ' +
                '',
            languages: 'Jupyter Notebook',
            imageLink: NeuralNetwork,
            gitHubLink: 'https://github.com/bschroedl/Mathematics-of-a-Neural-Network',
            date: 'September 2025',
        },
        {
            title: 'Event System',
            description: 'In this project I created to replicate a ticked system for an event. ' +
                'There are 4 tables in the database for Venue, Events, Attendants, and Tickets. ' +
                '',
            languages: 'Java, MySQL, Spring Boot, JDBC, Postman',
            imageLink: 'https://placehold.co/600x400?text=Code+Only',
            gitHubLink: 'https://github.com/bschroedl/EventSystem',
            date: 'February 2025',
        },
        {
            title: 'Communication Connections',
            description: 'In this project I lead a team of 4 in developing a replica of New York Times Connection game. ' +
                'The requirements were to create a game for learning communication concepts. ' +
                '',
            languages: 'HTML, CSS, JavaScript, jQuery',
            imageLink: ConnectionsImage,
            gitHubLink: 'https://github.com/bschroedl/Connections_V2',
            date: 'April 2024',
        },
        {
            title: 'NFL Player Guessing Game',
            description: 'Developed a game where you can guess a NFL players team from their name and number, or guess a NFL players name from their team and number. ' +
                'To get NFL player and team information I used an API from RapidAPI. ' +
                '',
            languages: 'HTML, CSS, JavaScript',
            imageLink: PlayerGuessGame,
            gitHubLink: 'https://github.com/bschroedl/NFL-Player-Guessing-Game',
            date: 'October 2023',
        },
        {
            title: 'English Capstone Project',
            description: 'Created a password generator that uses humidity as a seed for randomness. ' +
                'While this seed could be found, I tried to get some random data that was naturally generated. ' +
                '',
            languages: 'Python',
            imageLink: 'https://placehold.co/600x400?text=Code+Only',
            gitHubLink: 'https://github.com/bschroedl/Capstone-Project',
            date: 'April 2023',
        },
    ]

    return (
        <div>
            {projects.map((project, index) => (
                <Projects
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageLink={project.imageLink}
                    gitHubLink={project.gitHubLink}
                    languages={project.languages}
                    date={project.date}
                    reverse={index % 2 === 1}
                />
            ))}
        </div>
    );
}

export default ProjectList;