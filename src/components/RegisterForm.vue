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
            <md-field :class="getValidationClass('fullName')">
              <label for="full-name">Full name</label>
              <md-input
                name="full-name"
                id="full-name"
                autocomplete="given-name"
                v-model="form.fullName"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.fullName.required">The full name is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('birthday')">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-10">
                  <label for="birthday">Birthday</label>
                </div>
                <div class="md-layout-item md-size-20">
                  <md-datepicker v-model="form.birthday" id="birthday" name="birthday" />
                  <span class="md-error" v-if="!$v.form.birthday.required">The birthday is required</span>
                </div>
              </div>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('address')">
              <label for="address">Address</label>
              <md-input
                name="address"
                id="address"
                autocomplete="address"
                v-model="form.address"
                :disabled="sending"
                type="address"
              />
              <span class="md-error" v-if="!$v.form.address.required">Address is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('practiceName')">
              <label for="practiceName">Practice name</label>
              <md-input
                name="practiceName"
                id="practiceName"
                autocomplete="practice-name"
                v-model="form.practiceName"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.practiceName.required">Practice name is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('practiceAddress')">
              <label for="practiceAddress">Practice address</label>
              <md-input
                name="practiceAddress"
                id="practiceAddress"
                autocomplete="address"
                v-model="form.practiceAddress"
                :disabled="sending"
                type="address"
              />
              <span
                class="md-error"
                v-if="!$v.form.practiceAddress.required"
              >Practice address is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('practicePhone')">
              <label for="practicePhone">Practice phone</label>
              <md-input
                name="practicePhone"
                id="practicePhone"
                autocomplete="phone"
                v-model="form.practicePhone"
                :disabled="sending"
                type="phone"
              />
              <span
                class="md-error"
                v-if="!$v.form.practicePhone.required"
              >Practice phone is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <div class="md-layout-item md-medium-size-100">
              <md-field :class="getValidationClass('workingDays')">
                <label for="workingDays">Practice days</label>
                <span
                  class="md-error"
                  v-if="!$v.form.workingDays.required"
                >Practice days are required</span>
              </md-field>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item" v-for="day in form.workingDaysData" v-bind:key="day.id">
                <md-checkbox
                  :disabled="sending"
                  v-model="form.workingDays"
                  :value="day.id"
                >{{day.text}}</md-checkbox>
              </div>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('workingHoursStart')">
                <label for="workingHoursStart">Practice hours from</label>
                <md-select
                  v-model="form.workingHoursStart"
                  name="workingHoursStart"
                  id="workingHoursStart"
                  :disabled="sending"
                  autocomplete="practice-hours"
                >
                  <md-option
                    v-for="hour in form.workingHours"
                    v-bind:key="hour"
                    :value="hour"
                  >{{hour}}</md-option>
                </md-select>
                <span
                  class="md-error"
                  v-if="!$v.form.workingHoursStart.required"
                >Practice hours start is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-size-25">
              <md-field :class="getValidationClass('workingHoursEnd')">
                <label for="workingHoursEnd">Practice hours to</label>
                <md-select
                  v-model="form.workingHoursEnd"
                  name="workingHoursEnd"
                  id="workingHoursEnd"
                  :disabled="sending"
                  autocomplete="practice-hours"
                >
                  <md-option
                    v-for="hour in form.workingHours"
                    v-bind:key="hour"
                    :value="hour"
                  >{{hour}}</md-option>
                </md-select>
                <span
                  class="md-error"
                  v-if="!$v.form.workingHoursEnd.required"
                >Practice hours end is required</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('majorProfActivity')">
              <label for="majorProfActivity">Major professional activity</label>
              <md-input
                name="majorProfActivity"
                id="majorProfActivity"
                autocomplete="majora-prof-activity"
                v-model="form.majorProfActivity"
                :disabled="sending"
              />
              <span
                class="md-error"
                v-if="!$v.form.majorProfActivity.required"
              >Major professional activity is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('selfDesignedSp')">
              <label for="selfDesignedSp">Self-designated speciality</label>
              <md-input
                name="selfDesignedSp"
                id="selfDesignedSp"
                autocomplete="self-designed-sp"
                v-model="form.selfDesignedSp"
                :disabled="sending"
              />
              <span
                class="md-error"
                v-if="!$v.form.selfDesignedSp.required"
              >Self-designated speciality is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('npiID')">
              <label for="npiID">NPI ID</label>
              <md-input
                name="npiID"
                id="npiID"
                autocomplete="npi-id"
                v-model="form.npiID"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.npiID.required">NPI ID is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('medicalSchool')">
              <label for="medicalSchool">Medical school</label>
              <md-input
                name="medicalSchool"
                id="medicalSchool"
                autocomplete="medical-school"
                v-model="form.medicalSchool"
                :disabled="sending"
              />
              <span
                class="md-error"
                v-if="!$v.form.medicalSchool.required"
              >Medical school is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('degree')">
              <label for="degree">Degree</label>
              <md-input
                name="degree"
                id="degree"
                autocomplete="degree"
                v-model="form.degree"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.degree.required">Degree is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('yearAwarded')">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-large-size-10 md-small-size-15 md-xsmall-size-20">
                  <label for="yearAwarded">Year awarded</label>
                </div>
                <div class="md-layout-item md-size-20">
                  <md-datepicker v-model="form.yearAwarded" id="yearAwarded" name="yearAwarded" />
                  <span
                    class="md-error"
                    v-if="!$v.form.yearAwarded.required"
                  >The year awarded is required</span>
                </div>
              </div>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('certifyingBoard')">
              <label for="certifyingBoard">Certifying board</label>
              <md-file v-model="single" />
              <span
                class="md-error"
                v-if="!$v.form.certifyingBoard.required"
              >Certifying board is required</span>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-100">
            <md-field :class="getValidationClass('certifications')">
              <label for="certifications">Certifications</label>
              <md-input
                name="certifications"
                id="certifications"
                autocomplete="certifications"
                v-model="form.certifications"
                :disabled="sending"
              />
              <span
                class="md-error"
                v-if="!$v.form.certifications.required"
              >Certifications are required</span>
            </md-field>
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
      fullName: null,
      address: null,
      practiceName: null,
      practiceAddress: null,
      practicePhone: null,
      workingDays: [],
      workingDaysData: [
        { text: "Monday", id: 0 },
        { text: "Tuesday", id: 1 },
        { text: "Wednesday", id: 2 },
        { text: "Thursday", id: 3 },
        { text: "Friday", id: 4 },
        { text: "Saturday", id: 5 },
        { text: "Sunday", id: 6 }
      ],
      workingHours: [...Array(25).keys()],
      workingHoursStart: null,
      workingHoursEnd: null,
      birthday: null,
      majorProfActivity: null,
      selfDesignedSp: null,
      npiID: null,
      medicalSchool: null,
      degree: null,
      yearAwarded: null,
      certifyingBoard: null,
      certifications: null
    },
    userSaved: false,
    sending: false,
    lastUser: null,
    single: null
  }),
  validations: {
    form: {
      fullName: {
        required,
        minLength: minLength(3)
      },
      address: {
        required,
        minLength: minLength(3)
      },
      practiceName: {
        required,
        minLength: minLength(3)
      },
      practiceAddress: {
        required
      },
      practicePhone: {
        required
      },
      workingDays: {
        required
      },
      workingHoursStart: {
        required
      },
      workingHoursEnd: {
        required
      },
      birthday: {
        required
      },
      majorProfActivity: {
        required
      },
      selfDesignedSp: {
        required
      },
      npiID: {
        required
      },
      medicalSchool: {
        required
      },
      degree: {
        required
      },
      yearAwarded: {
        required
      },
      certifyingBoard: {
      },
      certifications: {
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
      this.form.fullName = null;
      this.form.address = null;
      this.form.practiceName = null;
      this.form.practiceAddress = null;
      this.form.practicePhone = null;
      this.form.workingDays = null;
      this.form.workingHoursStart = null;
      this.form.workingHoursEnd = null;
      this.form.birthday = null;
      this.form.majorProfActivity = null;
      this.form.selfDesignedSp = null;
      this.form.npiID = null;
      this.form.medicalSchool = null;
      this.form.degree = null;
      this.form.yearAwarded  = null;
      this.form.certifyingBoard = null;
      this.form.certifications = null;
    },
    fillFake(event) {
      event.preventDefault();
      event.stopPropagation();
      this.form.fullName = 'Peter Tomson';
      this.form.address = 'Plaid Pantry, 1505 N Going St, Portland';
      this.form.practiceName = 'Cardiologist';
      this.form.practiceAddress = 'Plaid Pantry, 1505 N Going St, Portland';
      this.form.practicePhone = '(238) 555-5555';
      this.form.workingDays = [0,3];
      this.form.workingHoursStart = 13;
      this.form.workingHoursEnd = 20;
      this.form.birthday = '1985-08-06';
      this.form.majorProfActivity = 'Medical Teacher';
      this.form.selfDesignedSp = 'Anatomic Pathology';
      this.form.npiID = 555;
      this.form.medicalSchool = 'Princeton';
      this.form.degree = '90deg';
      this.form.yearAwarded = '2001-08-06';
      this.form.certifyingBoard = null;
      this.form.certifications = 'CCMA,RBT,AVA';
    },
    saveUser() {
      this.sending = true;
      this.$http.post(this.$apiUrl+'/doc', {
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
</style>