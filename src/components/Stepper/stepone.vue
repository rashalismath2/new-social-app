<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in this.categories"
      :key="i"
    >
      <v-expansion-panel-header class="black--text text--darken-4 headline">{{item.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <p class="mr-5">-<span>{{item.description}}</span></p>
        <div v-if="item.problems">
            <p class="black--text title">The problems you might have</p>
            <li v-for="p in item.problems" v-bind:key="p">
                -{{p}}
            </li>
        </div>
        <div v-else>
            <p class="black--text title">The cases you need help of</p>
            <li v-for="p in item.cases" v-bind:key="p">
                -{{p}}
            </li>
        </div>
        <v-btn color="primary mt-5" @click="setStep(item.code,2)">
                  Continue
        </v-btn>
      </v-expansion-panel-content>                
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
    methods: {
        setStep(code,step){
            this.$emit("selectstep",[code,step])
        }
    },
    data() {
        return {
            categories:[
                    { 
                        code:"f",
                        title:"Marriage and family Counselling",
                        description:"Marriage and family therapists offer guidance to couples, families and groups who are dealing with issues that affect their mental health and well-being.",
                        problems:[
                            "Child and adolescent behavioral problems",
                            "Grieving",
                            "Depression and anxiety",
                            "Marital conflicts",
                            "Domestic violence",
                            "Substance abuse"
                        ]
                    },
                    { 
                         code:"m",
                        title:"Mental Health Counseling",
                        description:"Mental health counselors offer guidance to individuals, couples, families and groups who are dealing with issues that affect their mental health and well-being",
                        problems:[
                            "aging",
                            "bullying",
                            "Depression and anxiety",
                            "anger management",
                            "careers",
                            "relationships",
                            "self-image",
                            "stress and suicide",
                            "Substance abuse"
                        ]
                    },
                    { 
                         code:"s",
                        title:"School Psychology Consultant",
                        problems:null,
                        description:"School psychologists assist students at all levels, from elementary school to college. They act along with school counselors as advocates for students’ well-being, and as valuable resources for their educational and personal advancement.",
                        cases:[
                            "Work with school-aged children and young adults",
                            "Listen to concerns about academic, emotional or social problems",
                            "Promote positive behaviors",
                            "Study and implement behavioral management techniques",
                            "Evaluate and advise school disciplinary practices for troubled students",
                            "Meet with parents and teachers to discuss learning, behavioral, familial and social problems"
                        ]
                    },
            ]
        }
    },
}
</script>