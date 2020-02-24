<template>
  <v-container fluid>
    <div>
      <p class="title">
        *Take your time and answer for these simple questions. You can always
        skip answering for now
      </p>
      <div class="pa-5">
        <li v-for="(item, i) in questions" v-bind:key="item.id">
          <p class="ma-0 subtitle-1 font-weight-bold">{{ i + 1 }}) {{ item.question }}</p>
          <div          class="mt-5 pr-4">
              <v-textarea
                clearable
                hide-details="true"
                rows="2"
                clear-icon="cancel"
                v-model="answers[item.id]"
                label="Text"
          ></v-textarea>
          </div>
        </li>
      </div>
    </div>
        <v-btn class="btn-next" color="primary mt-5" @click="setStep(3)">
                  Continue
        </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array
    }
  },
  methods: {
        setStep(step){
            var answers=[]
            for(let i=0;i<this.answers.length;i++){
                  if(this.answers[i]){
                        answers.push({
                        question_id:i-1,
                        answer:this.answers[i]
                    })
                  }
            }
            
            this.$emit("setStep",[answers,step])
        }
  },
  data() {
    return {
        answers:[]
    };
  }
};
</script>

<style>
li {
  list-style: none;
}

  .btn-next{
        float: right;
    }
</style>
