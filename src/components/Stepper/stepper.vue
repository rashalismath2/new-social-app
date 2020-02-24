<template>
  <div>
    <appbar></appbar>
    <v-container fluid>
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
                  class="mb-12"
                  color="lighten-1"
                 >
                <stepone v-on:selectstep="updateStep($event)"></stepone>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn color="primary" @click="e1 = 3">
                  Continue
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn color="primary" @click="e1 = 1">
                  Continue
                </v-btn>
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

import axios from 'axios';


export default {
  created(){
      // axios.get
     console.log(process.env.BACKEND_ADDRESS)
  },
  components: {
    appbar,
    stepone
  },
  methods: {
    updateStep(step){
      this.user.code=step[0]
      this.e1=step[1];
    }
  },
  data() {
    return {
      user:{
        code:""
      },
      e1: 1
    };
  }
};
</script>
