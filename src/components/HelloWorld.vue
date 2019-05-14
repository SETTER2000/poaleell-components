<template>
    <div>
<h3>{{msg}}</h3>
        <hr>
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
    import {Select, Option} from 'element-ui'
    import lang from 'element-ui/lib/locale/lang/ru-RU'
    import locale from 'element-ui/lib/locale'
    // import 'element-ui/lib/theme-chalk/index.css'
    // import 'element-ui/lib/theme-chalk/select.css'
    import '../../public/styles/element-#F81C1C/select.css'
    // configure language
    locale.use(lang);
    // Vue.component(Button.name, Button);
    // Vue.component(Select.name, Select);

    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            optSelect: Array,
            val:String
        },
        data() {
            return {
                value: this.val,
                options: this.optSelect
            }

        },
        methods: {
            getRows() {
                return  this.options = this.optSelect;
            },
        },
        components: {
            elSelect: Select,
            elOption: Option
        },
        mounted() {
            this.getRows();
        }
    }
</script>


