<template>
  <div>
    <v-container row wrap  class="conversation" >
        <v-flex ref="textWindow" lg12 md12 sm12 class="texts pr-4" >
             <li v-bind:class="message.to=='doc' ? 'my-text mb-2':'doc-text mb-2' " v-for="(message,i) in messages" v-bind:key="i">
                 <p class="ma-0">{{message.text}}</p>
             </li>
        </v-flex>
        <v-flex lg12 md12 sm12 align-self-end>
            <v-textarea
              v-on:keydown.enter.prevent="sendMessage"
            class="text-area"
            label="Text"
            outlined
            v-model="message"
            rows="1"    
            hide-details
        ></v-textarea>
        </v-flex>
    </v-container>
  </div>
</template>


<script>
export default {
    mounted(){
        this.scrollDown();
    },
    watch: {
    messages(){
      this.scrollDown();
    },
    },
    methods: {
        scrollDown(){
        if(this.$refs.textWindow){
                var textWindow=this.$refs.textWindow;
            textWindow.scrollTop = textWindow.scrollHeight-textWindow.clientHeight;
        }
            },
        sendMessage(){
     
            this.messages.push({
                id:10,
                text:this.message,
                to:"doc"
            })
            this.message=""
        }
    },
    data() {
        return {
            message:"",
            messages:[
                {
                    id:1,
                    text:"Hdiweqw there",
                    to:"me"
                },
                {
                    text:"Hid thweqweere",
                    to:"doc"
                },
                {
                    text:"Hi dtherewee",
                    to:"me"
                },
                {
                    text:"Hi tdheqwecsdre",
                    to:"doc"
                },
                {
                    text:"Hi tddasdhere",
                    to:"me"
                },
                {
                    text:"Hid theadsdre",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
                {
                    text:"Hi tdhearwqee",
                    to:"me"
                },
                {
                    text:"Hi thewrqwee",
                    to:"doc"
                },
      
         
            ]
        }
    },
}
</script>

<style>
.conversation{
    height: 100%;
}

.texts{
    height: 480px;
    overflow-y: scroll;
}

.text-area{
 
}

li{
    list-style: none;
    color: white;
    width: 100%;

    height: 30px;
}

.my-text>p{
    width: fit-content;
    float: right;
    background: #4caf50;
    border-radius: 5px;
    padding: 5px;
}
.doc-text>p{
    width: fit-content;
    border-radius: 5px;
    padding: 5px;
     background: #8bc34a;
}


</style>
