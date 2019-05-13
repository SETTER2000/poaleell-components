<template>
    <div id="app">
       <!--ff: {{rws}}-->
      <!--  <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <TablePoaleell :pCols="[...cols]" :pRows="[...rws]"  p-class="table table-striped" />
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import TablePoaleell from './components/TablePoaleell.vue'
    import axios from 'axios';
    export default {
        name: 'app',
        props:{
            rws:Array,
        },
        data() {
            return {
                cols: [
                    {
                        label: 'Name',
                        field: 'name',
                    },
                    {
                        label: 'Age',
                        field: 'age',
                        type: 'number',
                    },
                    {
                        label: 'Created On',
                        field: 'createdAt',
                        type: 'date',
                        dateInputFormat: 'YYYY-MM-DD',
                        dateOutputFormat: 'MMM Do YY',
                    },
                    {
                        label: 'Percent',
                        field: 'score',
                        type: 'percentage',
                    },
                ],
              /*  rws: [
                    {id: 1, name: "John555", age: 20, createdAt: '201-10-31:9: 35 am', score: 0.03343},
                    {id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343},
                    {id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343},
                    {id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.05343},
                    {id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343},
                    {id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343},
                ],*/
            };
        },
        methods: {
            getRevisions() {
                return axios.get('/data/data.json').then(response => {
                // return axios.get('https://randomuser.me/api/').then(response => {
                    this.rws = response.data.results;
                });
            },
        },
        components: {
            // HelloWorld,
           TablePoaleell
        },
        mounted() {
            this.getRevisions()
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
