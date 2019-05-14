<template>
    <div>
        <el-select v-model="value" placeholder="Select" @change="changeValue()">
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
    import '../../styles/element-#F81C1C/select.css'
    locale.use(lang);

    export default {
        name: "SelectPoaleell",
        props: ['options'],
        data(){
            return{
                value: '',
                option:this.options
            }
        },
        methods:{
            getOptions(){
                return this.option= this.options;
            },
            changeValue(){
               // this.value = this.val;
                this.$emit('valChanged', this.value)
            }
        },
        mounted() {
            this.getOptions();
        },
        components: {
            elSelect: Select,
            elOption: Option
        }
    }
</script>

