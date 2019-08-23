<template>
  <div id="credentialing" class=" md-alignment-top-center">


    <div class="md-layout md-gutter" md-card>
      <div class="md-layout-item">
        <h2>Primary Activity: <span>{{credentials.PrimaryActivity}}</span></h2>
        <md-table md-card>
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
            <md-table-cell>Specialty: <span>{{credentials.Specialty}}</span></md-table-cell>
            <md-table-cell>Sub Specialty: <span>{{credentials.SubSpecialty}}</md-table-cell>
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
      PrimaryActivity: 'Medical Teacher',
      NPI_ID: '555-555',
      NPI_Status: 'Active',
      EnumerationDate: '2001-08-06',

      LicenseState: 'Washington',
      LicenseNum:  '333-333',

      Specialty: 'Cardiologist',
      SubSpecialty: 'Anatomic Pathology',

      DEA_OrderDate: '2001-09-06',
      DEA_Order:  '--  --'
    }
  }),
  methods: {
    getCredentials(providerId) {
      this.sending = true
        this.$http.get(this.$apiUrl + '/cred/' + providerId)
        .then((res) => {
          this.sending = false
          this.credentials = res.data
        })
        .catch((e) => {
          this.sending = false
          console.log(e);
        });
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
