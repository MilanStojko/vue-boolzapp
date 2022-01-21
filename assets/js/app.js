let app = new Vue({
  el: "#app",
  data: {
    inputMsg: "",
    inputSearch: "",
    focused: 0,
    arrowcounter: null,
    activateArrow : '',
    mode: false,
    contacts: [
      {
        name: "Morshu",
        avatar: "assets/img/_1.png",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            text: "Olio pa lampada, soga, petardi... i vuto, i sei tui vecio",
            status: "sent",
            arrowdown: false,
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo finchè te ga abbastanza schei ciò",
            status: "sent",
            arrowdown: false,
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
            arrowdown: false,
          },
          {
            date: "10/01/2020 15:50",
            text: "Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!",
            status: "sent",
            arrowdown: false,
          },
        ],
      },
      {
        name: "Luca Pocchione",
        avatar: "assets/img/cavalliere.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            text: "weweweew",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo finchè te ga abbastanza schei ciò",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
          },
          {
            date: "10/01/2020 15:50",
            text: "Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!",
            status: "sent",
          },
        ],
      },
      {
        name: "Polyfeminem",
        avatar: "assets/img/Polyfeminem.png",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            text: "Olio pa lampada, soga, petardi... i vuto, i sei tui vecio",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo finchè te ga abbastanza schei ciò",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
          },
          {
            date: "10/01/2020 15:50",
            text: "Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!",
            status: "sent",
          },
        ],
      },
      {
        name: "Elon Musk",
        avatar: "assets/img/Elon.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            text: "Olio pa lampada, soga, petardi... i vuto, i sei tui vecio",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo finchè te ga abbastanza schei ciò",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
          },
          {
            date: "10/01/2020 15:50",
            text: "Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!",
            status: "sent",
          },
        ],
      },
    ],
  },
  methods: {
    setChat(index) {
      this.focused = index;
    },
    sendMessage(focused) {
      if (this.inputMsg != "") {
        this.contacts[focused].messages.push({
          text: this.inputMsg,
          status: "received",
          arrowdown: false,
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        });
      }
      this.inputMsg = "";
      setTimeout(() => {
        this.contacts[focused].messages.push({
          text: "jamm ja",
          status: "sent",
          arrowdown: false,
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        });
      }, 1000);
    },
    searchUser() {
      this.contacts.forEach((element) => {
        element.name.toLowerCase().includes(this.forceLower())
          ? (element.visible = true)
          : (element.visible = false);
      });
    },
    forceLower() {
      return this.inputSearch.toLowerCase();
    },
    deleteMessage(index) {
      this.contacts[this.focused].messages.splice(index, 1);
    },
    scrollautomatico: function(){
      const blocco = document.querySelector('.chat')
      blocco.scrollTop = blocco.scrollHeight;
    }
  },
  updated (){
    this.scrollautomatico()
  } 
});
