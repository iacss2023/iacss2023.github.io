<template>
  <div>
    <div class="view-container">
      <div class="view-title">Registration Information</div>
      <div class="view-main with-setting">
        <div class="view-section">
          <div class="view-section-title">Registration Fee</div>
          <el-table :data="feeInfo" stripe>
            <el-table-column label="">
              <template v-slot="scope"><p>{{scope.row.affair}}</p></template>
            </el-table-column>
            <el-table-column label="Early Bird* (USD)" align="center">
              <template v-slot="scope"><p style="text-align: center;">{{scope.row.earlyBird}}</p></template>
            </el-table-column>
            <el-table-column label="Standard Fee (USD)" align="center">
              <template v-slot="scope"><p style="text-align: center">{{scope.row.standard}}</p></template>
            </el-table-column>
          </el-table>
          <p class="note title" style="margin-top: 10px">*EARLY-BIRD REGISTRATION ENDS 30.06.2023</p>
          <p class="note">Ad Exhibitors: Only allowed to the stand staff of an exhibiting company. As the booth rental automatically includes one full registration per booth, exhibitors will be allowed to register one additional person per single booth, provided the person is working on the booth.</p>
        </div>
        <div class="view-section">
          <div class="view-section-title">What is included in the registration fee?</div>
          <ul>
            <li><p>Access to all scientific sessions</p></li>
            <li><p>Access to commercial exhibition</p></li>
            <li><p>Access to poster exhibition</p></li>
            <li><p>Coffee breaks</p></li>
            <li><p>Right to participate in the excursions of the programme</p></li>
            <li><p>Full conference material</p></li>
            <li><p>Invitation to Conference Dinner</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Payment</div>
          <ul>
            <li><p>via bank transfer (registration confirmation via e-mail as soon as the payment is received)</p></li>
            <li><p>via credit card (the payment is visible on the confirmation)</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Cancellation Policy</div>
          <ul>
            <li><p>The payment of the conference fee will be refunded upon requests until 24th of June of 2023. A deduction of 25% related to administrative charges will be applied. All refunds will be issued after the conference. After this date, no refund will be possible. Substitutions of attendees can be requested at any time, however, for any change of names a fee of 30 USD will be charged.</p></li>
            <li><p>In the case the conference is cancelled by any reason (COVID restrictions, for example), the full money payback is ensured</p></li>
            <li>
              <p>Cancellation and requests for refunds must be submitted to the event management team of the Zhejiang University:</p>
              <p>Email: TBD</p>
              <p>Fax: TBD</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationView',
  data () {
    return {
      feeInfo: [
        { affair: 'Full – Non-member', earlyBird: 340, standard: 370 },
        { affair: 'Full - Member', earlyBird: 320, standard: 340 },
        { affair: 'Student - Non-member', earlyBird: 220, standard: 240 },
        { affair: 'Student - Member', earlyBird: 190, standard: 210 },
        { affair: 'Exhibitors', earlyBird: 250, standard: 270 },
        { affair: 'Accompanying Person', earlyBird: 120, standard: 150 }
      ]
    }
  }
}
</script>

<style scoped>
.note.title{
  font-size: 16px;
  color: #505050;
  font-weight: 600;
}
</style>
