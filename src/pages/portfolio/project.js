export default function (projectData) {
    switch (projectData) {
        case '':
            return {
                title: '',
                img: '',
                alt: '',
                gitLink: '',
                liveLink: '',
                marginTop: '44px',
                description: '',
            }

            default:
                return {
                    title: '',
                    img: '',
                    gitLink: '',
                    liveLink: '',
                    marginTop: '44px',
                    description: '',
                }
        }
    }