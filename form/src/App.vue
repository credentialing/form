<template>
  <md-app id="app">
    <md-app-toolbar id="nav">
      <md-avatar>
        <img src="/avatar.png" alt="Globant" title="Globant">
      </md-avatar>
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
}
#nav {
  padding: 30px;
  .md-avatar {
    margin: 0 20px 0 0;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #bfd732;
    }
  }
}


</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DocService from './services/doc.services';
import { Notifications, NotificationRequest} from './behavior/notification.bh';

@Component({
  props: {
    name: String
  }
})
export default class App extends Vue {
  msg: String = '';
  computedString:String = this.msg;
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
