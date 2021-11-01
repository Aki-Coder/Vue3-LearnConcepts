const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn Vue',
            courseGolasB:'Master Vue and build amazing apps',
            vueLink:'https://vuejs.org/',
            counter:0,
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGolasB;
            }
        },
        add(num){
            this.counter = this.counter + num;
        },
        remove(num){
            this.counter  = this.counter - num;
        }

    }
});

app.mount('#user-goal');