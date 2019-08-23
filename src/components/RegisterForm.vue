<template>
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-80 md-medium-size-100">
        <md-card-header>
          <div class="md-title">
            Data Intake
            <md-button type="submit" v-on:click="fillFake" class="md-primary" :disabled="sending">Fill data</md-button>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('ProviderName')">
              <label for="provider-name">Provider name</label>
              <md-input
                name="provider-name"
                id="provider-name"
                v-model="form.ProviderName"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.ProviderName.required">The provider name is required</span>
            </md-field>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-medium-size-30">
              <md-field :class="getValidationClass('ProviderFIrstName')">
                <label for="first-name">First name</label>
                <md-input
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="form.ProviderFIrstName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.ProviderFIrstName.required">The full name is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-medium-size-30">
              <md-field >
                <label for="mid-name">Middle name</label>
                <md-input
                  name="mid-name"
                  id="mid-name"
                  v-model="form.ProviderMidName"
                  :disabled="sending"
                />
              </md-field>
            </div>
            <div class="md-layout-item md-medium-size-30">
              <md-field :class="getValidationClass('ProviderLastName')">
                <label for="last-name">Last name</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="given-name"
                  v-model="form.ProviderLastName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.ProviderLastName.required">The last name is required</span>
              </md-field>
            </div>

          </div>
         
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('PrimaryCity')">
                <label for="PrimaryCity">Primary City</label>
                <md-input 
                  v-model="form.PrimaryCity" 
                  id="PrimaryCity" 
                  name="PrimaryCity" />
                  <span
                    class="md-error"
                    v-if="!$v.form.PrimaryCity.required">
                    The Primary City is required
                  </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              
              <md-field :class="getValidationClass('PrimaryState')">
                <label for="PrimaryState">Primary State</label>
                <md-input v-model="form.PrimaryState" id="PrimaryState" name="PrimaryState" />
                <span
                  class="md-error"
                  v-if="!$v.form.PrimaryState.required">
                  The Primary State is required
                </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              
              <md-field :class="getValidationClass('PrimaryZipCode')">
                <label for="PrimaryZipCode">Primary ZipCode</label>
                <md-input v-model="form.PrimaryZipCode" id="PrimaryZipCode" name="PrimaryZipCode" />
                  <span
                    class="md-error"
                    v-if="!$v.form.PrimaryZipCode.required">
                    The Primary ZipCode is required
                  </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('PrimaryPhone')">
                <label for="practicePhone">Primary phone</label>
                <md-input
                  name="practicePhone"
                  id="practicePhone"
                  autocomplete="phone"
                  v-model="form.PrimaryPhone"
                  :disabled="sending"
                  type="phone"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.PrimaryPhone.required"
                >Practice phone is required</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('MailingCity')">
                <label for="MailingCity">Mailing City</label>
                <md-input v-model="form.MailingCity" id="MailingCity" name="MailingCity" />
                <span
                  class="md-error"
                  v-if="!$v.form.MailingCity.required">
                  The Mailing  City is required
                </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('MailingState')">
                <label for="MailingState">Mailin State</label>
                <md-input v-model="form.MailingState" id="MailingState" name="MailingState" />
                <span
                  class="md-error"
                  v-if="!$v.form.MailingState.required">
                  The Mailing State is required
                </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('MailingZipCode')">
                <label for="MailingZipCode">Mailing ZipCode</label>
                <md-input v-model="form.MailingZipCode" id="MailingZipCode" name="MailingZipCode" />
                <span
                  class="md-error"
                  v-if="!$v.form.MailingZipCode.required">
                    The Mailing ZipCode is required
                  </span>

              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('MailingAddress1')">
                <label for="address">Mailing Address</label>
                <md-input
                  name="MailingAddress"
                  id="MailingAddress"
                  autocomplete="MailingAddress"
                  v-model="form.MailingAddress1"
                  :disabled="sending"
                  type="address"
                />
                <span class="md-error" v-if="!$v.form.MailingAddress1.required">Mailing Address is required</span>
              </md-field>
              
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label for="address">Mailing Address 2</label>
                <md-input
                  name="MailingAddress2"
                  id="MailingAddress2"
                  autocomplete="MailingAddress2"
                  v-model="form.MailingAddress2"
                  :disabled="sending"
                  type="address"
                />
              </md-field>
            </div>
         </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('PrimaryActivity')">
                <label for="PrimaryActivity">Primary  Activity</label>
                <md-input v-model="form.PrimaryActivity" id="PrimaryActivity" name="PrimaryActivity" />
                <span
                  class="md-error"
                    v-if="!$v.form.PrimaryActivity.required">
                    The Mailing ZipCode is required
                </span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('Speciality')">
                <label for="Speciality">Speciality</label>
                <md-input v-model="form.Speciality" id="Speciality" name="Speciality" />
                <span
                  class="md-error"
                  v-if="!$v.form.Speciality.required">
                  The Mailing ZipCode is required
                </span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-30">
              <md-field :class="getValidationClass('MedicalSchool')">
                <label for="medicalSchool">Medical school</label>
                <md-input
                  name="medicalSchool"
                  id="medicalSchool"
                  autocomplete="medical-school"
                  v-model="form.MedicalSchool"
                  :disabled="sending"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.MedicalSchool.required"
                >Medical school is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-size-20">
              <md-field :class="getValidationClass('NPI_ID')">
                <label for="npiID">NPI ID</label>
                <md-input
                  name="npiID"
                  id="npiID"
                  autocomplete="npi-id"
                  v-model="form.NPI_ID"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.NPI_ID.required">NPI ID is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20">
              <md-field :class="getValidationClass('Degree')">
                <label for="degree">Degree</label>
                <md-input
                  name="degree"
                  id="degree"
                  autocomplete="degree"
                  v-model="form.Degree"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.Degree.required">Degree is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20">
              <md-field :class="getValidationClass('YearAwarded')">
                <label for="degree">Year Awarded</label>
                <md-input v-model="form.YearAwarded" id="yearAwarded" name="yearAwarded" />
                <span
                  class="md-error"
                  v-if="!$v.form.YearAwarded.required"
                >The year awarded is required</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Save</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The data was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      ProviderName: null,
      ProviderFIrstName: null,
      ProviderMidName: null,
      ProviderLastName: null,
      PrimaryAddress1: null,
      PrimaryAddress2: null,
      PrimaryPhone: null,
      NPI_ID: null,
      MedicalSchool: null,
      Degree: null,
      YearAwarded: null,
      PrimaryCity: null,
      PrimaryState: null,
      PrimaryZipCode: null,
      MailingAddress1: null,
      MailingAddress2: null,
      MailingCity: null,
      MailingState: null,
      MailingZipCode: null,
      PrimaryActivity: null,
      Speciality: null
    },
    userSaved: false,
    sending: false,
    lastUser: null,
    single: null
  }),
  validations: {
    form: {
      ProviderName: {
        required,
        minLength: minLength(3)
      },
      ProviderFIrstName: {
        required,
        minLength: minLength(3)
      },
      ProviderLastName: {
        required,
        minLength: minLength(3)
      },
      PrimaryAddress1: {
        required,
        minLength: minLength(3)
      },
      PrimaryPhone: {
        required
      },
      NPI_ID: {
        required
      },
      MedicalSchool: {
        required
      },
      Degree: {
        required
      },
      YearAwarded: {
        required
      },
      PrimaryCity: {
        required
      },
      PrimaryState: {
        required
      },
      PrimaryZipCode: {
        required
      },
      MailingCity: {
        required
      },
      MailingState: {
        required
      },
      MailingZipCode: {
        required
      },
      Speciality: {
        required
      },
      MailingAddress1:  {
        required
      },
      MailingAddress2:  {
        required
      },
      PrimaryActivity: {
       required
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.ProviderName = null;
      this.form.ProviderFIrstName = null;
      this.form.ProviderMidName = null;
      this.form.ProviderLastName = null;
      this.form.PrimaryAddress1 = null;
      this.form.PrimaryAddress2 = null;
      this.form.NPI_ID = null;
      this.form.MedicalSchool = null;
      this.form.Degree = null;
      this.form.YearAwarded  = null;
      this.form.PrimaryCity  = null;
      this.form.PrimaryState  = null;
      this.form.PrimaryZipCode  = null;
      this.form.MailingAddress1  = null;
      this.form.MailingAddress2  = null;
      this.form.MailingCity  = null;
      this.form.MailingState  = null;
      this.form.MailingZipCode  = null;
      this.form.PrimaryActivity  = null;
      this.form.Speciality  = null;
    },
    fillFake(event) {
      event.preventDefault();
      event.stopPropagation();
      this.form.ProviderName = 'Provider Name';
      this.form.ProviderFIrstName = 'Peter';
      this.form.ProviderMidName = 'Michael';
      this.form.ProviderLastName = 'Tomson';
      this.form.PrimaryAddress1 = 'Plaid Pantry';
      this.form.PrimaryAddress2 = '1505 N Going St';
      this.form.PrimaryPhone = '(238) 555-5555';
      this.form.NPI_ID = '555';
      this.form.MedicalSchool = 'Karolinska Institute';
      this.form.Degree = 'Doctor of Osteopathic Medicine';
      this.form.YearAwarded = '2001';
      this.form.PrimaryCity = 'San Francisco';
      this.form.PrimaryState = 'CA';
      this.form.PrimaryZipCode = '90210',
      this.form.MailingAddress1 = 'Plaid Pantry',
      this.form.MailingAddress2 = '1505 N Going St',
      this.form.MailingCity = 'San Francisco';
      this.form.MailingState = 'CA';
      this.form.MailingZipCode = '90210',
      this.form.PrimaryActivity = 'Cardiologist',
      this.form.Speciality = 'Cardiologist'
    },
    saveUser() {
      this.sending = true;
      this.$http.post(this.$apiUrl+'/providers', {
          ...this.form
        })
        .then(() => {
          this.userSaved = true;
          this.sending = false;
          this.clearForm();
        })
        .catch((e) => {
          this.userSaved = true;
          this.sending = false;
          this.clearForm();
        });
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.d-none {
  display: none;
}
</style>