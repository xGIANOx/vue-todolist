const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask : '',
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
        },
        addToList() {
            this.tasks.push({text: this.newTask, done: false});
            this.newTask = "";
          }
    }
  }).mount('#app')