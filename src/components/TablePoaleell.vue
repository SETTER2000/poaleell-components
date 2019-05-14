<template>
    <div>
        <vue-good-table
                :columns="cols"
                :rows="rows"
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
    import axios from 'axios';
    export default {
        name: 'table-poaleell',
        props: {
            pClass: String,
            pNumeric: Boolean,
            pHeader: Boolean,
            pCols:[],
            pRows:[],
            pDataRows:{type:String, default:'/data/rows.json'},
            pDataColumns:{type:String, default:'/data/columns.json'}
        },
        data() {
            return {
                rows: this.pRows,
                cols: this.pCols
            };
        },
        methods: {
            getRows() {
                return axios.get(this.pDataRows).then(response => {
                    // return axios.get('https://randomuser.me/api/').then(response => {
                    this.rows = response.data.results;
                });
            },

            getColumns() {
                return axios.get(this.pDataColumns).then(response => {
                    // return axios.get('https://randomuser.me/api/').then(response => {
                    this.cols = response.data.results;
                });
            },
        },
        components: {
            VueGoodTable
        },

        mounted() {
            this.getRows();
            this.getColumns();
        }
    };
</script>

