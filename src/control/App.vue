<template>
    <div>
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">Presenter</router-link>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">Home</router-link>
                    <router-link to="/songs" class="navbar-item">Songs</router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <button class="button is-primary" @click="clearScreen">Clear</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <br>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <router-view/>
                </div>
                <div class="column is-one-quarter">
                    <Queue></Queue>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Queue from "./components/Queue.vue";
    export default {
        name: "App",
        components: {Queue},
        methods:{
            clearScreen(){
                this.$present({
                    type: 'text',
                    message: '',
                })
            }
        }
    }
</script>

<style scoped>

</style>
