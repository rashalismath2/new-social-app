<template>
      <v-layout class="containers-layout" row wrap justify-center>
        <v-flex xs12 lg12 md12 class="pa-2">
          <h1 class="display-2 primary--text text-center">
            Need of the professional help,
          </h1>
          <p class="mt-4">
            <span class="ml-10">
              Psychotherapy, talk or talking therapy, counseling, or simply
              therapy no matter the name it’s known by, mental health counseling
              can benefit people struggling with emotional difficulties, life
              challenges, and mental health concerns.
            </span>
            <br />
            <br />
            Therapy can help improve symptoms of many mental health conditions.
            In therapy, people also learn to cope with symptoms that may not
            respond to treatment right away. Research shows the benefits of
            therapy last longer than medication alone. Medication can reduce
            some symptoms of mental health conditions, but therapy teaches
            people skills to address symptoms on their own. These skills last
            after therapy ends, and symptoms may continue to improve, making it
            less likely people will need further treatment.
          </p>

          <p class="font-weight-bold title">
            If you experience any of the following emotions or feelings to the
            extent that they interfere with life, therapy may help you reduce
            their effects.
          </p>
          <ol>
              <v-flex row wrap md12 lg12>
                <li v-for="need in need" v-bind:key="need.title" class="list-item pr-3">
                    <p class="mb-0 black--text font-weight-bold">{{ need.title }}</p>
                    <p class="pl-5 black--text pr-4">{{need.description }}</p>
                </li>
              </v-flex>
          </ol>
        </v-flex>
      </v-layout>
</template>

<script>
export default {
     data() {
    return {
      need: [
        {
          title: "Overwhelm",
          description:
            "ou might feel like you have too many things to do or too many issues to cope with. You might feel like you can’t rest or even breathe. Stress and overwhelm can lead to serious physical health concerns."
        },
        {
          title: "Fatigue",
          description:
            "This physical symptom often results from or accompanies mental health issues. It can indicate depression. Fatigue can cause you to sleep more than usual or have trouble getting out of bed in the morning."
        },
        {
          title: "Disproportionate rage, anger, or resentment",
          description:
            "Everyone feels angry at times. Even passing rage isn’t necessarily harmful. Seeking support to deal with these feelings may be a good idea when they don’t pass, are extreme compared to the situation, or if they lead you to take violent or potentially harmful actions."
        },
        {
          title: "Agoraphobia",
          description:
            "People with agoraphobia fear being in places where they might experience panic attacks or become trapped. Some people may become unable to leave their houses."
        },
        {
          title: "Anxious or intrusive thoughts",
          description:
            "It’s normal to worry about things from time to time, but when worry takes up a significant part of your day or causes physical symptoms, therapy can help you deal with it."
        },
        {
          title: "Apathy",
          description:
            "Losing interest in usual activities, the world around you, or life in general can indicate mental health issues like depression or anxiety."
        },
        {
          title: "Hopelessness",
          description:
            "Losing hope or motivation, or feeling as if you have no future, can indicate depression or another mental health condition. Feeling hopeless from time to time, especially after a period of difficulty, isn’t uncommon. But when it persists, it may lead to thoughts of suicide."
        },
        {
          title: "Social withdrawal",
          description:
            "Many people feel better when they’re able to spend at least some time alone. Introverted people may need even more time alone than others. But if you feel distressed around others or fear being with other people, therapy can help you understand and deal with these feelings."
        }
      ]
    };
  }
}
</script>

<style>

    .list-item{
        width: 50%;
    }
</style>