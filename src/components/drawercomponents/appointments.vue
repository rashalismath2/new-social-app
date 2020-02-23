<template>
  <v-card tile>
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="CloseAppointmentDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Appointments</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text v-on:click="newappointmentdialog=true">
          New
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in appointments" :key="i">
          <v-expansion-panel-header disable-icon-rotate>
            {{ item.date }}
            <template v-if="item.status == 'close'" v-slot:actions>
              <v-icon color="primary">done</v-icon>
            </template>

            <template v-else v-slot:actions>
              <v-icon color="error" v-on:click="RemoveSelectedAppointment(item)"
                >close</v-icon
              >
            </template>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
                {{item.note}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <div style="flex: 1 1 auto;"></div>

    <v-dialog v-model="removeAppointment" max-width="290">
      <deleteAppointmentDialog></deleteAppointmentDialog>
    </v-dialog>

    <v-dialog v-model="newappointmentdialog" persistent max-width="450px">
        <newappointmentdialogcomponent v-on:savetheAppointment="saveTheDate($event)"></newappointmentdialogcomponent>
    </v-dialog>
  </v-card>
</template>

<script>
import { bus } from "../../main";

import deleteAppointmentDialog from "./deleteappointmentdialog";
import newappointmentdialogcomponent from "./calenderdialog";

export default {
created() {
    bus.$on("cancelDeleteAppointmentDialog",()=>{
        this.removeAppointment=false
    }),
    bus.$on("closenewappointmentdialog",()=>{
        this.newappointmentdialog=false
    })

},
mounted(){
        bus.$on("removeTheAppointment",()=>{
        this.removeAppointment=false
        var i=0;
        for(const item of this.appointments){
            i++;
          if(item.date==this.selectedAppointmentToDelete.date){
              this.appointments.splice(i,1)
              break;
          }
        }
        this.selectedAppointmentToDelete={}
    })
},
  components: {
    deleteAppointmentDialog,
    newappointmentdialogcomponent
  },
  methods: {
    CloseAppointmentDialog() {
      bus.$emit("closeAppointmentDialog");
    },
    RemoveSelectedAppointment(item) {
        this.removeAppointment=true;
        this.selectedAppointmentToDelete=item;
    },
    saveTheDate(data){
        console.error(data)
        this.appointments.push(data)
    }
  },
  data() {
    return {
        newappointmentdialog:false,
      removeAppointment: false,
      selectedAppointmentToDelete:{},
      appointments: [
        {
          date: new Date().toString(),
          status: "close",
          note:"Hello world"
        },
        {
          date: new Date().toString(),
          status: "open",
            note:"Hello world"
        }
      ]
    };
  }
};
</script>
