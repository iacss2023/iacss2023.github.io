<template>
  <div>
    <div class="view-container">
      <div class="view-title">Program</div>
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
  name: 'ProgramView',
  data () {
    return {
      programSchedule: [
        { program: 'Check in', time: 'Wednesday, 27.09.2023' },
        { program: 'Opening ceremony, Keynote speeches and sessions', time: 'Thursday, 28.09.2023' },
        { program: 'Keynote speeches and sessions, Conference dinner', time: 'Friday, 29.09.2023' },
        { program: 'Keynote speeches and sessions, Closing ceremony (Morning), City sightseeing (afternoon and evening)', time: 'Saturday, 30.09.2023' },
        { program: 'Departure', time: 'Sunday, 1.10.2023' }

      ]
    }
  }
}
</script>

<style scoped></style>
