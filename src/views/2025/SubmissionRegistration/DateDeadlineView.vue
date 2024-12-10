<template>
  <div>
    <div class="view-container">
      <div class="view-title">Dates and Deadlines</div>
      <div class="view-main with-setting">
        <el-table
          :data="timetable"
          stripe
          :row-class-name="tableRowClassName">
          <el-table-column align="center">
            <template v-slot="scope">
              <p v-if="scope.row.ifstrong" :class="{bg: scope.row.ifbg}"><strong>{{scope.row.issue}}</strong></p>
              <p v-else :class="{bg: scope.row.ifbg}">{{scope.row.issue}}</p>
            </template>
          </el-table-column>
          <el-table-column align="center">
            <template v-slot="scope">
              <p v-if="scope.row.ifstrong" :class="{bg: scope.row.ifbg}"><strong>{{scope.row.time}}</strong></p>
              <p v-else :class="{bg: scope.row.ifbg}">{{scope.row.time}}</p>
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
        { issue: 'Abstract submission opens', time: '30.11.2024', ifstrong: true, ifbg: true },
        { issue: 'Second call for papers', time: '05.01.2025', ifstrong: false, ifbg: false },
        { issue: 'Third call for papers', time: '15.03.2025', ifstrong: false, ifbg: false },
        { issue: 'Abstract submission ends', time: '15.04.2025 at 23:59 AoE (UTC-12)', ifstrong: true, ifbg: false },
        { issue: 'Author notification (abstract)', time: '15.05.2025', ifstrong: false, ifbg: false }
        // { issue: 'Online registration', time: '22.05.2023', ifstrong: false, ifbg: false },
        // { issue: 'Early Bird registration ends', time: '30.06.2023', ifstrong: true, ifbg: false },
        // { issue: 'Online registration ends', time: '30.08.2023', ifstrong: false, ifbg: true }
      ]
    }
  }
}
</script>

<style scoped>
:deep(.view-container .view-main.with-setting p){
  padding: 5px 5px;
  margin: 0;
}
.bg {
  //background-color: #f5dae3;
  color: #c8839c;
}
</style>
