<template>
  <div>
    <div class="view-container">
      <div class="view-title">Speakers</div>
      <div class="view-main">
        <div class="view-section" v-if="!ifChosen">
          <el-row :gutter="10">
            <el-col :span="4" v-for="speaker in speakers" :key="speaker" style="margin-bottom: 10px">
              <div class="speaker-photo row">
                <img :src="speaker.img" class="photo" @click="choose_player(speaker)">
              </div>
              <span class="speaker-name">{{speaker.name}}</span>
            </el-col>
          </el-row>
        </div>
        <div class="view-section" v-else>
          <div class="view-section-title" @click="ifChosen=false" style="cursor: pointer">Back to List</div>
          <hr class="hr-block-wrapper">
          <el-row :gutter="10">
            <el-col :span="10">
              <div class="speaker-photo">
                <img :src="chosenSpeaker.img" class="photo">
              </div>
            </el-col>
            <el-col :span="14">
              <div class="speaker-info">
                <p class="name view-section-title">{{chosenSpeaker.name}}</p>
                <p class="intro view-section-title small">{{chosenSpeaker.introduction}}</p>
                <div class="detail">
                  <div v-for="item in chosenSpeaker.detail" :key="item">
                    <p>{{item}}</p>
                  </div>
                </div>
                <p class="intro view-section-title small" v-if="chosenSpeaker.abstractTitle">Talk: {{chosenSpeaker.abstractTitle}}</p>
                <div class="detail" v-if="chosenSpeaker.abstract!=null">
                  <div v-for="item in chosenSpeaker.abstract" :key="item">
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
  name: 'SpeakerView',
  data () {
    return {
      ifChosen: false,
      chosenSpeaker: {},
      speakers: [
        {
          img: require('../../../assets/keynote/martin_lames.jpg'),
          // img: require('src/assets/keynote/martin_lames.jpg'),
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
          img: require('../../../assets/keynote/hui zhang.jpg'),
          // img: require('src/assets/keynote/martin_lames.jpg'),
          name: 'Prof. Dr. Hui Zhang',
          introduction: 'Dr. Hui Zhang is a Professor of Department of Sports Science at Zhejiang University, Hangzhou, China.',
          detail: [
            "Dr. Hui Zhang's research interests revolve around sports performance analysis, encompassing modeling, data mining, simulation, and prediction. Particularly, he specializes in both theoretical and applied dimensions of table tennis tactical analysis. Dr. Hui Zhang holds a longstanding position as the principal expert in match analysis for the Chinese table tennis team and has contributed as a technical analyst during their campaigns in the Beijing, London, and Tokyo Olympics."
          ],
          abstractTitle: 'Key indicator for winning soccer matches: Net efficiency',
          abstract: [
            "Currently, soccer match analysis primarily focuses on research related to team tactics and techniques, such as offensive and defensive tactics or transitions between them. There is limited attention given to the issue of match efficiency. Consequently, it is often challenging to explain why a team dominates possession (with over 60% ball possession) during a game but fails to secure victory. This study, using examples from the top five European leagues and European competitions, introduces the concept and calculation formulas for soccer match efficiency, including offensive efficiency, defensive efficiency, and net efficiency. The results of this study indicate that net efficiency, within a certain range, can gauge the balance between a team's offensive and defensive efficiency and provide a better explanation for the phenomenon of 'dominating possession but failing to win.'"
          ]
        },
        {
          img: require('../../../assets/keynote/Passfoto_witte.jpg'),
          name: 'Prof. Dr. Kerstin Witte',
          introduction: 'Dr. Kerstin Witte is a Professor of Department of Sports Science at the Faculty of Human Sciences, Otto-von-Guericke-Universität Magdeburg.',
          detail: [
            "Dr. Kerstin Witte's research interests include human movement sciences, sports equipment technology/sports technology, biomechanical modeling, performance diagnostics, and application for the following sports (running, karate, horse riding, swimming, rowing)."],
          abstractTitle: 'Sensor-based technique diagnostics in Olympic Hammer Throw and Shot Put for Athletes and Para-Athletes',
          abstract: [
            'Real-time feedback can be used to increase the efficiency of athletics throws training. This is based on inertial sensors that can be used to calculate the performance-determining parameters after each throw and display them synchronized with a video. The presentation demonstrates examples of the hammer throw and the shot put. In general, the phasing of the movement can be based on the touchdown and lift-off of the feet by automatically detecting the acceleration peaks of the sensors attached to the feet.',
            'For the hammer throw, the throws of 6 athletes were analyzed using a full-body sensor suit, whereby 37 literature-based biomechanical parameters were determined. The following performance-determining parameters were established using correlation analysis and PCA: Stance times, hand speed or angular velocity, and twisting between hip and shoulder. A single sensor worn on the wrist also provides important information about the movement technique in the individual turns.',
            'For the rotational technique of the shot put, the performance-determining biomechanical parameters reported in the literature were determined using inertial sensors on various body segments. This makes it possible for the trainer to record the desired parameters individually for each athlete during training. Twisting also plays an important role here. Whereas in the past it was hardly possible to determine this parameter with sufficient accuracy using camera-based systems, this is no problem with sensor-based systems.',
            'Finally, the fact that it is now possible to implement a sensor in the throwing device is discussed. This allows recognition of technical errors based on the acceleration curve of the hammer or ball over time. The para-athletes are currently testing the specially produced sensor-based balls.',
            'Critically, however, it must be noted that it has not yet been possible to determine the speed and angle at the time of release with sufficient accuracy.'
          ]
        },
        {
          img: require('../../../assets/keynote/dietmar saupe.jpg'),
          name: 'Prof. Dr. Dietmar Saupe',
          introduction: 'Dr. Dietmar Saupe is a Professor of Department of Computer and Information Science, University of Konstanz, Konstanz, Germany.',
          detail: [
            "Dr. Dietmar Saupe's research interests include Multimedia Signal Processing, Computer Graphics, Scientific Visualization, Image Processing, and Sport Informatics. Specific recent research projects (Image and Video quality assessment and Sport informatics - Analysis and modeling of parameters in endurance sports)"],
          abstractTitle: 'Estimation of Heart Rate Response and Recovery from Field Rides',
          abstract: [
            'Heart rate recovery (HRR) is a measure of time required for the heart to resume its resting heart rate (HR) after a maximal intensity exercise load. Quicker recovery has been associated with better cardiorespiratory fitness (CRF). Therefore, HRR can be regarded as a fitness indicator and may serve as a tool to monitor the performance potential of an athlete as well as to optimize the training schedule. To reliably measure HRR requires the athlete to enter a controlled laboratory setup with an ergometer or a treadmill. There is no standard or generally agreed upon protocol to measure HRR. One common approach is to measure the drop of heart rate during the first 30, 60, or 120 seconds following the cessation of maximal exercise load. However, such laboratory testing interrupts training schedules and may not always be available in practice. In this work, we propose ways to estimate HRR from data collected with power meters and heart rate sensors during field rides. This allows for continuous and automatic tracking of HRR without the burden of regular lab tests Our general approach is as follows. Given power and HR data we estimate linear and dynamical systems that serve as accurate mathematical models to predict the heart rate from power data. These models can also predict the decay of HR after a bout of maximal exercise intensity and thereby yield a way to estimate the HRR.The first model assumes a linear function that defines the HR equilibrium for given (constant) power demands. An ordinary differential equation (ODE) rules that the HR derivative is proportional to the difference of the HR equilibrium for the current power demand and the present HR. For constant power demands this model prescribes exponential solutions for the HR that asymptotically approach the corresponding equilibrium HR. The inverse constant of proportionality in the ODE can be interpreted as the time duration required for the HR to drop 63% towards the resting HR after a presumed constant exercise load. This time constant therefore can take up the role of HRR. The second model is a Wiener system, given by the sum of the convolution of the uniformly sampled power signal and the resting HR. The (one-sided) convolution kernel accounts for the accumulated influence of the past power demand on the current heart rate and also models the delayed effect of changes in power on the heart rate. Again, the 63% drop towards the resting HR after a constant exercise load can be read off the model; it is given by the 63rd percentile of the convolution kernel.',
            'Our models are extended and improved versions of previously proposed models for HR prediction from power data. We discuss, validate, and compare the HR response and estimated HRR from the two models on a large dataset consisting of all recorded training and racing activities of three professional world class cyclists and three ambitious hobby riders collected over three consecutive years in about 4500 recorded rides.'
          ]
        },
        {
          img: require('../../../assets/keynote/yaping_zhong.jpg'),
          name: 'Prof. Dr. Yaping Zhong',
          introduction: 'Dr. Yaping Zhong is a Professor in Sports Big-data Research Center at Wuhan Sports University, Wuhan, China.',
          detail: [
            "Dr. Yaping Zhong's research interests include Intelligent Sports and data mining."],
          abstractTitle: 'Frontier Progress in Promoting Health through Exercise Supported by AI'
        },
        {
          img: require('../../../assets/keynote/tianbiao liu.jpg'),
          name: 'Dr. Tianbiao Liu',
          introduction: 'Dr. Tianbiao Liu is an Associate Professor at the College of Physical Education and Sports, Beijing Normal University in Beijing, China.',
          detail: [
            "Dr. Tianbiao Liu's research interests primarily focus on sports performance analysis, particularly the application of data mining and complex network analysis in team sports tactics and techniques."],
          abstractTitle: 'The Evolution of Football Tactics from the 2010 to 2022 World Cups: A Social Network Analysis Perspective'
        },
        {
          img: require('../../../assets/keynote/yingcai wu.jpg'),
          name: 'Prof. Dr. Yingcai Wu',
          introduction: 'Dr. Yingcai Wu is a Professor at the State Key Lab of CAD & CG, Zhejiang University, Hangzhou, China.',
          detail: [
            "Dr. Yingcai Wu's research interests lie in the fields of visual analytics, information visualization, and human-computer interaction, with a particular focus on sport computing, big data analysis, text visualization, and behavior analysis."]
        }
        // {
        //   img: require('../../../assets/keynote/sam_robertson.jpg'),
        //   name: 'Prof. Dr Sam Robertson',
        //   introduction: 'Dr. Sam Robertson is a Professor at Victoria University and the host of the popular future of sport podcasts.',
        //   detail: [
        //     'Sam Robertson is a researcher and consultant focusing on the future of sport. His work and research have spanned topics such as sports innovation, skill acquisition, sports analytics, organizational decision-making, and technology strategy. He has worked with a range of sporting organizations, including FIFA, The Australian Football League, San Antonio Spurs, Tennis Australia, Barça Innovation Hub, Kansas City Royals and Western Bulldogs, among others.'
        //   ]
        // },
        // {
        //   img: require('../../../assets/keynote/hyongjun_choi.png'),
        //   name: 'Prof. Dr. Hyongjun Choi',
        //   introduction: 'Dr. Hyongjun Choi is a Professor of the Department of Physical Education, College of Education at Dankook University.',
        //   detail: [
        //     "Prof. Choi has qualified for the Doctor of Philosophy on Performance Analysis of Sport at Cardiff Metropolitan University in the UK. He has experience as Performance Analyst in EPL (Cardiff City Football Club), K-League (FC Seoul, Incheon UTD. ), the Women's Professional Basketball Team in the UK, the Korean National Para-Ice Hockey team, and so on. In particular, he was involved in the 2018 Pyeongchang Paralympics, which worked for the TEAM KOREA as a para-ice hockey performance analyst. Previously, he served as General Secretary for the International Society of Performance Analysis in Sport from 2012 to 2016. He has been serving as General Secretary for the International Society of Performance Analysis of Sport in Asia since 2014. He has published over 80 peer-reviewed papers relating to the field of Computer Science in Sports, Performance Analysis of Sports, and Artificial Intelligence in Sports. Recently, his research interests have been to find an objective way to visualize data using data science techniques, develop contexts of efficient feedback to the practice field using AI, and predict playing patterns in sports."
        //   ]
        // },
        // {
        //   img: require('../../../assets/keynote/woo_mei_teng.png'),
        //   name: 'Dr. Woo Mei Teng',
        //   introduction: 'Dr. Woo Mei Teng is a Senior Conexus Manager of the School of Sports, Health and Leisure at the Republic Polytechnic.',
        //   detail: [
        //     'Dr. Mei Teng attained her Ph.D., majoring in Sports Pedagogy, at the University of Jyväskylä, Finland. Her area of specialization is balance and postural regulation, kinesiology, skill analysis, match analysis, and motor control and learning. With over 15 years of professional work experience, Mei Teng is committed to excellence in teaching, designing, and delivering quality curricula. Key accomplishments include the invention of a video-based analysis curriculum package leveraging Dartfish Technology. She works with sports coaches and supervises students’ projects in sports analysis (e.g., hockey, water polo, badminton). She also served as a performance analyst for the Singapore Indoor Hockey Men’s and Women’s teams during the 29th SEA Games. She has also served as team manager for Singapore Indoor Hockey Men’s Team for the 30th and 32nd SEA Games.']
        // },
        // {
        //   img: require('../../../assets/keynote/naoki suzuki.jpeg'),
        //   name: 'Dr.Naoki Suzuki',
        //   introduction: 'Dr. Naoki Suzuki is an associate professor at Tokyo Gakugei University in Tokyo, Japan.',
        //   detail: [
        //     'Dr. Naoki Suzuki completed his Ph.D. in 2007 on the assessment of physical education at Tokyo Gakugei University in Japan. His area of interest is teaching and research on physical education and teacher education. He used to be an elementary school teacher who taught elementary school students for 9 years and then transferred to the professor job in 2004. He worked at Saitama University from 2004 to 2009. He has worked at Tokyo Gakugei University since 2009. He has been an international researcher and has conducted numerous collaborative studies with foreign institutions. He has also been a visiting scholar at the State University of New York at Cortland in 2008 and at the University of Melbourne in 2017.',
        //     'Dr. Suzuki is an international speaker who has presented on topics related to technology in physical education. He strongly supports the Teaching Games for Understanding model and has been a keynote speaker and presenter around the world. He is currently Vice President at Large of IOHSK, Governor of Asia of IAHPEDS and Leadership Fellow of TGfU SIG (also Advisory Board Member).',
        //     'His research accomplishments are very numerous. He has published 50 more books and 150 more papers. He had over 200 research presentations. Recently, his practice of using technology in physical education has attracted a great deal of attention and these have been featured in many Japanese newspapers and on television.',
        //     'His recent research has been marked by collaborations with companies and researchers in other fields. He is highly interested in collaborating with researchers with diverse expertise.'
        //   ]
        // },
      ]
    }
  },
  methods: {
    choose_player (speaker) {
      console.log(speaker)
      this.chosenSpeaker = speaker
      this.ifChosen = true
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
.row.speaker-photo{
  //height: 100%;
}
.row.speaker-photo .photo{
  height: 200px;
  cursor: pointer;
}
.speaker-info .name{
  font-size: 20px;
  font-weight: bold;
}
.speaker-name{
  display: block;
  text-align: center;
}
.speaker-info .intro{
  font-size: 15px;
  font-weight: bold;
}
</style>
