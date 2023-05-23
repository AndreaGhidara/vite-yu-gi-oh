import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    deckCard:[],
    typeCard:["Aqua", "Beast", "Beast-Warrior", "Creator-God", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"],
    callApi1:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    callApi2:"https://db.ygoprodeck.com/api/v7/cardinfo.php?name=alien_dog",
    callApi3:"https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    callApi4:"https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Warrior",
    customApi:"https://db.ygoprodeck.com/api/v7/cardinfo.php?race=",
    valoreOptions:"",
    resultsCardNumber:"",

    callApi() {
        if (this.valoreOptions == "") {
            axios.get(this.callApi1)
            .then(response => {
                this.deckCard = response.data.data
                this.resultsCardNumber = response.data.data.length
                console.log("funziona", this.deckCard);
                // console.log(this.deckCard);
                console.log(response.data.data[0]);
            })
            .catch(error => {
                console.error(error);
            })
        } else {
            axios.get(this.customApi + this.valoreOptions)
                .then(response => {
                    console.log("funziona");
                    console.log("funziona", response.data.data.length);
                    this.deckCard = response.data.data
                    this.resultsCardNumber = response.data.data.length
                    console.log(response.data.data[0]);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    debug(){
        this.callApi();
    }
});