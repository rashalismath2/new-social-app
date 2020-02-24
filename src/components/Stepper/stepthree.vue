<template>
  <v-container>
    <v-layout row wrap >

        <v-flex  class="ma-5" v-for="(item, i)  in consultants" v-bind:key="i" lg4 md4 sm12 xs12>
          <v-card  :ripple="true" v-on:click="selected(item)" class="" >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.first_name"
                ></v-card-title>

                <v-card-subtitle v-text="item.education"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="url"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-flex>
  
    </v-layout>
    <v-btn class="btn-next" color="primary">
      Skip
    </v-btn>
  </v-container>
</template>

<script>
export default {
    props: {
        consultants: {
        type: Array
        }
  },
  data() {
      return {
          url:"https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      }
  },
  methods: {
      selected(cons){
          this.$emit("selectedconsultant",cons)
      }
  },

};
</script>


<style >
    .btn-next{
        float: right;
    }

</style>