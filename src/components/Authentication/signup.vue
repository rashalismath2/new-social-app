<template>
  <div>
    <topbar></topbar>
    <v-container class="containers mt-2">
      <v-layout row wrap justify-center>
        <v-flex lg6 md6 sm12 xm12>
          <v-card class="mx-auto" max-width="444" outlined>
            <h1 class="secondary--text text-center pa-5">
              <span>H</span>elpHearty
            </h1>
            <form class="pa-5">
              <v-text-field
                v-model="firstName"
                :error-messages="firstNameErrors"
                label="First Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                :error-messages="lastNameErrors"
                label="Last Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required,passwordRules.min]"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                counter
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <v-btn class="secondary mr-4  " @click="submit">Login</v-btn>
            </form>
          </v-card>
          <div class="mx-auto ma-5"  >
              <p class=" pa-0 text-center">Login from here? <a href="/login" class="text-signup blue--text">Login</a></p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import topbar from "./Topbar";

export default {
    watch: {
        password(){
            if(this.password.length<8){
                this.passwordRules.min="Make sure your password is 8 char long"
            }
            else{
                this.passwordRules.min=true;
            }
        }
    },
  data() {
    return {
      passwordRules: {
        required: true,
        min:true
      },

      show1: false,
      password: "",
      email: "",
      emailErrors: "",
      firstName: "",
      lastName: "",
      firstNameErrors: "",
      lastNameErrors: "",
    };
  },
  components: {
    topbar
  },
  methods: {
    submit() {}
  }
};
</script>

<style>
.text-signup{
    text-decoration: underline;
    cursor: pointer;
}

</style>
