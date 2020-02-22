<template>
  <div>
    <toolbar />

    <v-container class="containers mt-2" id="first-section">
      <v-layout class="containers-layout" row wrap>
        <v-flex xs12 lg6 md6 class="pa-2">
          <h1 class="display-2 primary--text mt-5">HelpHearty,</h1>
          <p class="mt-4">
            <span class="ml-5"
              >will help you to find a professional consultant whos prepared to
              listen to you and help you.</span
            >
            <br />
            Our intention is to bring professional health advices to everyone in
            the srilanka. Professional health advices needed for everyone
            certainly in their life. We have opened a gate for you to join us
            and get advises from a registered professional consultant. We want
            help you to spend your every minute happily :)
          </p>
        </v-flex>
        <v-flex class="pa-2" xs12 lg6 md6>
          <img
            class="intro-img"
            src="https://static.vecteezy.com/system/resources/previews/000/481/077/non_2x/psychotherapy-session-retro-cartoon-vector-illustration.jpg"
            alt=""
            srcset=""
          />

          <v-flex row class="mt-5" justify-center>
            <v-btn class="secondary mx-2">Signup</v-btn>
            <v-btn class="secondary mx-2">Login</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <hr />

    <v-container class="containers" id="second-section">
        <need></need>
    </v-container>
        <hr />

    <v-container class="containers" id="third-section">
        <ourteam></ourteam>
    </v-container>
        <hr />

    <v-container class="containers" id="fourth-section">
        <ourservice></ourservice>
    </v-container>
        <hr />

    <v-container class="containers" id="fifth-section">
        <userreviews></userreviews>
    </v-container>
    <hr />
        
    <v-container class="containers" id="sixth-section">
        <faq></faq>
    </v-container>

        <compfooter></compfooter>
  </div>
</template>

<script>
import toolbar from "../Topbar";
import need from "./homepage/comp-need";
import ourteam from "./homepage/our-team";
import ourservice from "./homepage/comp-service";
import userreviews from "./homepage/comp-reviews";
import faq from "./homepage/comp-faq";
import compfooter from "./homepage/footer";
export default {
  components: {
    toolbar,
    need,
    compfooter,
    ourteam,
    ourservice,
    faq,
    userreviews
  },
 
};
</script>

<style>
.intro-img {
  width: 100%;
}
.containers {
  min-height: 90vh;
}
.containers-layout {
  height: 100%;
}
hr{
  margin: auto;
  height: 2px;
  background-color: #4caf50;
  max-width: 90%
}
</style>
