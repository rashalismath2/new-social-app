<template>
    <nav>
        <v-app-bar  app class="white">
            <v-btn v-on:click="openDrawer" text>
                <v-icon>reorder</v-icon>
            </v-btn>
            <v-toolbar-title >
                <span class="primary--text text--darken-2">HelpHearty</span>
            </v-toolbar-title>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
         openDrawer(){
            this.$emit("openDrawer",true) 
        }
    },
}
</script>

<style>
    .bg{
        background: #00BE8D
    }
</style>