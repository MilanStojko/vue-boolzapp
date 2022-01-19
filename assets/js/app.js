let app = new Vue ({
    el : '#app',
    data : {
        focused: 0,
        contacts: [
            {
                name: 'Morshu',
                avatar: 'assets/img/_1.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Olio pa lampada, soga, petardi... i vuto, i sei tui vecio',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ma solo finchè te ga abbastanza schei ciò',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '):',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Luca Pocchione',
                avatar: 'assets/img/cavalliere.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'weweweew',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ma solo finchè te ga abbastanza schei ciò',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '):',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Polyfeminem',
                avatar: 'assets/img/Polyfeminem.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Olio pa lampada, soga, petardi... i vuto, i sei tui vecio',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ma solo finchè te ga abbastanza schei ciò',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '):',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Elon Musk',
                avatar: 'assets/img/Elon.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Olio pa lampada, soga, petardi... i vuto, i sei tui vecio',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ma solo finchè te ga abbastanza schei ciò',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '):',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!',
                        status: 'sent'
                    },
                ],
            },
        ],
    },
    methods : {
        setChat: function(index){
            this.focused = index;
        },

    }
})