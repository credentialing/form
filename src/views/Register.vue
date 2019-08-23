<template>
    <RegisterForm/>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RegisterForm from "@/components/RegisterForm.vue"; // @ is an alias to /src
@Component({
  components: {
    RegisterForm
  }
})
export default class Register extends Vue {
  msg: String = '';
  beforeCreate() {
    console.log('beforeCreate');//eslint-disable-line
  };
  created() {
    console.log('beforeCreate');//eslint-disable-line
  };
  beforeMount() {
    console.log('beforemount');//eslint-disable-line
  };
  mounted(){
    console.log('mount');//eslint-disable-line
  };
  beforeUpdate() {
    console.log('beforeUpdate');//eslint-disable-line
  };
  updated(){
    console.log('updated');//eslint-disable-line
  };
  beforeDestroy() {
    console.log('beforeDestroy');//eslint-disable-line
  };
  destroyed(){
    console.log('destroyed');//eslint-disable-line
  };
  get computed(): String {
    return ''
  };
  method() {

  };
}
</script>
