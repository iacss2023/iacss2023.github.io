<template>
  <div>
    <div class="view-container">
      <div class="view-title">重要时间</div>
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
  name: 'DateDeadlineViewCn',
  data () {
    return {
      timetable: [
        { issue: '摘要提交', time: '2023年1月1日', ifstrong: false },
        { issue: '摘要截止', time: '2023年4月30日', ifstrong: true },
        { issue: '作者通知', time: '2023年6月15日', ifstrong: false },
        { issue: '在线注册', time: '2023年4月1日', ifstrong: false },
        { issue: '早鸟票注册截止', time: '2023年6月30日', ifstrong: true },
        { issue: '在线注册截止', time: '2023年8月30日', ifstrong: false }

      ]
    }
  }
}
</script>

<style scoped></style>
