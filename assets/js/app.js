let app = new Vue({
  el: "#app",
  data: {
    inputMsg: "",
    inputSearch: "",
    focused: 0,
    arrowcounter: null,
    activateArrow: "",
    inputStatus : true,
    mode: false,
    randomImg: [
      "assets/img/amogus.jpg",
      "assets/img/Salvini.jpg",
      "assets/img/_2.jpg",
      "assets/img/_3.jpg",
      "assets/img/_4.jpg",
      "assets/img/tenor.gif",
      "assets/img/pog.jpg",
      "assets/img/_5.jpg",
    ],
    randomAnsw: [
      "we wagliù",
      "jamm ja",
      "ciao",
      "come va",
      "stamm forte",
      "attendi il mio arrivo alla prima luce del quinto giorno, all'alba guarda a est",
      "ricorderete questo giorno, come il giorno in cui avete quasi catturato capitan Jack Sparrow",
      "metterti le penne nel culo non fa di te una gallina",
      "credi sia aria quella che stai respirando",
      "E ora, Ezio, usciamo nella notte e seguiamo la fugace tentatrice, l'avventura",
      "cosa te lo dico a fare",
      "che la forza sia con te",
      "Uno che faceva un censimento una volta tentò di interrogarmi. Mi mangiai il suo fegato con un bel piatto di fave ed un buon Chiant",
      "heeeer's Jhonny",
      "Mi piace l'odore del Napalm la mattina",
    ],
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
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo finchè te ga abbastanza schei ciò",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Me spiase Ezio, ma non posso farta credito, torna catarme quando te sia un fia più hmmm... ricco!!",
            status: "sent",
            arrowdown: false,
            img: "",
          },
        ],
      },
      {
        name: "Il Cavalliere",
        avatar: "assets/img/cavalliere.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            text: "Secondo te Ezio, dovrei candidarmi?",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Dai rispondi",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Allora mi consenta",
            status: "sent",
            arrowdown: false,
            img: "",
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
            text: "U gasolio, e corde, bomb ammano, e vo? sono ghe tue fratm",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Ma solo si tieni abbastanza rupie",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Mi scusa Ezio, ma non te pozz fa a credito, torna quando si nu poc più hmm...ricc",
            status: "sent",
            arrowdown: false,
            img: "",
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
            text: "Lampo oil, bomb, ropes, you want them? it's yours my friend",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "As long as you have enough Roubies",
            status: "sent",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 16:15",
            text: "):",
            status: "received",
            arrowdown: false,
            img: "",
          },
          {
            date: "10/01/2020 15:50",
            text: "Sorry Ezio, i can't giff credit, come back when you are litte more hmmm... richer!!",
            status: "sent",
            arrowdown: false,
            img: "",
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
          date: dayjs().format("DD/MM/YYYY HH:mm"),
        });
      }
      this.inputMsg = "";
      setTimeout(() => {  
        let num = Math.floor(Math.random()*2 + 1)
        if(num == 1){
          this.textAnsw(focused)
        }else{
          this.imgAnsw(focused)
        }
        console.log(num)
      }, 1000);
      setTimeout(()=>{
        this.scrollautomatico()
      }, 0)
    },
    textAnsw(focused){
      this.contacts[focused].messages.push({
        text: this.randomAnsw[Math.floor(Math.random() * this.randomAnsw.length)],
        status: "sent",
        arrowdown: false,
        date: dayjs().format("DD/MM/YYYY HH:mm"),
      });
      setTimeout(()=>{
        this.scrollautomatico()
      }, 0)
    },
    imgAnsw(focused){
      this.contacts[focused].messages.push({
        img: this.randomImg[Math.floor(Math.random() * this.randomImg.length)],
        status: "sent",
        arrowdown: false,
        date: dayjs().format("DD/MM/YYYY HH:mm"),
      });
      setTimeout(()=>{
        this.scrollautomatico()
      }, 0)
    },
      checkInput(){
        if(this.inputMsg.trim() == ''){
          this.inputMsg = '';
          this.inputStatus = true;
        } else{
          this.inputStatus = false;
        }
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
    scrollautomatico: function () {
      const blocco = document.querySelector(".chat");
      blocco.scrollTop = blocco.scrollHeight;
    },
  }
});
