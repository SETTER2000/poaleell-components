<template>
    <div>
        <vue-good-table
                :columns="pCols"
                :rows="pRows"
                :styleClass="pClass"
                :line-numbers="pNumeric"
                max-header="200px"
                :fixed-header="pHeader"
        />
    </div>
</template>

<script>
    // import 'vue-good-table/dist/vue-good-table.css'
    import '../../public/styles/pro/bootstrap.min.css'
    import {VueGoodTable} from 'vue-good-table';

    export default {
        name: 'table-poaleell',
        props: {
            pClass: String,
            pNumeric: Boolean,
            pHeader: Boolean,
            pCols:Array,
            pRows:Array
        /*    urlGet:{
                type:String,
                default:'/data/data.json'
            }*/
           /* pCols:Array,
            pRows:Array*/
        },
/*        data() {
            return {
                pColumns: this.pCols,
                pRws: this.pRows
                    /!*[
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
                ],*!/
              /!*  pRows: [
                    {id: 1, name: "John", age: 20, createdAt: '201-10-31:9: 35 am', score: 0.03343},
                    {id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343},
                    {id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343},
                    {id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.05343},
                    {id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343},
                    {id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343},
                ],*!/
            };
        },*/

        components: {
            VueGoodTable
        }
    };
</script>

