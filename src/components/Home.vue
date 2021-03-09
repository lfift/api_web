<template>
    <div>
        <el-select v-model="itemValue" @change="changeItem" ref="item" value-key="value">
            <el-option v-for="(item, index) in items" 
            :value="item.value" :key="index" :label="item.label"></el-option>
        </el-select>
        <el-radio-group v-model="radioValue" ref="radioItem" @change="changeRadio">
            <el-radio label="111">1</el-radio>
            <el-radio label="222">2</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                items: [
                    {label: "111", value: "1"},
                    {label: "222", value: "2"},
                    {label: "333", value: "3"}
                ],
                itemValue: "",
                radioValue: ''
            }
        },
        methods: {
            changeItem() {
                window.console.log("value: " + this.itemValue);
                this.$nextTick(() => {
                    window.console.log(this.$refs.item);
                    window.console.log(this.$refs.item.selected.label)
                });
            },
            changeRadio() {
                this.$nextTick(() => {
                    window.console.log(this.$refs.radioItem);
                    window.console.log(this.$refs.radioItem.checked)
                });
            }
        }
    }
</script>

<style scoped>
   p {
       text-align: justify;
       text-align-last: justify;
   }
</style>