<template>
  <div>
    <div class="view-container">
      <div class="view-title">Data and Deadlines</div>
      <div class="view-main with-setting">
        <el-table :data="timetable" stripe>
          <el-table-column align="center">
            <template v-slot="scope">
              <p v-if="scope.row.ifstrong"><strong>{{scope.row.issue}}</strong></p>
              <p v-else>{{scope.row.issue}}</p>
            </template>
          </el-table-column>
          <el-table-column align="center">
            <template v-slot="scope">
              <p v-if="scope.row.ifstrong"><strong>{{scope.row.time}}</strong></p>
              <p v-else>{{scope.row.time}}</p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateDeadlineView',
  data () {
    return {
      timetable: [
        { issue: 'Abstract submission', time: '01.01.2023', ifstrong: false },
        { issue: 'Abstract submission ends', time: '30.04.2023', ifstrong: true },
        { issue: 'Author notification (abstract)', time: '15.06.2023', ifstrong: false },
        { issue: 'Online registration', time: '01.04.2023', ifstrong: false },
        { issue: 'Early Bird registration ends', time: '30.06.2023', ifstrong: true },
        { issue: 'Online registration ends', time: '30.08.2023', ifstrong: false }

      ]
    }
  }
}
</script>

<style scoped></style>
