<template>
  <div>
    <div class="view-container">
      <div class="view-title">
        Welcome to the online registration of the 14<sup>th</sup> International Symposium on Computer Science in Sport
      </div>
      <div class="view-title">
        IACSS 2023
      </div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-section-title">Registration Instructions</div>
          <p>We look forward to receiving your booking.</p>
          <p>Please complete the following form carefully. You will be required to complete all boxes marked with an asterisk (*)<br>
          All other boxes may be completed to provide additional details.</p>
          <p>If you are already registered as conference participant and want to add or change program items belatedly, please feel free to send us an email (<a href="mailto:iacss.2023@zju.edu.cn">iacss.2023@zju.edu.cn</a>).</p>
          <p><b>Please note that after 20 minutes the registration process will be stopped automatically.<br>
          The data already present might get lost during this process.</b></p>
          <p>Please enter your personal data here:</p>
          <hr class="hr-block-wrapper">
          <div id="registration_form">
            <el-steps :space="200" :active="stepIndex-1" finish-status="success">
              <el-step title="Step1"></el-step>
              <el-step title="Step2"></el-step>
              <el-step title="Step3"></el-step>
              <el-step title="Step4"></el-step>
              <el-step title="Step5"></el-step>
            </el-steps>
            <el-card shadow="never">
              <el-form :model="registrationForm" label-width="120px" :rules="rules" ref="registrationForm" label-position="left">
                <el-form-item label="First Name" prop="firstName">
                  <el-input v-model="registrationForm.firstName" />
                </el-form-item>
                <el-form-item label="Last Name" prop="lastName">
                  <el-input v-model="registrationForm.lastName" />
                </el-form-item>
                <el-form-item label="Email" prop="email">
                  <el-input v-model="registrationForm.email" />
                </el-form-item>
                <el-form-item label="Affiliation / Organization" class="crossline" prop="affiliation">
                  <el-input v-model="registrationForm.affiliation" />
                </el-form-item>
                <el-form-item label="Institute / Department" class="crossline" prop="institution">
                  <el-input v-model="registrationForm.institution" />
                </el-form-item>
                <el-form-item label="Street " prop="street">
                  <el-input v-model="registrationForm.street" />
                </el-form-item>
                <el-form-item label="Postal Code" prop="postalCode">
                  <el-input v-model="registrationForm.postalCode" />
                </el-form-item>
                <el-form-item label="City" prop="city">
                  <el-input v-model="registrationForm.city" />
                </el-form-item>
                <el-form-item label="Country/ Region" prop="country" class="crossline">
                  <el-select v-model="registrationForm.country">
                    <el-option v-for="item in optionsForCountry" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Mobile" prop="mobile">
                  <el-input v-model="registrationForm.mobile" />
                </el-form-item>
              </el-form>
            </el-card>
            <div style="margin-top: 8px">
              <el-button @click="LastStep" v-if="stepIndex!=1">Back</el-button>
              <el-button type="primary" @click="NextStep">Next</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      registrationForm: {
        firstName: '',
        lastName: '',
        email: '',
        affiliation: '',
        institution: '',
        street: '',
        postalCode: '',
        city: '',
        country: '',
        mobile: ''
      },
      stepIndex: 1,
      rules: {
        firstName: [
          { required: true, trigger: 'blur' }
        ],
        lastName: [
          { required: true }
        ],
        email: [
          { required: true }
        ],
        institution: [
          { required: false }
        ],
        street: [
          { required: true }
        ],
        postalCode: [
          { required: true }
        ],
        city: [
          { required: true }
        ],
        country: [
          { required: true }
        ],
        mobile: [
          { required: false }
        ]
      },
      optionsForCountry: [
        'Afghanistan',
        'Åland Islands',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Congo, The Democratic Republic of The',
        'Cook Islands',
        'Costa Rica',
        "Cote D'ivoire",
        'Croatia',
        'Cuba',
        'Curaçao',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands (Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-bissau',
        'Guyana',
        'Haiti',
        'Heard Island and Mcdonald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran, Islamic Republic of',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        "Korea, Democratic People's Republic of",
        'Korea, Republic of',
        'Kuwait',
        'Kyrgyzstan',
        "Lao People's Democratic Republic",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libyan Arab Jamahiriya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Macedonia, The Former Yugoslav Republic of',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia, Federated States of',
        'Moldova, Republic of',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory, Occupied',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and The Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and The South Sandwich Islands',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Eswatini',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan (ROC)',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'United States Minor Outlying Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Virgin Islands, British',
        'Virgin Islands, U.S.',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log(2333)
    },
    NextStep () {
      switch (this.stepIndex) {
        case 1:// step1
          this.$refs.registrationForm.validate((valid) => {
            if (valid) {
              console.log('success')
            }
          })
      }
      console.log(this.stepIndex)
      this.stepIndex++
    },
    LastStep () {
      console.log(this.stepIndex)
      this.stepIndex--
    }
  }
}
</script>

<style scoped>
.view-title{
  text-transform: none;
}
</style>
