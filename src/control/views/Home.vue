<template>
    <div>
        <h1 class="title">Quick Message</h1>
        <div class="field">
            <div class="control">
                <textarea v-model="form.quickMessage" class="textarea is-primary" type="text" placeholder="Message to Display"></textarea>
            </div>
        </div>
        <button class="button is-primary" @click="pushToQueue">Add to Queue</button>
        <button class="button is-danger">Go Live</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "Home",
        data: () => ({
            form:{
                quickMessage:'',
            }
        }),
        methods: {
            ...mapMutations(['addToQueue']),
            pushToQueue(){
                if(this.form.quickMessage.length != 0) {
                    this.addToQueue({
                        type: 'text',
                        message: this.form.quickMessage,
                    });
                    this.form.quickMessage = '';
                }
            }
        }
    }
</script>

<style scoped>

</style>
