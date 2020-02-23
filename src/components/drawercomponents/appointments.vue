<template>
  <v-card tile>
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="CloseAppointmentDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Appointments</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <div style="flex: 1 1 auto;"></div>
    <v-dialog v-model="removeAppointment" max-width="290">
      <deleteAppointmentDialog></deleteAppointmentDialog>
    </v-dialog>
  </v-card>
</template>

<script>
import { bus } from "../../main";

import deleteAppointmentDialog from "./deleteappointmentdialog";

export default {
created() {
    bus.$on("cancelDeleteAppointmentDialog",()=>{
        this.removeAppointment=false
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
    deleteAppointmentDialog
  },
  methods: {
    CloseAppointmentDialog() {
      bus.$emit("closeAppointmentDialog");
    },
    RemoveSelectedAppointment(item) {
        this.removeAppointment=true;
        this.selectedAppointmentToDelete=item;
    }
  },
  data() {
    return {
      removeAppointment: false,
      selectedAppointmentToDelete:{},
      appointments: [
        {
          date: new Date().toString(),
          status: "close"
        },
        {
          date: new Date().toString(),
          status: "open"
        }
      ]
    };
  }
};
</script>
