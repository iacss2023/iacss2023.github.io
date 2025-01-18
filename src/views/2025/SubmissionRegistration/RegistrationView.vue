<template>
  <div>
    <div class="view-container">
      <div class="view-title">Registration Information</div>
      <div class="view-main with-setting">
<!--        Will come soon.-->
        <div class="view-section">
          <div class="view-section-title">Registration Instructions</div>
          <ul>
            <li><p>
              Participants please fill and submit the <a href="https://docs.google.com/forms/d/e/1FAIpQLScGfNc7-9vax6PnUGfyuiawEss650RzzJoOv-2qdcb_YrHPFg/viewform?usp=header" target="_blank"><strong>form for registration</strong></a>
            </p></li>
            <li><p>At least one author will register for each accepted paper and present the paper at the conference; otherwise, the paper will not be included in the conference proceedings</p></li>
            <li><p>The registration will be confirmed after registration fee being received in full and registration form being submitted</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Registration Fee</div>
          <el-table :data="feeInfo" stripe>
            <el-table-column label="">
              <template v-slot="scope"><p>{{scope.row.affair}}</p></template>
            </el-table-column>
            <el-table-column label="Early Bird* (JPY)" align="center">
              <template v-slot="scope"><p style="text-align: center;">¥{{scope.row.earlyBird}}</p></template>
            </el-table-column>
            <el-table-column label="Standard Fee (JPY)" align="center">
              <template v-slot="scope"><p style="text-align: center">¥{{scope.row.standard}}</p></template>
            </el-table-column>
          </el-table>
          <p class="note title" style="margin-top: 10px">*EARLY-BIRD REGISTRATION ENDS 30.06.2025</p>
          <p class="note">Ad Exhibitors: Only allowed to the stand staff of an exhibiting company. As the booth rental automatically includes one full registration per booth, exhibitors will be allowed to register one additional person per single booth, provided the person is working on the booth.</p>
        </div>
        <div class="view-section">
          <div class="view-section-title">What is included in the registration fee?</div>
          <ul>
            <li><p>Access to all scientific sessions</p></li>
            <li><p>Access to commercial exhibition</p></li>
            <li><p>Access to poster exhibition</p></li>
            <li><p>Welcome reception</p></li>
            <li><p>Conference dinner</p></li>
            <li><p>Coffee breaks</p></li>
            <li><p>Full conference material</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Payment</div>
          <ul>
            <li><p>After submitting the registration form, a payment link will appear where you can redirect and complete your payment.</p></li>
            <li><p>In case you miss the link, you can click on this <a href="https://www.paypal.com/ncp/payment/SL5CUNQDWMKFQ" target="_blank"><strong>link</strong></a> to pay the fee using PayPal.</p></li>
            <li><p>Registration confirmation via e-mail as soon as the payment is received.</p></li>
            <li><p>The detailed payment information can be found in the registration form.</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">Cancellation Policy</div>
          <ul>
            <li><p>Refunds will be provided for cancellations made on or before 15th of Aug. of 2025, excluding PayPal transaction fees.</p></li>
            <li><p>All refunds will be issued after the conference.</p></li>
            <li><p>Cancellations made after this date will not be refunded.</p></li>
            <li>
              <p>All refund requests need to be submitted to the organizer first, and the organizer will notify the event management team for processing.</p>
              <p>Email: <a href="mailto:iacss.2025.tgu@gmail.com">iacss.2025.tgu@gmail.com</a></p>
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
        {
          affair: 'Full – Non-member',
          earlyBird: '40,000',
          standard: '45,000'
        },
        {
          affair: 'Full - Member',
          earlyBird: '35,000',
          standard: '40,000'
        },
        {
          affair: 'Student - Non-member',
          earlyBird: '20,000',
          standard: '25,000'
        },
        {
          affair: 'Student - Member',
          earlyBird: '15,000',
          standard: '20,000'
        },
        {
          affair: 'Exhibitors',
          earlyBird: '50,000',
          standard: '70,000'
        },
        {
          affair: 'Accompanying Person',
          earlyBird: '15,000',
          standard: '20,000'
        }
      ],
      paymentAddress: require('../../../assets/2025/payment_qrcode.png')
    }
  },
  mounted () {
    this.loadPaypalScript()
  },
  methods: {
    loadPaypalScript () {
      // 动态加载 PayPal SDK 脚本
      const script = document.createElement('script')
      script.src = 'https://www.paypal.com/sdk/js?client-id=BAA6JkLZIhnUCauY0Ob-OItxwBvfJSMIYhCi09Drn3SnbF-iVu2-UbUO66xdh2WVQpZ-OBiDid5_Nd1Rek&components=hosted-buttons&disable-funding=venmo&currency=JPY'
      script.async = true
      script.onload = this.renderPaypalButton
      document.body.appendChild(script)
    },
    renderPaypalButton () {
      // // 渲染 PayPal 按钮
      // paypal.HostedButtons({
      //   hostedButtonId: 'SL5CUNQDWMKFQ'
      // }).render(this.$refs.paypalContainer)
    }
  }
}

</script>

<style scoped>
.note.title {
  font-size: 16px;
  color: #505050;
  font-weight: 600;
}

#registration_button {
  margin-bottom: 20px;
}

.pp-SL5CUNQDWMKFQ {
  text-align: center;
  border: none;
  border-radius:0.25rem;
  min-width:11.625rem;
  padding:0 2rem;
  height:2.625rem;
  font-weight:bold;
  background-color:#FFD140;
  color:#000000;
  font-family:"Helvetica Neue",Arial,sans-serif;
  font-size:1rem;
  line-height:1.25rem;
  cursor:pointer;
}

</style>
