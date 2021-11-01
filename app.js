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
        setName(event){
            this.name = event.target.value;
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
        },
        resetInput(){
            this.name = '';
        },
        outputFullname(){
            if(this.name === ''){
                return '';
            }
            return this.name + ' ' + 'Simic'; 
        }

    }
});

app.mount('#user-goal');