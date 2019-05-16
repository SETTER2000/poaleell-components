<template>
    <div>
        <el-select v-model="value" placeholder="Select" @change="changeValue(value)">
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
    import Vue from 'vue'
    import {Select, Option} from 'element-ui'
    import lang from 'element-ui/lib/locale/lang/ru-RU'
    import locale from 'element-ui/lib/locale'
    import '../../styles/elements/index.css'
    locale.use(lang);
    import SelectPoaleell from './SelectPoaleell'
    Vue.component('select-poaleell',SelectPoaleell);



    export default {
        name: "select-poaleell",
        props: ['options'],
        data(){
            return{
                value: '',
                option:this.options
            }
        },
        methods:{
            getOptions(){
                //console.log('options', this.options);
                return this.option= this.options;
            },
            changeValue(v){
                this.value=v;
                console.log(' this.v:', v);
                this.$emit('valChanged', this.value);

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

