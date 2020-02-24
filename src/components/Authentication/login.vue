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
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <v-btn class="secondary mr-4  " @click="submit">Login</v-btn>
            </form>
          </v-card>
          <div class="mx-auto ma-5"  >
              <p class=" pa-0 text-center">New to here? <a href="/signup" class="text-signup blue--text">Sign Up</a></p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import topbar from "./Topbar";
import Axios from "axios"

export default {
  created(){
    if(this.$route.query.email){
      this.email=this.$route.query.email
    }
  },
  data() {
    return {
      rules: {
        required: true
      },

      show1: false,
      password: "",
      email: "",
      emailErrors: ""
    };
  },
  components: {
    topbar
  },
  methods: {
    //TODO - do the validation
    submit() {
      Axios.post(process.env.BACKEND_ADDRESS+"auth/login",{
        email:this.email,
        password:this.password
      })
      .then(res=>{
          if(res.data.user){
            this.$store.dispatch("setUser",res.data.user)
            if(res.data.user.code==null){
              this.$router.push("/stepper")
            }else{
              this.$router.push("/conversation")
            }
          }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<style>
.text-signup{
    text-decoration: underline;
    cursor: pointer;
}

</style>
