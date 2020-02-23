<template>
  <v-row justify="center">

      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New appointment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <calender v-on:pickedDate="updateDate($event)"></calender>
            <v-textarea
              v-on:keydown.enter.prevent="sendMessage"
                class="text-area"
                label="Note"
                outlined
                v-model="note"
                rows="1"    
            hide-details
        ></v-textarea>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closecalenderdialog">Close</v-btn>
          <v-btn color="blue darken-1" text @click="savetheDate">Save</v-btn>
        </v-card-actions>
      </v-card>
  </v-row>
</template>

<script>

import { bus } from "../../main";
import calender from "./calender"

export default {
    methods: {
        closecalenderdialog(){
            bus.$emit("closenewappointmentdialog")
        },
        savetheDate(){
            var pickeddate={
                date:this.pickedDate,
                note:this.note,
                status:"open"
            }
            this.$emit("savetheAppointment",pickeddate)
            bus.$emit("closenewappointmentdialog")
            this.pickedDate=""
            this.note=""
        },
        updateDate(data){
            if(data!=null){
                this.pickedDate=data;
            }
        }
    },
    data() {
        return {
            note:"",
            pickedDate:""
        }
    },
    components:{
        calender
    }
}
</script>