<template>
  <v-layout class="containers-layout" row wrap>

    <v-flex xs12 lg12 md12 class="pa-2" justify-center>
      <h1 class="display-2 primary--text text-center">
        User feedbacks,
      </h1>
    </v-flex>

    <v-flex class="pa-2" lg12 md12 xs12>
        <p>We appreciate our feedbacks</p>
    </v-flex>

    <v-flex xs12 lg12 md12 class="pa-2" justify-center>
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
          name: "User 1",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUU8A1khKxghkwPYq2482BPlMGN_SlbY2qftGE764yH-2nAqQq",
          post: "Psychiatrist,Ph.D,LPC"
        },
        {
          name: "User 2",
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

</style>
