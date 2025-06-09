<template>
  <div>
    <div class="view-container">
      <div class="view-title">Keynote Speakers</div>
      <div class="view-main">
        <hr class="hr-block-wrapper">
        <div v-for="speaker in speakers" class="view-section" :key="speaker">
          <el-row :gutter="10">
            <el-col :span="10">
              <div class="speaker-photo">
                <img :src="speaker.img" class="photo">
              </div>
            </el-col>
            <el-col :span="14">
              <div class="speaker-info">
                <p class="name view-section-title">{{speaker.name}}</p>
                <p class="intro view-section-title small">{{speaker.introduction}}</p>
                <div class="detail">
                  <div v-for="item in speaker.detail" :key="item">
                    <p>{{item}}</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeynoteView',
  data () {
    return {
      speakers: [
        {
          img: require('../../../assets/2025/keynote/Shariman_short.png'),
          name: 'Dr. Shariman Ismadi bin Ismail',
          introduction: 'Shariman Ismadi bin Ismail is a Senior Lecturer in Sports Biomechanics at the Faculty of Sports Science and Recreation, Universiti Teknologi MARA, Malaysia.',
          detail: [
          ]
        },
        {
          img: require('../../../assets/2025/keynote/hiroki.jpg'),
          name: 'Dr. Hiroki Ozaki',
          introduction: 'Hiroki Ozaki is a researcher in Sports Biomechanics at the Japan Institute of Sports Sciences (JISS) in Tokyo.',
          detail: [
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.speaker-photo{
  text-align: center;
}
.speaker-photo .photo{
  width: 100%;
  max-width: 500px;
  height: auto;
}
.speaker-info .name{
  font-size: 20px;
  font-weight: bold;
}
.speaker-info .intro{
  font-size: 15px;
  font-weight: bold;
}
</style>
