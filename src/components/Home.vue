<template>
    <div>
        <el-select v-model="itemValue" @change="changeItem" ref="item" value-key="value">
            <el-option v-for="(item, index) in items" 
            :value="item.value" :key="index" :label="item.label"></el-option>
        </el-select>
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
                itemValue: ""
            }
        },
        methods: {
            changeItem() {
                window.console.log("value: " + this.itemValue);
                this.$nextTick(() => {
                    window.console.log(this.$refs.item);
                    window.console.log(this.$refs.item.selected.label)
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