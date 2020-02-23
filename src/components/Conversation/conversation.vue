<template>
  <div class="conversation-container">
    <topbar v-on:openDrawer="openDrawer($event)"></topbar>

       <v-dialog
        v-model="appointmentsDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <appointments></appointments>
      </v-dialog>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <drawerItems></drawerItems>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="secondary" text>
            <v-icon>logout</v-icon>
            <span>Logout</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <div class="main" >
      <v-layout row wrap justify-center>
          <v-flex lg3 md3 sm4 xs4>
            <div class=" conversation-item">
                <conversationItem class=""></conversationItem>
            </div>
          </v-flex>
          <v-flex lg9 md9 sm8 xs8>
            <div class="conversations">
                <conversationText class="conversations m-0 pa-5"></conversationText>
            </div>
          </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import {bus} from "../../main"

import topbar from "./Topbar";
import drawerItems from "./drawerItems";
import conversationItem from "./conversation-item";
import conversationText from "./conversation-text";
import appointments from "../drawercomponents/appointments";

export default {

    created() {
        bus.$on("openAppointments",()=>{
            this.appointmentsDialog=true
        })
        bus.$on("closeAppointmentDialog",()=>{
            this.appointmentsDialog=false
        })
    },

data() {
    return {
      drawer: false,
      appointmentsDialog:false
    };
  },
  components: {
    topbar,
    drawerItems,
    conversationItem,
    conversationText,
    appointments
  },
  methods: {
    openDrawer(value) {
      this.drawer = value;
    }
  }
};
</script>

<style>
.conversation-item {
  height: 100%;
  border-right: 1px solid #8bc34a;
}
.conversation-item:hover{
    cursor: pointer;
}

.conversation-container{
    height:  100%;
}

.conversations{
    height: 100%;
}

.main{
    height: 100%;
}

.main>div{
    height: 100%;
}

</style>
