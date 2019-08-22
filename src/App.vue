<template>
  <md-app id="app">
    <md-app-toolbar id="nav">

      <img src="./assets/globant.png" class="logo" alt="Globant" title="Globant">
      
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/view">View</router-link>
    </md-app-toolbar>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .logo {
    width: 100px;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:not(.logo) {
      padding:  0 10px;
    }
  }
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DocService from './services/doc.services';
import { Notifications, NotificationRequest} from './behavior/notification.bh';
import Axios from 'axios'
Vue.prototype.$http = Axios
Vue.prototype.$apiUrl = 'http://localhost:8001'

@Component({
  props: {
    name: String
  }
})
export default class App extends Vue {
  msg: String = '';
  computedString:String = this.msg;
  userEmail: string | null = '';
  beforeCreate() {
    console.log('beforeCreateAPP');//eslint-disable-line
  };
  created() {
    console.log('beforeCreateAPP');//eslint-disable-line
  };
  beforeMount() {
    console.log('beforemountAPP');//eslint-disable-line
    const self = this;
    DocService.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      const notification = new Notifications();

      notification.notify({ 
        title: `Updated ${event.lastEventId}`,
        message: `CV ${event.lastEventId} processed`,
        clickCB: () => {
          self.$router.push({ name: 'view', params: { data }, query: {id: event.lastEventId} })
        }
      } as NotificationRequest)
    }
  };
  mounted(){
    console.log('mountAPP');//eslint-disable-line
    this.userEmail = localStorage.getItem('userEmail');

  };
  beforeUpdate() {
    console.log('beforeUpdateAPP');//eslint-disable-line
  };
  updated(){
    console.log('updatedAPP');//eslint-disable-line

  };
  beforeDestroy() {
    console.log('beforeDestroyAPP');//eslint-disable-line
  };
  destroyed(){
    console.log('destroyedAPP');//eslint-disable-line

  };
  get computed(): String {
    return ''
  };
  method() {

  };
}
</script>
