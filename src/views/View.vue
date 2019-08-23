<template>
  <div id="credentialing" class=" md-alignment-top-center">


    <div class="md-layout md-gutter" md-card>
      <div class="md-layout-item">
        <h2>General Info</h2>
        <md-table md-card>
          <md-table-row>
            <md-table-cell class="align-right">Primary Activity:: </md-table-cell>
            <md-table-cell>{{credentials.PrimaryActivity}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">NPI: </md-table-cell>
            <md-table-cell>{{credentials.NPI_ID}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">NPI Status: </md-table-cell>
            <md-table-cell>{{credentials.NPI_Status}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">Enumeration Date: </md-table-cell>
            <md-table-cell>{{credentials.EnumerationDate}}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="md-layout-item" md-card>
        <h2>License</h2>
        <md-table md-card>
          <md-table-row>
            <md-table-cell class="align-right">License Number: </md-table-cell>
            <md-table-cell>{{credentials.LicenseNum}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">License State: </md-table-cell>
            <md-table-cell>{{credentials.LicenseState}}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="md-layout-item" md-card>
        <h2>Knowledge Area</h2>
        <md-table md-card>
          <md-table-row>
            <md-table-cell class="align-right">Specialty:</md-table-cell>
            <md-table-cell>{{credentials.Specialty}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">Sub Specialty:</md-table-cell>
            <md-table-cell>{{credentials.SubSpecialty}}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="md-layout-item" md-card>
        <h2>Legal Info</h2>
        <md-table md-card>
          <md-table-row>
            <md-table-cell class="align-right">DEA Order: </md-table-cell>
            <md-table-cell>{{credentials.DEA_Order}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="align-right">DEA Order Date: </md-table-cell>
            <md-table-cell>{{credentials.DEA_OrderDate}}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>


  </div>
</template>


<script>

export default  {
  name: 'Credentialing',
  data: () => ({
    doctorName: 'Peter Tomson',
    credentials: {
      PrimaryActivity: '',
      NPI_ID: '',
      NPI_Status: '',
      EnumerationDate: '',

      LicenseState: '',
      LicenseNum:  '',

      Specialty: '',
      SubSpecialty: '',

      DEA_OrderDate: '',
      DEA_Order:  ''
    }
  }),
  methods: {
    async getCredentials(providerId) {
      this.sending = true 
      const res = await this.$http.get(this.$apiUrl + '/cred/' + providerId);
      this.sending = false
      this.credentials = res.data[0] || {}
      console.log(this, res.data);
    }
  },
  watch: {
    '$route' (to, from) {
      this.getCredentials(this.$router.history.current.query.id);
    }
  },
  mounted(){
    this.getCredentials(this.$router.history.current.query.id);
    
  }
}

</script>
<style lang="scss" scoped>
h2 b{
  font-size: 16px;
}
.align-right {
  text-align: right;
}
</style>
