<template>
    <div>
        <nav class="panel">
            <p class="panel-heading">
                Queue
            </p>
            <div class="panel-block" v-for="item in queue">
                <button @click="project(item.id)" class="button is-small is-outlined is-danger">Send</button>
                &nbsp;&nbsp;
                {{item.message}}
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "Queue",
        computed: {
            ...mapState(['queue']),
            ...mapGetters(['getItemFromQueue']),
        },
        methods: {
            project(id) {
                this.$present(this.queue.find(q => {
                    if (q.id === id) {
                        return q;
                    }
                }));
            }
        },

    }
</script>

<style scoped>

</style>
