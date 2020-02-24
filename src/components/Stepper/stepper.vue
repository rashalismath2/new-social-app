<template>
  <div>
    <appbar></appbar>
    <v-container fluid>

      <!-- opend end of the stepper -->
       <v-overlay
          :absolute="true"
          :value="overlay"
        >
         <v-progress-circular
        :size="50"
        color="primary"
        indeterminate></v-progress-circular>
       </v-overlay>


      <v-layout row wrap justify-center>
        <v-flex lg12 md12 sm12 xs12 12>
          <v-stepper  v-model="e1">
            <v-stepper-header>
              <v-stepper-step :editable="true" :complete="e1 > 1" step="1"
                >Select one of these category</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2"
                >Answer to these questions</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step step="3">Choose a consultant</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                flat
                  class="mb-12"
                  color="lighten-1"
                 >
                <stepone v-on:selectstep="updateStep($event)"></stepone>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                flat
                  class="mb-12"
                  color="lighten-1"
                >
                <steptwo v-on:setStep="updateStep($event)" v-bind:questions="questions"></steptwo>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  flat
                  class="mb-12"
                  color="lighten-1"
                >
                  <stepthree v-on:selectedconsultant="setSelectedCons($event)" v-bind:consultants="consultants"></stepthree>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import appbar from "./Topbar";
import stepone from "./stepone";
import steptwo from "./steptwo";
import stepthree from "./stepthree";

import axios from 'axios';


export default {
  created(){

  },
  components: {
    appbar,
    stepone,
    steptwo,
    stepthree
  },
  methods: {
    setSelectedCons(cons){
        this.seletedCons=cons
        this.overlay=true;


      var header= {
            headers:{"authorization": this.$store.getters.getUser.api_token,
               'Content-Type': 'application/json'
            },
            
      }

      axios.patch(process.env.BACKEND_ADDRESS+"user/"+this.$store.getters.getUser.id,{
          first_name: this.$store.getters.getUser.first_name,
          last_name: this.$store.getters.getUser.last_name,
          email: this.$store.getters.getUser.email,
          profilepic_id: this.$store.getters.getUser.profilepic_id,
          tbl_consultants_id: this.seletedCons.id,
          code: this.user.code,

      },header)
      .then(res=>{
        this.overlay=false
        this.$router.push("/conversation")
      })
      .catch(err=>{
        console.log(err)
      })



    },
    updateStep(step){
      if(step[1]==3){
        this.answers=step[0]
        this.e1=step[1];
      }
      else{
        
         this.user.code=step[0]
        this.e1=step[1];

        var header= {
            headers:{"authorization": this.$store.getters.getUser.api_token}
        }
        axios.get(process.env.BACKEND_ADDRESS+"questions/?code="+this.user.code,header)
        .then(res=>{
          this.questions=res.data.questions
        })
      .catch(e=>{
            console.log(e)
          })

      //getall the consultants
        axios.get(process.env.BACKEND_ADDRESS+"consultants/?category="+this.user.code+"&language="+this.$store.getters.getUser.selected_language,header)
        .then(res=>{
          this.consultants=res.data.data
        })
        .catch(e=>{
          console.log(e)
        })
   
      }
    }
  },
  data() {
    return {
      overlay:false,
      seletedCons:{},
      consultants:[],
      user:{
        code:""
      },
      answers:[],
      questions:[],
      e1: 1
    };
  }
};
</script>
