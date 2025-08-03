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
                <div class="detail">
                  {{speaker.introduction}}
                  <div v-for="item in speaker.detail" :key="item">
                    <p>{{item}}</p>
                  </div>
                </div>
                <p class="view-section-title small">Keynote Title: {{speaker.keynote}}</p>
                <div class="detail">
                  <div v-for="item in speaker.keynote_detail" :key="item">
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
          detail: [
            'Shariman Ismadi bin Ismail is a Senior Lecturer in Sports Biomechanics at the Faculty of Sports Science and Recreation, Universiti Teknologi MARA, Malaysia.',
            'His main research focuses on sports biomechanics with a particular emphasis on footwear-surface interactions, human movement, and performance optimization. Combining engineering and data science, his work explores how sport-specific footwear and playing surfaces influence biomechanics, comfort, and injury risk across sports like futsal, soccer, and netball.'
          ],
          keynote: 'The Role of Footwear and Playing Surface Interaction in Sports Performance: Insights from Biomechanical Data Analysis',
          keynote_detail: [
            'This keynote explores how the interaction between footwear and playing surfaces influences athletic performance, biomechanics, and injury risk. Drawing on biomechanical and data-driven studies, it highlights the importance of sport-specific shoe-surface combinations in optimizing movement, comfort, and safety. Empirical findings from sports like soccer, futsal, and court games reveal how surface types and footwear design jointly affect traction, force transmission, and overall athletic outcomes.'
          ]
        },
        {
          img: require('../../../assets/2025/keynote/hiroki.jpg'),
          name: 'Dr. Hiroki Ozaki',
          detail: [
            'Hiroki Ozaki is a researcher in Sports Biomechanics at the Japan Institute of Sports Sciences (JISS) in Tokyo.'
          ],
          keynote: 'Beyond Quantity: Value-Driven Data Strategy for Elite Athlete Empowerment',
          keynote_detail: [
            'This keynote will present the Japan Institute of Sports Science\'s (JISS) integrated model for multidisciplinary sports science support, involving biomechanics, physiology, psychology, nutrition, and conditioning. It will emphasize how advancements in compact, high-precision devices have expanded the ability to collect performance data during both training and competition. However, the talk will also address the importance of preserving athletes’ self-awareness and adaptability by using data strategically.',
            'Key topics include: selecting meaningful data for feedback, determining the right timing and method of delivery, and ensuring that data integration enhances rather than disrupts coaching and training. Real-world examples and internal decision-making processes at JISS will be shared to illustrate these principles in practice.'
          ]
        },
        {
          img: require('../../../assets/2025/keynote/hirotaka jo.jpg'),
          name: 'Assoc. Prof. Dr. Hirotaka Jo',
          detail: [
            'Hirotaka Jo is an Associate Professor in the Department of Sport Science at Shizuoka Sangyo University, Japan.',
            'With a background in sports data science, physical education pedagogy, and measurement and evaluation, his research bridges advanced analytics and real-world sports practice. His work focuses on developing accessible performance analysis tools using methods such as machine learning and big data, particularly in soccer. Dr. Jo also contributes to educational innovation, integrating sports analytics into physical education to enhance both elite athlete development and general sports instruction.'
          ],
          keynote: 'A Challenge to Data-driven Physical Education: The Values of Sports Analytics as Teaching Materials and the Role of Data Science',
          keynote_detail: [
            'This keynote explores the integration of ICT and EdTech in physical education to enhance learning quality, support STEAM and social-emotional learning, and promote data-driven instruction. While such technologies offer new opportunities, they also present challenges such as overdependence, reduced physical activity, and implementation costs.',
            'The presentation features a practical case study using sports analytics in teaching, emphasizing the value of treating digital tools as educational materials and the key role of data and computer science in advancing physical education.'
          ]
        },
        {
          img: require('../../../assets/2025/keynote/koh koon teck.png'),
          name: 'Assoc. Prof. Dr. Koh Koon Teck',
          detail: [
            'Koon Teck is an Associate Professor at the Physical Education and Sports Science (PESS) Academic Group, National Institute of Education (NIE), Nanyang Technological University (NTU), Singapore.',
            'His research interests focus on sports coaching and pedagogy. He has published over 100 works and delivered more than 30 keynote talks worldwide. He has held major leadership roles in international basketball and physical education bodies and is currently a Distinguished Professor at South China Normal University, Secretary General of the Southeast Asian Basketball Association, and a certified FIBA coach developer.'
          ],
          keynote: 'Technology Meets Pedagogy: Advancing Effective Teaching and Learning in 21st-Century Physical Education and Sport',
          keynote_detail: [
            'The integration of technology with pedagogy is reshaping teaching and learning in physical education and sport (PES) in the 21st century. Tools such as video analysis, wearable trackers, observation instruments, and digital platforms, when effectively embedded in instructional frameworks, can enhance student engagement, support data-informed decision-making, and foster personalized, student-centered learning experiences. This synergy not only benefits learners but also improves the effectiveness of educators and coaches, enabling more active and reflective teaching practices.',
            'This keynote draws on insights from several completed projects to illustrate practical strategies for combining technology and pedagogy in PES. It highlights approaches that support real-time feedback, evidence-based reflection, and improved planning and evaluation. The presentation also explores implications for teacher and coach professional development, adult learning, and policy, emphasizing how technology can create more inclusive and impactful learning environments.'
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
