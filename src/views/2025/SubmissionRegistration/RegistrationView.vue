<template>
  <div>
    <div class="view-container">
      <div class="view-title">Registration Information</div>
      <div class="view-main with-setting">
        Will come soon.
<!--        <div class="view-section">-->
<!--          <div class="view-section-title">Registration Fee</div>-->
<!--          <el-table :data="feeInfo" stripe>-->
<!--            <el-table-column label="">-->
<!--              <template v-slot="scope"><p>{{scope.row.affair}}</p></template>-->
<!--            </el-table-column>-->
<!--            <el-table-column label="Early Bird* (USD)" align="center">-->
<!--              <template v-slot="scope"><p style="text-align: center;">{{scope.row.earlyBird}}</p></template>-->
<!--            </el-table-column>-->
<!--            <el-table-column label="Standard Fee (USD)" align="center">-->
<!--              <template v-slot="scope"><p style="text-align: center">{{scope.row.standard}}</p></template>-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--          <p class="note title" style="margin-top: 10px">*EARLY-BIRD REGISTRATION ENDS 30.06.2025</p>-->
<!--          <p class="note">Ad Exhibitors: Only allowed to the stand staff of an exhibiting company. As the booth rental automatically includes one full registration per booth, exhibitors will be allowed to register one additional person per single booth, provided the person is working on the booth.</p>-->
<!--        </div>-->
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
