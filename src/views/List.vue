<template>
  <div id="credentialing" class=" md-alignment-top-center">
    <md-table md-card>
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      <md-table-toolbar>
        <h1 class="md-title">Registered credentials</h1>
      </md-table-toolbar>

      <md-table-row class="md-table-row" v-for="credential in credentials" v-bind:key="credential" v-on:click="getCredentials">
        <md-table-cell md-numeric>{{credential.id}}</md-table-cell>
        <md-table-cell>{{credential.name}}</md-table-cell>
        <md-table-cell>{{credential.email}}</md-table-cell>
        <md-table-cell>{{credential.gender}}</md-table-cell>
        <md-table-cell>{{credential.speciality}}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>


<script>

export default  {
  name: 'Credentialing',
  data: () => ({
    // doctorName: 'Peter Tomson',
    credentials: [{
          id: 1,
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          gender: 'Male',
          speciality: 'ssistant Media Planner'
        }, {
          id: 2,
          name: 'Odette Demageards',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          speciality: 'Account Coordinator'
        }, {
          id: 3,
          name: 'Vera Taleworth',
          email: 'vtaleworth2@google.ca',
          gender: 'Male',
          speciality: 'Community Outreach Specialist'
        }],
    sending: false
  }),
  methods: {
    getCredentials() {
      this.sending = true
      setTimeout(() => {
        this.$router.push('view');
        this.sending = false
      },1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .md-table-row:hover {
    cursor: pointer;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>

