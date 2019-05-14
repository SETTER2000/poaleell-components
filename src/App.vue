<template>
    <div id="app">
        <!--ff: {{rws}}-->
        <!--  <img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App" :opt-select="[...option]"/>-->
        <SelectPoaleell  :options="option"  @valChanged="value=$event"/>
{{value}}
        <!--<TablePoaleell pDataColumns="/data/columns.json" pDataRows="/data/rows2.json"  p-class="table table-striped" />-->
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import TablePoaleell from './components/TablePoaleell.vue'
    import SelectPoaleell from './components/SelectPoaleell.vue'

    export default {
        name: 'app',
        data() {
            return {
                value:'',
                option: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }]
            }
        },
        /*   data() {
               return {
                 //  url:'/data/data.json',
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
                 /!*  rws: [
                       {id: 1, name: "John555", age: 20, createdAt: '201-10-31:9: 35 am', score: 0.03343},
                       {id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343},
                       {id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343},
                       {id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.05343},
                       {id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343},
                       {id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343},
                   ],*!/
               };
           },*/

        components: {
            HelloWorld,
            TablePoaleell,
            SelectPoaleell
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
