<template>
  <div id="credentialing">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">This are the {{doctorName}} credentials</h1>
      </md-table-toolbar>

      <md-table-row v-for="credential in credentials" v-bind:key="credential">
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
  name: 'credentialing',
  data: () => ({
    doctorName: '[DOCTOR NAME]',
    credentials: [{
        id: 1,
        name: 'Shawna Dubbin',
        email: 'sdubbin0@geocities.com',
        gender: 'Male',
        speciality: 'ssistant Media Planner'
      }, {
        id: 2,
        name: 'Odette Demageard',
        email: 'odemageard1@spotify.com',
        gender: 'Female',
        speciality: 'Account Coordinator'
      }, {
        id: 3,
        name: 'Vera Taleworth',
        email: 'vtaleworth2@google.ca',
        gender: 'Male',
        speciality: 'Community Outreach Specialist'
      }]
  }),
  methods: {
    getCredentials(someId = 5) {
      this.$http.get('/credential/:'+someId)
      .then(() => {
      })
      .catch((e) => {
          console.log(e);
      });
    }
  }
}
</script>

