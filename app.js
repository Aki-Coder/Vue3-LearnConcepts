const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn Vue',
            courseGolasB:'Master Vue and build amazing apps',
            vueLink:'https://vuejs.org/',
            counter:5,
            name:'',
            confirmedName:'',
            //fullname:'',
            lastName:'',
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
    },
    computed:{
        fullName(){
            if(this.name === '' || this.lastName === ''){
                return '';
            }
            return this.name + ' ' + this.lastName; 
        },
    },
    /*you can now use a name you used in a data or computed property
    as a name for a warcher method*/
    watch:{
        // name(value){
        //     if(value === ''){
        //         this.fullname = ' ';
        //     }else{
        //         this.fullname = value + ' ' + this.lastName;
        //     }
        // },
        // lastName(value){
        //     if(value === ''){
        //         return this.fullname = '';
        //     }else{
        //         this.fullname = this.name + ' ' + value
        //     }
        // },
        counter(value){
            if(value > 50){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                },2000);
            }
        },
    },
});

app.mount('#user-goal');