<template>
  <v-layout class="containers-layout" row wrap justify-center>
    <v-flex xs12 md12 lg12 class="pa-2">
      <h1 class="display-2 primary--text mt-5 text-center">Our team,</h1>
    </v-flex>

    <v-flex xs12 md6 lg6 class="pa-2 mt-5">
      <p class="mt-4">
        <span class="ml-5 font-weight-bold">
          Connect with a board certified Psychiatrist 24 hours a day using our
          platform.
        </span>
        <br />
        Our experienced physicians have been providing quality medical advice to
        those in need since 2014. Your Doctors Online is the passion project of
        our founders to bring affordable healthcare to all of the corners of the
        world. We believe that everyone in the world should have the ability to
        connect with an experienced doctor.
      </p>
    </v-flex>
    
    <v-flex xs12 md12 lg12 class="pa-2 mt-5 order-2">
      <v-card class="mx-auto "  outlined>
        <v-list-item three-line>
          <v-list-item-avatar  tile size="80" color="grey">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUU8A1khKxghkwPYq2482BPlMGN_SlbY2qftGE764yH-2nAqQq"
             
             alt="">
          </v-list-item-avatar>
          <v-list-item-content>
             <blockquote class="blockquote font-weight-bold">   
              “I believe in educating patients to prepare them for the right questions
               to ask when seeing their family practitioner or the emergency doctor. 
               Your Doctors Online allows me to do just that.”
               </blockquote>

            <p class="text">— Dr. Cheema, Chief Medical Officer at Your Doctors Online</p>
          </v-list-item-content>

        </v-list-item>

      </v-card>
    </v-flex>

    <v-flex xs12 md6 lg6 class="mt-5">
      <v-carousel
        height="250"
        cycle
        show-arrows-on-hover
        hide-delimiter-background
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card class="mx-auto" color="secondary" outlined>
            <v-list-item>
              <v-list-item-avatar tile size="230">
                <v-avatar color="orange" size="200">
                  <img
                    class="team-member-avatar"
                    v-bind:src="item.src"
                    alt=""
                  />
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content >
                <v-list-item-title class="headline mb-1">{{
                  item.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.post }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Doct 1",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUU8A1khKxghkwPYq2482BPlMGN_SlbY2qftGE764yH-2nAqQq",
          post: "Psychiatrist,Ph.D,LPC"
        },
        {
          name: "Doct 2",
          src:
            "https://www.verbalbeginnings.com/wp-content/uploads/2018/10/Allison.headshot.2.jpg",
          post: "Psychiatrist,Ph.D,LPC"
        }
      ]
    };
  }
};
</script>

<style>
.team-member-avatar {
  object-fit: cover;
}
</style>
