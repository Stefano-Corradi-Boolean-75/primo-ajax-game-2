const {createApp } = Vue;

//console.log(axios);

createApp({

  data(){
    return{
      title: 'Ajax Game',
      giocatoreA: 0,
      giocatoreB: 0,
      isLoaded: false,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/int'
    }
  },
  methods:{
    getApi(player){

      axios.get(this.apiUrl)
      .then( risultato => {
        console.log('Fine chiamata axios', risultato.data);
        this[player] = risultato.data.response
        this.isLoaded = true;
      })
      .catch( errore => {
        this.title = errore.code
        console.log(errore.code);
      })

    },
    getResult(){
      let result;
      if(this.giocatoreA > this.giocatoreB){
        result = "Vince A";
      }else if(this.giocatoreA < this.giocatoreB){
        result = "Vince B";
      }else{
        result = "PARI";
      }
      return result;
    }
      
  },
  mounted(){
    
    this.getApi('giocatoreA');
    this.getApi('giocatoreB');
  }

}).mount('#app');