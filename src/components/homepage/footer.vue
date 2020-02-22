<template>
  <v-footer color="secondary " padless>
    <v-row justify="center" no-gutters>
      <v-layout
        class="pa-5"
        row
        wrap
        justify-center
        align-content-center
        fill-height
      >
        <v-flex class="" lg2>
          <v-icon>phone</v-icon>
          <span>+011112545</span>
        </v-flex>
        <v-flex lg2>
          <v-icon>email</v-icon>
          <span>helpheart@gmail.com</span>
        </v-flex>
        <v-flex lg2>
          <v-icon>location_city</v-icon>
            <span>
                Toronto Office:1055 Canadian Place, Suite #112,
                Toronto, ON, L4W 0C2
            </span>
        </v-flex>
      </v-layout>

      <v-col class="secondary darken-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
