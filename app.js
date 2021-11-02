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
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
            //2.part of course
            goals:[],
            enteredGoalValue:'',
            //3.part of course
            currentUserInput:'',
            message:'Vue is great!',
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
        },
        boxSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected;
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else{
                this.boxCSelected = !this.boxCSelected;
            }
        },
        //2.part of course
        addGoal(){
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = '';
        },
        removeGoal(idx){
            //find element with this index, and remove from array
            this.goals.splice(idx,1);
        },
         //3.part of course
         saveInput(event){
             this.currentUserInput = event.target.value;
         },
         setText(){
            //  this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
         }
    },
    computed:{
        fullName(){
            if(this.name === '' || this.lastName === ''){
                return '';
            }
            return this.name + ' ' + this.lastName; 
        },
        //if we have complex code
        boxAClasses(){
            return {active: this.boxASelected};
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

    /*LIFECYCLE*/
    //in before create you won't see anything on the screen
    beforeCreate(){
        console.log('beforeCreate()');
    },
    //in created you won't see anything on the screen
    created(){
        console.log('created()');
    },
    beforeMount(){
        console.log('beforeMount()');
    },
    //vue app was mounted to the screen, it was internally, all the data was processed
    mounted(){
        console.log('mounted()');
    },
    beforeUpdate(){
        console.log('beforeUpdate()');
    },
    updated(){
        console.log('updated()');
    },
    beforeUnmount(){
        console.log('beforeUnmount()');
    },
    unmounted(){
        console.log('unmounted()');
    }
});

app.mount('#user-goal');
setTimeout(function(){
    //remove vue app
    app.unmount();
},3000);

//----
const app2 = Vue.createApp({
    //template for the second app
    //string based template
    template:`
        <p>{{favMeal}}</p>
    `,
    data(){
        return{
            favMeal:'Pizza',
        }
    }
});

app2.mount('#app2');