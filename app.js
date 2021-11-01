const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn Vue',
            courseGolasB:'Master Vue and build amazing apps',
            vueLink:'https://vuejs.org/',
            counter:5,
            name:'',
            confirmedName:'',
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
        },
        setName(event,lastName){
            this.name = event.target.value + ' ' + lastName;
        },
        // submitForm(event){
        //     //not refrseh form after submit
        //     event.preventDefault();
        // },
        submitForm(){
            alert('Submitted');
        },
        confirmInput(){
            this.confirmedName = this.name;
        }

    }
});

app.mount('#user-goal');