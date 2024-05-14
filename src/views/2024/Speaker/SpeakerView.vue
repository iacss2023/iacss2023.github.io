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
          introduction: 'A Professor and Chairholder of Performance Analysis and Sports Informatics at Technical University of Munich.',
          detail: [
            'He received his doctoral degree (doctor of sports science) from Johannes Gutenberg University, Mainz. His habilitation in sports science is from Christian-Albrechts University, Kiel. Before his current position, he was a professor at the universities of Rostock and Augsburg.',
            "Dr. Martin Lames's main research areas are game sports and talent development. His research activities in game sports focus on concepts and methods for practical support, e.g., for German national teams in handball, beach volleyball, para table tennis, and wheelchair rugby. Mathematical modelling of game sports using state-transition models, recurrence analysis or social network analysis plays a role as well. A recent field of interest is to find ways of dealing with the widely acknowledged nature of game sports as dynamic interaction processes with emergent behavior. Here, dynamical systems theory with synergetics and chaos comes into play, as well as empirical proof of chance effects and their impact on match and season results."
          ],
          abstractTitle: 'Research strategies for Practical Performance Analysis (PPA)',
          abstract: [
            'There are many good reasons to distinguish two sub-disciplines in performance analysis, theoretical and practical performance analysis (TPA and PPA). The differences concern for example research strategies (basic research vs evaluation), basic approaches (quantitative vs qualitative), research aims (general laws vs support for practice) and methodological issues (representative samples vs single case studies).',
            'As the overwhelming majority of published studies is from TPA, it is rewarding to identify possible research strategies, topics and suited methods for investigations in PPA. First approaches in the literature deal with the social role of analysts, their working conditions and requirements for their job. There is only scarce information what actually happens in the “magical analysis box” found in many PPA workflows. The talk aims at collecting information about this with input from the participants and at identifying future research directions.'
          ]
        },
        {
          img: require('../../../assets/keynote/hui zhang.jpg'),
          // img: require('src/assets/keynote/martin_lames.jpg'),
          name: 'Prof. Dr. Hui Zhang',
          introduction: 'A Professor of Department of Sports Science at Zhejiang University, Hangzhou, China.',
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
          introduction: 'A Professor of Department of Sports Science at the Faculty of Human Sciences, Otto-von-Guericke-Universität Magdeburg.',
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
          introduction: 'A Professor of Department of Computer and Information Science, University of Konstanz, Konstanz, Germany.',
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
          introduction: 'A Professor in Sports Big-data Research Center at Wuhan Sports University, Wuhan, China.',
          detail: [
            "Dr. Yaping Zhong's research interests include Intelligent Sports and data mining."],
          abstractTitle: 'Frontier Progress in Promoting Health through Exercise Supported by AI'
        },
        {
          img: require('../../../assets/keynote/tianbiao liu.jpg'),
          name: 'A.P. Dr. Tianbiao Liu',
          introduction: 'An Associate Professor at the College of Physical Education and Sports, Beijing Normal University in Beijing, China.',
          detail: [
            "Dr. Tianbiao Liu's research interests primarily focus on sports performance analysis, particularly the application of data mining and complex network analysis in team sports tactics and techniques."],
          abstractTitle: 'The Evolution of Football Tactics from the 2010 to 2022 World Cups: A Social Network Analysis Perspective'
        },
        {
          img: require('../../../assets/keynote/yingcai wu.jpg'),
          name: 'Prof. Dr. Yingcai Wu',
          introduction: 'A Professor at the State Key Lab of CAD & CG, Zhejiang University, Hangzhou, China.',
          detail: [
            "Dr. Yingcai Wu's research interests lie in the fields of visual analytics, information visualization, and human-computer interaction, with a particular focus on sport computing, big data analysis, text visualization, and behavior analysis."]
        },
        {
          img: require('../../../assets/keynote/John_Komar.png'),
          name: 'Asst. Prof. Dr. John Komar',
          introduction: 'An Assistant Professor at the National Institute of Education, Physical Education and Sport Science, Nanyang Technological University, Singapore.',
          detail: [
            "Dr. John Komar's research interests include the functional role of movement variability in investigating motor expertise and motor learning, performance analysis in sport, as well as the application of a constraints-led approach in pedagogy. He also conducts research and professional education on the use of data analytics and technology in Education and Sport."],
          abstractTitle: '"Even if we end up bottom of the table, we must always play our style of football" (M. Sarri): On the importance of flexibility and adaptability of playing styles for performing in football',
          abstract: [
            'The aim of this study was to examine the relationship between flexibility, stability, and adaptability of playing style responses throughout the season and team match performance outcomes in professional football. We examined 21,708 matches played in the top five leagues in Europe from the 2014/15 to 2019/20 season. Playing styles used by each team in each match was derived through a Gaussian-Mixture Model clustering of 31 match actions. The relationship between playing style choice and match outcome was also analysed using Multinomial Logistic Regression. However, team and opposition playing style predicted match outcome with low precision (39.78%). Flexibility, stability, and adaptability of playing styles were derived using the coefficient of unalikeability, and relationship with performance outcomes were computed using Pearson’s correlation. Playing style flexibility was positively correlated with both offensive and defensive performance outcomes and win frequency (p < .01). Conversely, teams displaying higher playing style stability conceded more shots in the penalty box but also demonstrated poorer offensive performance outcomes (p < .01). Playing style adaptability, indicative of high flexibility and stability, was positively associated with defensive performance outcomes and win frequency (p < .01). Our results indicate that high playing style variability, rather than mastering one specific style of play, may be a significant indicator of team performance. We therefore suggest that both flexibility and adaptability are key skills to develop during player development pathways. '
          ]
        },
        {
          img: require('../../../assets/keynote/karcher-claude.png'),
          name: 'Dr. Claude Karcher',
          introduction: 'A High performance optimization advisor at CREPS de Strasbourg, France. He is also an EHF expert and works for the French handball federation research team.',
          detail: [
            "Dr. Claude Karcher's research interests include optimising performance and medical monitoring. He has professional skills in handball training and scientific surveillance."],
          abstractTitle: 'Enhancing Handball Performance: The Impact and Evolution of Tracking Technologies',
          abstract: [
            'In the rapidly evolving world of team sports, the use of tracking technologies in handball has become a important point for enhancing player performance. This presentation aims to explore the various tracking technologies available, discuss their advantages and disadvantages, examine their applications for physical and tactical evaluations, and speculate on future trends and developments.',
            'Tracking technologies such as Inertial Measurement Units (IMU), Local Positioning Systems (LPS), Radio Frequency Identification (RFID), Ultra Wideband (UWB), and video tracking systems are revolutionizing the way handball coaches and training staff analyze and enhance player performance. Each technology offers unique capabilities for capturing precise data on player movements and actions which is crucial for detailed performance analysis and injury prevention.',
            'The advantages of these technologies are significant. They provide accurate and comprehensive data that help in the meticulous planning of training sessions, tailored to meet the specific physical demands of players. This data is instrumental in optimizing player conditioning and strategically managing their workload to prevent injuries. Furthermore, real-time data collection facilitates immediate feedback, allowing coaches to make informed decisions during matches.',
            'However, these technologies come with challenges. The high costs associated with setup and maintenance, the complexity of the necessary infrastructure, and the issues of portability and compatibility across different venues pose significant hurdles. Additionally, there are limitations in the ability of these systems to capture certain complex player movements and tactical actions, particularly in the chaotic and confined spaces typical of handball games.',
            'The practical applications of tracking technologies extend beyond physical load assessment to tactical analysis. They enable coaches to dissect game strategies, formations, and player engagements, enhancing tactical planning and execution. For instance, tracking data can be used to refine defensive strategies or optimize offensive setups by analyzing player positioning and movement patterns during various game phases.',
            'Looking to the future, the field of tracking technology in handball is poised for further innovation. Emerging trends suggest a shift towards integrated systems that combine different types of data collection technologies, offering a more holistic view of player performance and game dynamics. The integration of artificial intelligence and machine learning could further enhance the predictive accuracy of these systems, leading to more personalized and effective training and recovery programs.'
          ]
        },
        {
          img: require('../../../assets/keynote/daniel_link.jpg'),
          name: 'Prof. Dr. Daniel Link',
          introduction: 'A professor for Performance Analysis and Sports Analytics at Technical University Munich, Germany.',
          detail: [
            "Dr. Daniel Link's research deals with the systematics of training and competition as well as the digitalization of sports. This includes technological aspects of data acquisition, mathematical model-ing of performance phenomena, and visualization and analysis of data in sports. One focus of his work lies on using spatio-temporal data in team sports, e.g., by applying approaches from artificial intelligence and the development of physical and technical-tactical performance metrics. Daniel Link supports federations and top-level teams in implementing game analysis. He is a reviewer for scientific journals, member of various international scientific organizations and acts as a reviewer for the main German founding agency for sport science."],
          abstractTitle: 'On the road to Paris 2024 - Anticipation Training in Beach Volleyball Using VR goggles',
          abstract: [
            'Performance data has played a decisive role in game sports for decades. This applies both to opponent analysis for match preparation and to self-analysis for training control. In beach volleyball in particular, in addition to an effective serve, anticipation of the opponent\'s attack is crucial for a successful block/defense performance. This talk will present a joined project of Technical University Munich and the German Volleyball federation aiming to improve the anticipation of German national players in preparation of 2024 Olympics. The key idea of the project is to use video recordings of opponents and fade out the video short before the opponent player attacks the ball on the third contact. Players had to find visual cues which allow them to estimate the attacking technique (spike vs shot) and the direction (line vs. cross). In order to gain a deeper understanding of eye movements during anticipation per-formance in a defensive situation, an additional study of eye movements was carried out on national team players using eye tracking. Initial results show that national players clearly stand out from amateur players in terms of the prediction quality of defense-relevant ques-tions about the type and direction of an attacking shot. Furthermore, it was shown that the eye movements of top players and amateur players also differ, which may be a reason for their better anticipation skills.']
        },
        {
          img: require('../../../assets/keynote/brice_guignard.jpg'),
          name: 'Asst. Prof. Dr. Brice Guignard',
          introduction: 'An assistant professor at Inter-university Laboratory of Human Movement Sciences at Universite Claude Bernard Lyon 1, France.',
          detail: [
            "Dr. Brice Guignard's research interests include motor control analyses and biomechanics measurements applied to swimming or to the prediction of behaviors in professional handball from local positioning system (LPS) data acquisition."],
          abstractTitle: 'Scoring in Handball: What additional insights can ball tracking provide alongside player tracking data?',
          abstract: [
            'Today, certain player tracking technologies in handball are being used in some international competitions to collect various metrics that can be presented in real-time or at halftime to spectators.',
            'During our presentation, we will focus particularly on the data derived from player positions, but also and especially on ball data registered with LPS. Indeed, these systems capture the ball\'s position in 3 dimensions over time, approximately from 20 to 50 times per second.',
            'Through video analysis of 4 matches from a women\'s European championship, we have sequenced all shots from both teams, and we will compare this collection of objective data (timing of the shot; team that shot; result of the shot; additional info of the game context) with the LPS system recordings. This LPS analysis would allow to extract a set of metrics that accurately characterize the shots: the speed/acceleration of the ball; its coordinates on the field at the moment of the shot; the distance between the shot and the goal; the angle between the ball, the center of the goal, and the goalkeeper; the result of the shot: goal or not; the positioning of the ball in the goal when it crosses the line; etc.',
            'Ultimately, the objective of this work is to develop a model (for example an algorithm based on machine learning principles) that could automatically extract each shot from the match, along with contextual information (goalkeeper behavior, defensive positioning, technical characteristics of the shot, decision-making by the player responsible for the shot, etc.).'
          ]
        },
        {
          img: require('../../../assets/keynote/florentina_hettinga.jpg'),
          name: 'Prof. Dr. Florentina Hettinga',
          introduction: 'A professor at the Department of Sport, Exercise and Rehabilitation at Northumbria University.',
          detail: [
            "Dr Florentina Hettinga's research work revolves around exercise and exercise engagement in people with chronic conditions and/or disability, with a particular focus on fatigue, self-regulation and exercise motivation. She is involved in well-funded and impactful multi-center and cross-University projects on these topics, such as ReSpAct and ErasmusPlus IDEAL. Also, competition in elite athletes is a major topic of her research. She explores head-to-head competition in middle distance and endurance sports, both in the lab as well as in the field, and developed a framework to better understand competitive performance, pacing and in-race decision-making, interactions between athletes and potential ways to enhance training and performance using avatars. She explored novel ways to analyse large datasets of competitive performances to better understand athletes’ tactical decision-making and pacing. She is honoured to hold Fellowships of BASES, ECSS and ACSM, and is Editor-in-Chief of the Diamond open-access journal ‘European Journal of Adapted Physical Activity’."],
          abstractTitle: 'Sport Informatics in Speed Skating',
          abstract: [
            'Competition between athletes is central to sport. Athletes need to determine how and when to invest their limited energy resources to optimise and self-regulate their pace. In this process, they are incorporating their physiological and biomechanical capacity as well as environmental factors, such as the presence and behaviour of another athlete. In the Winter Olympic sport of speed skating, pacing and tactics are thus of crucial importance either when racing in a time trial (long track skating) or racing in heats competing directly (head-to-head) against other competitors. In this presentation, I will overview some of the ways we have explored and analysed pacing and tactics in different sport situations. I will also discuss potential applications in Summer Olympic Sports such as athletics/running, swimming, rowing and cycling.'
          ]
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
