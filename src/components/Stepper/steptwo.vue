<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in this.categories"
      :key="i"
    >
      <v-expansion-panel-header class="black--text text--darken-4 headline">{{item.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <p class="mr-5">-<span>{{item.description}}</span></p>
        <div v-if="item.problems">
            <p class="black--text title">The problems you might have</p>
            <li v-for="p in item.problems" v-bind:key="p">
                -{{p}}
            </li>
        </div>
        <div v-else>
            <p class="black--text title">The cases you need help of</p>
            <li v-for="p in item.cases" v-bind:key="p">
                -{{p}}
            </li>
        </div>
        <v-btn color="primary mt-5" @click="setStep(item.code,2)">
                  Continue
        </v-btn>
      </v-expansion-panel-content>                
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
    methods: {
       
    },
    data() {
        return {
           
        }
    },
}
</script>