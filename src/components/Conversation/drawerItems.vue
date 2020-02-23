<template>
          <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          v-on:click="action(item.title)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

</template>


<script>

import {bus} from "../../main"

export default {
    methods: {
        action(act){
            if(act=="Appointments"){
                bus.$emit("openAppointments")
            }
        }
    },
    data() {
        return {
            items:[
                {
                    title:"Appointments",
                    icon:"home"
                },
                {
                    title:"item 2",
                    icon:"home"
                },
                {
                    title:"item 3",
                    icon:"home"
                },
                {
                    title:"item 4",
                    icon:"home"
                },
            ]
        }
    },
}
</script>