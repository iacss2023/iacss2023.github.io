<template>
  <div>
    <div class="view-container">
      <div class="view-title">大会议程</div>
      <div class="view-main with-setting">
        <el-table :data="programSchedule" stripe>
          <el-table-column align="center">
            <template v-slot="scope">
              <p>{{scope.row.program}}</p>
            </template>
          </el-table-column>
          <el-table-column align="center">
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
  name: 'ProgramViewCn',
  data () {
    return {
      programSchedule: [
        { program: '报到', time: '2023年9月27日（星期三）' },
        { program: '开幕式、大会报告（全天）', time: '2023年9月28日（星期四）' },
        { program: '大会报告（全天）、晚宴', time: '2023年9月29日（星期五）' },
        { program: '大会报告、闭幕式（上午）、游览', time: '2023年9月30日（星期六）' },
        { program: '离会', time: '2023年10月1日（星期日）' }

      ]
    }
  }
}
</script>

<style scoped></style>
