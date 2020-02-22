<template>
  <v-layout class="containers-layout" row wrap>
    <v-flex xs12 lg12 md12 class="pa-2" justify-center>
      <h1 class="display-2 primary--text text-center">
        Our service,
      </h1>
    </v-flex>
    <v-flex xs12 lg6 md6 class="pa-2 order-2">
      <p class="mt-4">
        <span class="ml-10">
          Our platform is built anyone to find a consultant easily and interact
          with them 24*7 using text or video conversations.
          <br />
          <span class="font-weight-bold">
            We are bound to protect your anonymissy and the conversations on the
            internet. All you have to do is signup and answer to some simple
            questions and you can get started with a consultant you like whose
            specialized and prepared to help with the problem you have.
          </span>
        </span>
      </p>

      <p class="secondary--text display-1 text-center">How do i get started?</p>

      <v-row class="mt-5" justify="space-around">
        <v-flex class="pa-4" >
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1"
                  >Signup</v-list-item-title
                >
                <v-list-item-subtitle>
                  Use your email to create an account
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-avatar color="info" size="36">
                <span class="white--text headline">1</span>
              </v-avatar>
            </v-list-item>
            <v-card-actions >
              <v-btn class="primary" text>Signup</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex class="pa-4" >
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1"
                  >Let us understand your problem</v-list-item-title
                >
                <v-list-item-subtitle>
                  <p class="pa-2">
                     You will be asked to answer some questions. These questions
                  will describe your problem so that we can direct you to a consultant
                  whos specialized in that area
                  </p>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-avatar color="info" size="36">
                <span class="white--text headline">2</span>
              </v-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex class="pa-4" >
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1"
                  >Get started</v-list-item-title
                >
                <v-list-item-subtitle>
                  You can start start conversation by requesting to a consultant.
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-avatar color="info" size="36">
                <span class="white--text headline">3</span>
              </v-avatar>
            </v-list-item>
          </v-card>
        </v-flex>

        
      </v-row>
    </v-flex>

    <v-flex xs12 lg6 md6 class="pa-2">
      <img
        class="mt-4"
        id="img-video-conversation"
        src="https://areyouawellbeing.texashealth.org/wp-content/uploads/2016/12/trust-online-doctor.jpg"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#img-video-conversation {
  height: auto;
  width: 100%;
}
</style>
