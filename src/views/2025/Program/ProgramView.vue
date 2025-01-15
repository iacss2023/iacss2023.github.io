<template>
  <div>
    <div class="view-container">
      <div class="view-title">Program</div>
      <div class="view-main">
          <el-table :data="programSchedule" stripe>
            <el-table-column align="center">
              <template v-slot="scope">
                <p>{{scope.row.program}}</p>
              </template>
            </el-table-column>
            <el-table-column align="center" width="250">
              <template v-slot="scope">
                <p>{{scope.row.time}}</p>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramView',
  data () {
    return {
      programSchedule: [
        { program: 'Registration', time: 'Friday, 12.09.2025' },
        { program: 'Visiting IJSS, Opening Ceremony, Commemorative Keynote Speech, and Welcome Reception', time: 'Saturday, 13.09.2025' },
        { program: 'Full-day Conference Sessions', time: 'Sunday, 14.09.2025' },
        { program: 'Full-day Conference Sessions and Closing Ceremony', time: 'Monday, 15.09.2025' },
        { program: 'Visits and Exchange Activities', time: 'Tuesday, 16.09.2025' }
      ]
    }
  }
}
</script>

<style scoped>
.download_text{
  text-underline: none;
  color: white;
  /*font-weight: bold;*/
  /*font-size: 16px;*/
  text-align: left;
}
</style>
