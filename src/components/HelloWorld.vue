<template>
    <div class="hello">

        <el-select v-model="value" placeholder="Select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

    </div>
</template>

<script>
    import {Button, Select,Option, Table, TableColumn} from 'element-ui'
    import lang from 'element-ui/lib/locale/lang/ru-RU'
    import locale from 'element-ui/lib/locale'
    // import 'element-ui/lib/theme-chalk/index.css'
    import 'element-ui/lib/theme-chalk/select.css'
    // configure language
    locale.use(lang);
    // Vue.component(Button.name, Button);
    // Vue.component(Select.name, Select);

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
            // value:String
        },
        data() {

            return {
                options:
                    [{
                        value: 'Option1',
                        label: 'Option1'
                    }, {
                        value: 'Option2',
                        label: 'Option2'
                    }, {
                        value: 'Option3',
                        label: 'Option3'
                    }, {
                        value: 'Option4',
                        label: 'Option4'
                    }, {
                        value: 'Option5',
                        label: 'Option5'
                    }],
                value:''
            }

        },
        components: {
            Button,
            elSelect:Select,
            Table,
            TableColumn,
            elOption:Option
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
