<template>
  <div>
    <div class="view-container">
      <div class="view-title">Registration Information</div>
      <div class="view-main with-setting">
        <div class="view-section-title">TBD</div>
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
