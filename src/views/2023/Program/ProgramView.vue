<template>
  <div>
    <div class="view-container">
      <div class="view-title">Program</div>
      <div class="view-main with-setting">
        <iframe id="myframe"
                src="/Conference%20Schedule%20(9-20).pdf"
                width="800" height="800" frameborder="0"></iframe>
        <br>
        <el-button round type="info"><a class="download_text" href="/Conference%20Schedule%20(9-20).pdf" download="Conference Schedule (9-20).pdf">Download</a></el-button>
<!--        <el-table :data="programSchedule" stripe>-->
<!--          <el-table-column align="center">-->
<!--            <template v-slot="scope">-->
<!--              <p>{{scope.row.program}}</p>-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column align="center">-->
<!--            <template v-slot="scope">-->
<!--              <p>{{scope.row.time}}</p>-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--        </el-table>-->
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

<style scoped>
.download_text{
  text-underline: none;
  color: white;
  /*font-weight: bold;*/
  /*font-size: 16px;*/
  text-align: left;
}
</style>
