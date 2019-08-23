<template>
  <div id="credentialing" class=" md-alignment-top-center">
    <md-table md-card>
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      <md-table-toolbar>
        <h1 class="md-title">Registered providers</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-cell>Provider Id</md-table-cell>
        <md-table-cell>Provider State</md-table-cell>
        <md-table-cell>Medical School</md-table-cell>
        <md-table-cell>Provider  Name</md-table-cell>
        <md-table-cell>Provider Degree</md-table-cell>
      </md-table-row>
      <md-table-row class="md-table-row" v-for="credential in providers" v-bind:key="credential" v-on:click="getCredentials(credential.ProviderID)">
        <md-table-cell>{{credential.ProviderID}}</md-table-cell>
        <md-table-cell>{{credential.PrimaryState}}</md-table-cell>
        <md-table-cell>{{credential.MedicalSchool}}</md-table-cell>
        <md-table-cell>{{credential.ProviderName}}</md-table-cell>
        <md-table-cell>{{credential.Degree}}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>


<script>

export default  {
  name: 'Credentialing',
  data: () => ({
    // doctorName: 'Peter Tomson',
    providers: [{
          ProviderID: 1,
          PrimaryState: 'IL',
          MedicalSchool: 'Columbia',
          ProviderName: 'Shawna',
          ProviderFIrstName: 'Shawna',
          ProviderMidName: '',
          ProviderLastName: 'Dubbin',
          Degree : 'Master of Surgery'
        }, {
          ProviderID: 2,
          PrimaryState: 'CA',
          MedicalSchool: 'Karolinska Institute',
          ProviderName: 'Odette Demageards',
          ProviderFIrstName: 'Odette',
          ProviderMidName: ' ... ',
          ProviderLastName: 'Demageards',
          Degree : 'Doctor of Osteopathic Medicine'
        }, {
          ProviderID: 3,
          PrimaryState: 'WA',
          MedicalSchool: 'Harvard University',
          ProviderName: 'Vera Taleworth',
          ProviderFIrstName: 'Vera',
          ProviderMidName: '',
          ProviderLastName: 'Taleworth',
          Degree : 'Bachelor of Medicine'
        }
        ],
    sending: false
  }),
  methods: {
    getCredentials(providerId) {
      this.$router.push('view?id='+providerId)
    },
    getProviders() {
      this.sending = true
        this.$http.get(this.$apiUrl + '/providers')
        .then((res) => {
          this.sending = false
          this.providers = res.data
        })
        .catch((e) => {
          this.sending = false
          console.log(e);
        });
    }
  },
  mounted(){
    this.getProviders();
    
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

