<template>
  <div>
    <div class="view-container">
      <div class="view-title">Organizing Committee</div>
      <div class="view-main">
        <div class="view-text">
<!--          <el-tabs v-model="activeTab" class="demo-tabs">-->
<!--            <el-tab-pane label="Scientific Committee" name="scientific">-->
<!--              <div class="view-section-title">Scientific Committee (List of recommendations)</div>-->
<!--              <div v-for="people in committee.scientific" :key="people.people" class="view-section" style="border-bottom: none">-->
<!--                <div class="view-section-title small">{{people.people}}</div>-->
<!--                <p>{{people.institution}}</p>-->
<!--              </div>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="Organizing Committee" name="organizing">-->
<!--              <div class="view-section-title">Organizing Committee (List of recommendations)</div>-->
              <div v-for="people in committee.organizing" :key="people.people" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.people}}</div>
                <p>{{people.institution}}</p>
              </div>
<!--            </el-tab-pane>-->
<!--          </el-tabs>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommittesView',
  data () {
    return {
      // activeTab: 'scientific',
      committee: {
        organizing: [
          { people: 'Prof. Dr. Martin Lames', institution: 'Technical University of Munich, Germany' },
          { people: 'Prof. Dr. Arnold Baca', institution: 'University of Vienna, Austria' },
          { people: 'Prof. Dr. Hui Zhang', institution: 'Zhejiang University, China' },
          { people: 'Prof. Dr. Daniel Link', institution: 'Technical University of Munich, Germany' },
          { people: 'Dr. Juliana Exel', institution: 'University of Vienna, Austria' },
          { people: 'Asst. Prof. Dr. Komar John', institution: 'Nanyang Technological University, Singapore' },
          { people: 'Prof. Dr. Claude Karcher', institution: 'Strasbourg University. France' }
        ]
        // scientific: [
        //   { people: 'Prof. Dr. Hui Zhang', institution: 'Zhejiang University, China' },
        //   { people: 'Prof. Dr. Martin Lames', institution: 'Technical University of Munich, Germany' },
        //   { people: 'Prof. Dr. Arnold Baca', institution: 'University of Vienna, Austria' },
        //   { people: 'Dr. Daniel Link', institution: 'Technical University of Munich, Germany' },
        //   { people: 'Prof. Dr. Jesse Davis', institution: 'University of Leuven, Belgium' },
        //   { people: 'Prof. Dr. Hayri Ertan', institution: 'Eskisehir Technical University, Turkey' },
        //   { people: 'Prof. Dr. Yingcai Wu', institution: 'Zhejiang University, China' },
        //   { people: 'Prof. Dr. Stuart Morgan', institution: 'AIS Canberra/ LaTrobe University, Australia' },
        //   { people: 'Prof. Dr. Kerstin Witte', institution: 'Otto-von-Guericke Universität, Germany' },
        //   { people: 'Dr. Tiago Russomanno', institution: 'University of Brasilia, Brazil' },
        //   { people: 'Prof. Dr. Daniel Memmert', institution: 'German Sports University, Germany' },
        //   { people: 'Dr. Juliana Exel', institution: 'University of Vienna, Austria' },
        //   { people: 'Prof. Dr. Peter Dabnichki', institution: 'RMIT University, Australia' },
        //   { people: 'Prof. Dr. Larry Katz', institution: 'University of Calgary, Canada' },
        //   { people: 'Dr. Victor Cossich', institution: 'University of Calgary，Canada' }
        // ]
      }
    }
  }
}
</script>

<style scoped></style>
