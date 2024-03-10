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
          img: require('@/assets/keynote/martin_lames.jpg'),
          name: 'Prof. Dr. Martin Lames',
          introduction: 'Martin Lames is currently the Professor and Chairholder of Performance Analysis and Sports Informatics at Technical University of Munich.',
          detail: [
            'He received his doctoral degree (doctor of sports science) from Johannes Gutenberg University, Mainz. His habilitation in sports science is from Christian-Albrechts University, Kiel. Before his current position, he was a professor at the universities of Rostock and Augsburg.',
            'His main research areas are game sports and talent development. His research activities in game sports focus on concepts and methods for practical support, e.g., for German national teams in handball, beach volleyball, para table tennis, and wheelchair rugby. Mathematical modelling of game sports using state-transition models, recurrence analysis or social network analysis plays a role as well. A recent field of interest is to find ways of dealing with the widely acknowledged nature of game sports as dynamic interaction processes with emergent behavior. Here, dynamical systems theory with synergetics and chaos comes into play, as well as empirical proof of chance effects and their impact on match and season results.',
            'In addition to these practical and theoretical activities, there is a methodological interest in promoting methods in performance analysis. In earlier times, the design and validation of observational systems was dominant, but in the last two decades, methods of position detection came into reach. Actual topics here are the design of validation studies for the different technologies of position detection in sports and special problems such as comparability and gold standard development.',
            'During the decades of his scientific activities, informatics became an increasingly valuable tool for supporting practical and theoretical performance analysis. This has led to the foundation of the scientific discipline of sports informatics. Martin Lames was involved in the foundation of IACSS, a scientific umbrella organization for interdisciplinary groups applying informatics in sports. He was member of the founding board, general secretary, from 2013 to 2022 president and is now one of the honorary presidents of IACSS.',
            'He recently published a textbook “Performance Analysis in Game Sports – Concepts and Methods”. One of its main messages is that we mustn’t forget that the properties of game sports that cause troubles for scientists, e.g., emergence and unpredictability, are the reason why they are so attractive for spectators and media, i.e., why they exist.'
          ]
        },
        {
          img: require('@/assets/keynote/sam_robertson.jpg'),
          name: 'Prof. Dr Sam Robertson',
          introduction: 'Dr. Sam Robertson is a Professor at Victoria University and the host of the popular future of sport podcasts.',
          detail: [
            'Sam Robertson is a researcher and consultant focusing on the future of sport. His work and research have spanned topics such as sports innovation, skill acquisition, sports analytics, organizational decision-making, and technology strategy. He has worked with a range of sporting organizations, including FIFA, The Australian Football League, San Antonio Spurs, Tennis Australia, Barça Innovation Hub, Kansas City Royals and Western Bulldogs, among others.'
          ]
        },
        {
          img: require('@/assets/keynote/hyongjun_choi.png'),
          name: 'Prof. Dr. Hyongjun Choi',
          introduction: 'Dr. Hyongjun Choi is a Professor of the Department of Physical Education, College of Education at Dankook University.',
          detail: [
            "Prof. Choi has qualified for the Doctor of Philosophy on Performance Analysis of Sport at Cardiff Metropolitan University in the UK. He has experience as Performance Analyst in EPL (Cardiff City Football Club), K-League (FC Seoul, Incheon UTD. ), the Women's Professional Basketball Team in the UK, the Korean National Para-Ice Hockey team, and so on. In particular, he was involved in the 2018 Pyeongchang Paralympics, which worked for the TEAM KOREA as a para-ice hockey performance analyst. Previously, he served as General Secretary for the International Society of Performance Analysis in Sport from 2012 to 2016. He has been serving as General Secretary for the International Society of Performance Analysis of Sport in Asia since 2014. He has published over 80 peer-reviewed papers relating to the field of Computer Science in Sports, Performance Analysis of Sports, and Artificial Intelligence in Sports. Recently, his research interests have been to find an objective way to visualize data using data science techniques, develop contexts of efficient feedback to the practice field using AI, and predict playing patterns in sports."
          ]
        },
        {
          img: require('@/assets/keynote/woo_mei_teng.png'),
          name: 'Dr. Woo Mei Teng',
          introduction: 'Dr. Woo Mei Teng is a Senior Conexus Manager of the School of Sports, Health and Leisure at the Republic Polytechnic.',
          detail: [
            'Dr. Mei Teng attained her Ph.D., majoring in Sports Pedagogy, at the University of Jyväskylä, Finland. Her area of specialization is balance and postural regulation, kinesiology, skill analysis, match analysis, and motor control and learning. With over 15 years of professional work experience, Mei Teng is committed to excellence in teaching, designing, and delivering quality curricula. Key accomplishments include the invention of a video-based analysis curriculum package leveraging Dartfish Technology. She works with sports coaches and supervises students’ projects in sports analysis (e.g., hockey, water polo, badminton). She also served as a performance analyst for the Singapore Indoor Hockey Men’s and Women’s teams during the 29th SEA Games. She has also served as team manager for Singapore Indoor Hockey Men’s Team for the 30th and 32nd SEA Games.']
        },
        {
          img: require('@/assets/keynote/xie_xiao.jpg'),
          name: 'Dr. Xiao Xie',
          introduction: 'Dr. Xiao Xie is an Assistant Professor at the Department of Sports Science, Zhejiang University.',
          detail: [
            "Dr. Xiao Xie's research interests include data visualization, visual analytics, and human-computer interaction, with a focus on creating novel visual analysis techniques for supporting sports analysis. In football data analysis, he conducted research on the spatial and temporal changes of football formations and the dynamic changes of football passes, and designed spatial-temporal formation flows and topic-model-based passing analysis methods. In basketball data analysis, he focused on evaluating the performance of off-ball players, proposed a model to calculate the value of off-ball movements, and developed a visual analytics system to analyze massive off-ball running trajectories. He also conducted research on VR-based sports data analysis and developed an immersive visual analytics system for racket sports data. He published more than 20 papers in top journals and academic conferences, such as IEEE TVCG, CHI, KDD, etc. He received his Ph.D. degree in Computer Science from Zhejiang University."]
        },
        {
          img: require('@/assets/keynote/naoki suzuki.jpeg'),
          name: 'Dr.Naoki Suzuki',
          introduction: 'Dr. Naoki Suzuki is an associate professor at Tokyo Gakugei University in Tokyo, Japan.',
          detail: [
            'Dr. Naoki Suzuki completed his Ph.D. in 2007 on the assessment of physical education at Tokyo Gakugei University in Japan. His area of interest is teaching and research on physical education and teacher education. He used to be an elementary school teacher who taught elementary school students for 9 years and then transferred to the professor job in 2004. He worked at Saitama University from 2004 to 2009. He has worked at Tokyo Gakugei University since 2009. He has been an international researcher and has conducted numerous collaborative studies with foreign institutions. He has also been a visiting scholar at the State University of New York at Cortland in 2008 and at the University of Melbourne in 2017.',
            'Dr. Suzuki is an international speaker who has presented on topics related to technology in physical education. He strongly supports the Teaching Games for Understanding model and has been a keynote speaker and presenter around the world. He is currently Vice President at Large of IOHSK, Governor of Asia of IAHPEDS and Leadership Fellow of TGfU SIG (also Advisory Board Member).',
            'His research accomplishments are very numerous. He has published 50 more books and 150 more papers. He had over 200 research presentations. Recently, his practice of using technology in physical education has attracted a great deal of attention and these have been featured in many Japanese newspapers and on television.',
            'His recent research has been marked by collaborations with companies and researchers in other fields. He is highly interested in collaborating with researchers with diverse expertise.'
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
