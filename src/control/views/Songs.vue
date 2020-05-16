<template>
    <div class="columns">
        <div class="column">
            <nav class="panel">
                <p class="panel-heading">
                    Songs
                </p>
                <div class="scrollable">
                    <div class="panel-block" v-for="song in songs" @click="viewSong(song.id)">
                        {{song.title}}
                    </div>
                </div>
            </nav>
        </div>
        <div class="column">
            <nav class="panel">
                <p class="panel-heading">
                    {{song.title}}
                </p>
                <div class="scrollable">
                    <div class="panel-block" v-for="bar in song.words">
                        {{bar._}}<br>
                        <button @click="project(bar._)" class="button is-small is-outlined is-danger">Send</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    const parseString = require('xml2js').parseString;
    import axios from 'axios';

    export default {
        name: "Songs",
        data: () => ({
            song:[],
        }),
        created() {
            if (this.songs.length === 0) {
                axios.get(`${this.apiUrl}songs`).then(res => {
                    this.addToSongs(res.data);
                })
            }
        },
        computed: {
            ...mapState(['apiUrl', 'songs']),
        },
        methods: {
            ...mapMutations(['addToSongs']),
            viewSong(id) {
                let buff = this.songs.find(p => {
                    if (p.id === id) {
                        return p;
                    }
                });
                parseString(buff.lyrics, (err, res)=>{
                    buff.words = res.song.lyrics[0].verse;
                    this.song = buff;
                })
            },
            project(lyric){
                this.$present({
                    type:'song',
                    message: lyric.replaceAll('\n', '<br>')
                });
            },
        }
    }
</script>

<style scoped>
    .scrollable {
        height: 500px;
        overflow: scroll;
    }
</style>
