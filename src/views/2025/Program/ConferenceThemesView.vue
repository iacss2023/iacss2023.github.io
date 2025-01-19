<template>
  <div>
    <div class="view-container">
      <div class="view-title">Conference Themes</div>
      <div class="view-main with-setting">
        <div class="view-section" style="border-bottom: none">
          <div class="view-section-title">International Symposium on Computer Science in Sport topics:</div>
          <ul>
            <template v-for="item in themes.iscss" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Examples for Special Applications:</div>
          <ul>
            <template v-for="item in themes.iscssApplications" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section" style="border-bottom: none">
          <div class="view-section-title">Sports and Exercise Science topics:</div>
          <ul>
            <template v-for="item in themes.exercise" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Examples for Special Applications:</div>
          <ul>
            <template v-for="item in themes.exerciseApplications" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceThemesView',
  data () {
    return {
      themes: {
        iscss: [
          'Modeling and Simulation', 'Data Analysis', 'Image Processing', 'Multimedia', 'Virtual Reality',
          'Visualization and Visual Analytics', 'Human Computer Interaction', 'Computer Vision', 'Big Data',
          'Internet of Things', 'Robotics', 'Information Systems', 'Machine Learning and Data Mining'
        ],
        iscssApplications: [
          'Feedback Systems', 'Predictive Modeling', 'Decision Support', 'Digital Games', 'Network Analysis',
          'Complex Systems Analysis', 'Sequence Analysis', 'Sensor Fusion'
        ],
        exercise: [
          'Biomechanics', 'Motor Control and Learning', 'Exercise Physiology and Sports Medicine',
          'Performance Analysis', 'Training, Coaching and Feedback', 'Sports Psychology',
          'Recreation and Rehabilitation', 'Sports Management'
        ],
        exerciseApplications: [
          'Modeling of Adaptation, and Training', 'Modeling of Performance and Fatigue',
          'Optimization of Strategies for Best Performance', 'Aging and Exercise', 'Assistive Technology',
          'Exergames', 'Talent Diagnostics and Development'
        ]
      }
    }
  }
}
</script>

<style scoped></style>
