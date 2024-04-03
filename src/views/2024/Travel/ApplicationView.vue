<template>
  <div>
    <div class="view-container">
      <div class="view-title">Application Information</div>
      <div class="view-main with-setting">
        <div class="view-section">
          <div class="view-section-title">Application Instructions</div>
          <ul>
            <li><p>Participants who want to participate in IACSS 2024 please download the <b><a href="./IACSS_2024_application_form.docx" download="IACSS_2024_application_form.docx">registration form</a></b> and send your completed registration form to <b><a href="mailto:zhang_hui@zju.edu.cn">zhang_hui@zju.edu.cn</a></b></p></li>
            <li><p>The registration will be confirmed after the registration form being submitted to the official email address</p></li>
            <li><p>To present the information of your report, we need <b>a photo of</b> the participant (width: height ≈ 3:4), <b>a brief biography</b> of the individual, and <b>a summary of the content of the report</b>.</p></li>
            <li><p>More details please refer to the <span class="link_text" @click="$router.push('/2024/speaker')">speaker page</span></p></li>
          </ul>
          <p class="note title" style="margin-top: 10px">*Participation fee</p>
          <p class="note">Participants are required to pay a participation fee, the exact amount of which will depend on the number of participants.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ApplicationView',
  data () {
    return {}
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
.link_text{
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
</style>
