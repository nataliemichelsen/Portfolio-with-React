export default function (dataName) {
    switch (dataName) {
        case 'password':
            return {
                title: 'Random Password Generator',
                info: 'Always keep your passwords random.',
                img: './images/password',
                alt: 'Random Password',
                gitLink: 'https://github.com/nataliemichelsen/PasswordGenerator',
                liveLink: 'https://nataliemichelsen.github.io/PasswordGenerator/',
                marginTop: '44px',
            };

        case 'quiz':
            return {
                title: 'Coding Quiz',
                info: 'Do you know your SMCIV4 Quotes? Test your skills with this short quiz.',
                img: './images/quiz',
                alt: 'SMCIV4 Quiz',
                gitLink: 'https://github.com/nataliemichelsen/Coding-Quiz',
                liveLink: 'https://nataliemichelsen.github.io/Coding-Quiz/',
                marginTop: '44px',
            };

        case 'scheduler':
            return {
                title: 'Work Day Scheduler',
                info: 'Keep track of your schedule, one day at a time.',
                img: './images/scheduler',
                alt: 'Day Planner',
                gitLink: 'https://github.com/nataliemichelsen/Work-Day-Scheduler',
                liveLink: 'https://nataliemichelsen.github.io/Work-Day-Scheduler/',
                marginTop: '44px',
            };

        case 'weather':
            return {
                title: 'Weather App',
                info: 'Check the weather anywhere by ZIP Code.',
                img: './images/weather',
                alt: 'Weather API',
                gitLink: 'https://github.com/nataliemichelsen/Weather-API',
                liveLink: 'https://nataliemichelsen.github.io/Weather-API/',
                marginTop: '44px',
            };

        case 'profiles':
            return {
                title: 'Team Profile Generator',
                info: 'Create new employee profiles quickly and easily.',
                img: './images/profiles',
                alt: 'Profile Creator',
                gitLink: 'https://github.com/nataliemichelsen/Team-Profile-Generator',
                liveLink: 'https://nataliemichelsen.github.io/Team-Profile-Generator/',
                marginTop: '44px',
            };

        case 'notes':
            return {
                title: 'Note Taker',
                info: 'Keep, save, and delete personal notes with this handy app.',
                img: './images/notes',
                alt: 'Notepad',
                gitLink: 'https://github.com/nataliemichelsen/NotesTaker',
                liveLink: 'https://git.heroku.com/natalie-notes.git',
                marginTop: '44px',
            };

        case 'readme':
            return {
                title: 'README Generator',
                info: 'Create new READMEs with this organized quiz.',
                img: './images/readme',
                alt: 'README Quiz',
                gitLink: 'https://github.com/nataliemichelsen/README-Generator',
                liveLink: 'https://nataliemichelsen.github.io/README-Generator/',
                marginTop: '44px',
            };

        case 'ems':
            return {
                title: 'Employee Management System',
                info: 'Keep track of current employees plus create, delete, or edit new employees.',
                img: './images/ems',
                alt: 'Employee Database',
                gitLink: 'https://github.com/nataliemichelsen/Employee-Management-System',
                liveLink: 'https://nataliemichelsen.github.io/Employee-Management-System/',
                marginTop: '44px',
            };

        case 'handlebars':
            return {
                title: 'Node Handlebars',
                info: 'Eat burgers. Keep track of burgers already eaten. Eat more burgers.',
                img: './images/none',
                alt: 'Eat The Burger',
                gitLink: 'https://github.com/nataliemichelsen/Node-Handlebars',
                liveLink: 'https://git.heroku.com/natalie-node-handlebars.git',
                marginTop: '44px',
            };

        case 'fitness':
            return {
                title: 'Fitness Tracker',
                info: 'Keep track of past workouts and create new exercises to reach personal fitness goals.',
                img: './images/fitness',
                alt: 'Workout Creator',
                gitLink: 'https://github.com/nataliemichelsen/Fitness-Tracker',
                liveLink: 'https://git.heroku.com/natalie-fitness.git',
                marginTop: '44px',
            };

        case 'budget':
            return {
                title: 'Budget Tracker',
                info: 'A budget calendar that logs past withdraw and deposit transactions.',
                img: './images/budget',
                alt: 'Budget Tracker',
                gitLink: 'https://github.com/nataliemichelsen/Progressive-Budget',
                liveLink: 'https://git.heroku.com/natalie-budget.git',
                marginTop: '44px',
            };

        case 'users':
            return {
                title: 'User Directory',
                info: 'Search the database for users by name.',
                img: './images/none',
                alt: 'Random Users',
                gitLink: 'https://github.com/nataliemichelsen/User-Directory',
                liveLink: 'https://nataliemichelsen.github.io/User-Directory/',
                marginTop: '44px',
            };

        case 'stocks':
            return {
                title: 'Stocks 2.0',
                info: 'Keep up to date on all stocks. Save your favorites to a quick-list. Check current stock and financial news.',
                img: './images/stocks',
                alt: 'Stocks 2.0',
                gitLink: 'https://github.com/nataliemichelsen/Project-1',
                liveLink: 'https://nataliemichelsen.github.io/Project-1/',
                marginTop: '44px',
            };

        case 'stories':
            return {
                title: 'Story Lines',
                info: 'A simpler task, story, and project management app.',
                img: './images/stories',
                alt: 'Story Lines',
                gitLink: 'https://github.com/Jollyrgr83/project-2',
                liveLink: '',
                marginTop: '44px',
            };

        case 'recipes':
            return {
                title: 'ReciPique',
                info: 'Social Recipe Sharing Platform and Recipe Saver',
                img: './images/none',
                alt: 'ReciPique',
                gitLink: 'https://github.com/nataliemichelsen/Project-3-Recipe-Index',
                liveLink: 'https://recipique.herokuapp.com/',
                marginTop: '44px',
            };

        default:
            return {
                title: 'Story Lines',
                info: 'A simpler task, story, and project management app.',
                img: './images/stories',
                alt: 'Story Lines',
                gitLink: 'https://github.com/Jollyrgr83/project-2',
                liveLink: '',
                marginTop: '44px',
            };
    }
}