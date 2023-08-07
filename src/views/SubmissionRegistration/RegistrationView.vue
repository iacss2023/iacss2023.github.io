<template>
  <div>
    <div class="view-container">
      <div class="view-title">Registration Information</div>
      <div class="view-main with-setting">
        <div class="view-section">
          <div class="view-section-title">Registration Instructions</div>
          <ul>
            <li><p>Participants please download the <b><a href="./IACSS 2023_registration_form.docx" download="IACSS_2023_registration_form.docx">registration form</a></b> and send your completed registration form to <b><a href="mailto:iacss.2023@zju.edu.cn">iacss.2023@zju.edu.cn</a></b></p></li>
            <li><p>At least one author will register for each accepted paper and present the paper at the conference; otherwise, the paper will not be included in the conference proceedings</p></li>
            <li><p>The registration will be confirmed after registration fee being received in full and registration form being submitted to the official email address</p></li>
            <li><p>For invoicing, please send the following information to the official email when submitting the registration form or later: participant's name, organization, email used to receive the invoice, invoice title, and tax ID.</p></li>
          </ul>
        </div>
        <div class="view-section">
<!--          <div id="registration_button"><el-button color="#ff9f3d" plain @click="$router.push('register')">Click Here for Registration</el-button></div>-->
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
            <li><p>Right to participate in the excursions of the program</p></li>
            <li><p>Full conference material</p></li>
            <li><p>Invitation to Conference Dinner</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Payment</div>
          <ul>
            <li><p>via bank transfer. When transferring fees, please note participant information, i.e., iacss + your name</p></li>
            <li><p>via Alipay. For participants who require Alipay, you can also transfer fee by scanning the QR code below, and please note the participant information when transferring, i.e., iacss + your name. </p></li>
<!--            <li><p>via credit card (the payment is visible on the confirmation)</p></li>-->
          </ul>
          <img :src="paymentAddress" style="width: 300px;margin-left: 100px"/>
          <p>Registration confirmation via e-mail as soon as the payment is received.</p>
          <p>The detailed payment information can be found in the registration form.</p>
        </div>
        <div class="view-section">
          <div class="view-section-title">Cancellation Policy</div>
          <ul>
            <li><p>The payment of the conference fee will be refunded upon requests until 17th of Sept. of 2023. All refunds will be issued after the conference. After this data, no refunds will be possible.</p></li>
            <li><p>Bank account: tax 8%, refund does not incur tax and handling fee.</p></li>
            <li><p>Alipay account: tax 8% + handling fee 0.06%, refunds do not incur taxes and fees, but the organizer still needs to bear the handling fee 0.06% that occurs after the payment arrives.</p></li>
            <li><p>Foreign currency account: the difference of exchange rate will be generated for both crediting and refunding, no tax and handling fee will be generated.</p></li>
            <li>
              <p>All refund requests need to be submitted to the organizer first, and the organizer will notify the event management team for processing.</p>
              <p>Email: <a href="mailto:iacss.2023@zju.edu.cn">iacss.2023@zju.edu.cn</a></p>
              <p>TEL: +86 571 8707 8752</p>
              <P>Office hours: 9:30 – 17:00 (GMT+8)</P>
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
      ],
      paymentAddress: require('@/assets/payment.png')
    }
  },
  methods: {}
}
</script>

<style scoped>
.note.title{
  font-size: 16px;
  color: #505050;
  font-weight: 600;
}
#registration_button{
  margin-bottom: 20px;
}
</style>
