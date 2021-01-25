export default {
    props: {
        personalInfo: {
                avatar: 'https://images.unsplash.com/photo-1512070998831-e0895469d853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1227&q=80',
                firstName: 'Minh',
                middleName: '',
                lastName: 'Tran',
                title: 'Web Developer',
                address: '123 street ',
                phone: '555-555-5555',
                email: 'test@tester.com',
                web: {
                    personal: 'www.minhtality.com',
                    linkedIn: '',
                    github: ''
                } 
            },
            experience: [
                {
                    jobTitle: '',
                    position: '',
                    description: '',
                    bulletPoints: [
                        "Fix buggos",
                        "Fix buggos",
                        "Fix buggos"
                    ]
                },
                {
                    jobTitle: '',
                    position: '',
                    description: '',
                    bulletPoints: [
                        "Fix buggos",
                        "Fix buggos",
                        "Fix buggos"
                    ]
                }
            ],
            education: [
                {
                    major: '',
                    university: '',
                    location: '',
                    duration: '',
                },
                {
                    major: '',
                    university: '',
                    location: '',
                    duration: '',
                }
            ],
            skills: {
                professional: [
                    'Adobe',
                    'React',
                    'Javascript'
                ],
                technical: [
                    'Adobe',
                    'React',
                    'Javascript'
                ]
            },
            reference: [
                {
                    name: 'John Doe',
                    company: 'Testing',
                    phone: '444-444-4444',
                    email: '123@test.com'
                },
                {
                    name: 'John Doe2',
                    company: 'Testing2',
                    phone: '444-444-4442',
                    email: '122@test.com'
                },
            ]
        }
    };