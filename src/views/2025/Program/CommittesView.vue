<template>
  <div>
    <div class="view-container">
      <div class="view-title">Committees</div>
      <div class="view-main">
        <div class="view-text">
          <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="Scientific Committee" name="scientific">
              <div class="view-section-title">Scientific Committee (List of recommendations)</div>
              <div v-for="people in committee.scientific" :key="people.people" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.people}}</div>
                <p>{{people.institution}}</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Organizing Committee" name="organizing">
              <div class="view-section-title">Organizing Committee (List of recommendations)</div>
              <div v-for="people in committee.organizing" :key="people.people" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.people}}</div>
                <p>{{people.institution}}</p>
              </div>
            </el-tab-pane>
          </el-tabs>
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
      activeTab: 'scientific',
      committee: {
        organizing: [
          { people: 'Prof. XXX', institution: 'Institution, Country' }
        ],
        scientific: [
          { people: 'Prof. XXX', institution: 'Institution, Country' }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
