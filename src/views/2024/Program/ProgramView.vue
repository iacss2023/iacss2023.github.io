<template>
  <div>
    <div class="view-container">
      <div class="view-title">Program</div>
      <div class="view-main with-setting">
<!--        <iframe id="myframe"-->
<!--                src="/Conference Schedule (9-20).pdf"-->
<!--                width="800" height="800" frameborder="0"></iframe>-->
<!--        <br>-->
<!--        <el-button round type="info"><a class="download_text" href="/Conference Schedule (9-20).pdf" download="Conference Schedule (9-20).pdf">Download</a></el-button>-->
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
        // { program: 'Check in', time: 'Saturday, 27.07.2024' },
        { program: 'Check in (Morning), Opening ceremony, Speech and Discussion', time: 'Sunday, 28.07.2024' },
        { program: 'Speech and Discussion, Workshop dinner', time: 'Monday, 29.07.2024' },
        { program: 'Speech and Discussion, Closing ceremony (Morning), City sightseeing (afternoon and evening)', time: 'Tuesday, 30.07.2024' },
        { program: 'Departure', time: 'Wednesday, 31.07.2024' }

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
