const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks : [
            {
                text : 'Finire esercizio',
                done : true
            },
                        {
                text : 'Leggere documentazione',
                done : false
            },
                        {
                text : 'Passeggiatina',
                done : true
            }
        ]
      }
    },
    methods : {
        remove(i){
            this.tasks.splice(i, 1)
        }
    }
  }).mount('#app')