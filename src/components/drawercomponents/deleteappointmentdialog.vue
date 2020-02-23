<template>
      <v-card>
        <v-card-title class="headline">Do you really want to cancel the appointment?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="removeTheAppointment"
          >
            Yes
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="cancelDeleteAppointmentDialog"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>

</template>

<script>
import { bus } from "../../main";
export default {
    methods: {
        cancelDeleteAppointmentDialog(){
            bus.$emit("cancelDeleteAppointmentDialog")
        },
        removeTheAppointment(){
            bus.$emit("removeTheAppointment")
        }
    },
}
</script>