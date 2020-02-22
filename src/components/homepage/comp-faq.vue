<template>
  <v-layout class="containers-layout" row wrap>
    <v-flex xs12 lg12 md12 class="pa-2" justify-center>
      <h1 class="display-2 primary--text text-center">
        Faq,
      </h1>
    </v-flex>

    <v-flex class="mt-5" xs12  lg12 md12>
        <v-expansion-panels popout>
        <v-expansion-panel
            v-for="(question,i) in questions"
            :key="i"
        >
            <v-expansion-panel-header>{{question.header}}</v-expansion-panel-header>
            <v-expansion-panel-content>
                {{question.question}}
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>

    </v-flex>

  </v-layout>
</template>

<script>
export default {
   data() {
    return {
        questions:[
            {
                header:"Question 1",
                question:"the answer 1"
            },
            {
                header:"Question 2",
                question:"the answer 2"
            },
            {
                header:"Question 3",
                question:"the answer 3"
            },
            {
                header:"Question 4",
                question:"the answer 4"
            },
        ]
    }
  }
};
</script>

<style>

</style>
