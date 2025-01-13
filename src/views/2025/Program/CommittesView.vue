<template>
  <div>
    <div class="view-container">
      <div class="view-title">Committees</div>
      <div class="view-main">
        <div class="view-text">
          <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="Scientific Committee" name="scientific">
<!--              <div class="view-section-title">Scientific Committee</div>-->
              <div class="view-section" style="border-bottom: none">
                <div class="view-section-title small">Chair: Dr. Walter Ho</div>
                <p>Visiting Scholar, Tokyo Gakugei University</p>
              </div>
              <div v-for="people in committee.scientific" :key="people.people" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.people}}</div>
                <p>{{people.institution}}</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Organizing Committee" name="organizing">
<!--              <div class="view-section-title">Organizing Committee</div>-->
              <div v-for="people in committee.organizing" :key="people.people" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.position}}: {{people.people}}</div>
                <p>{{people.institution}}</p>
              </div>
              <div class="view-section" style="padding: 0"></div>
              <div v-for="people in committee.others" :key="people.work" class="view-section" style="border-bottom: none">
                <div class="view-section-title small">{{people.work}}</div>
                <div v-if="people.people">{{people.people}} ({{people.institution}})</div>
                <div v-else>
                  <div v-for="p in people.peoples" :key="p.name">
                    <p>{{p.name}} ({{p.institution}})</p>
                  </div>
                </div>
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
          { position: 'Chair', people: 'Dr. Naoki Suzuki', institution: 'Associate Professor, Tokyo Gakugei University' },
          { position: 'Vice Chair', people: 'Dr. Hui Zhang', institution: 'Professor, Zhejiang University, China' },
          { position: 'Vice Chair', people: 'Dr. Walter Ho', institution: 'Visiting Scholar, Tokyo Gakugei University' },
          { position: 'Secretariat General', people: 'Mr. Takashi Fukushima', institution: 'Special-appointed Assistant Professor, Tokyo Gakugei University' },
          { position: 'Secretariat Vice General', people: 'Dr. Seiji Hirosawa', institution: 'Specially-appointed Lecturer, Toin Yokohama University' },
          { position: 'Secretariat Vice General', people: 'Mr. Koji Ishii', institution: 'Assistant Professor, Utsunomiya University' }
        ],
        others: [
          { work: 'Treasures: Registration, Membership and Website', people: 'Mr. Takashi Fukushima', institution: 'Special-appointed Assistant Professor, Tokyo Gakugei University' },
          { work: 'Public Relations', people: 'Dr. Naoki Suzuki', institution: 'Associate Professor, Tokyo Gakugei University' },
          { work: 'Coordinator for publishing the conference book', people: 'Dr. Walter Ho', institution: 'Visiting Scholar, Tokyo Gakugei University' },
          {
            work: 'Coordinator for organizing the sessions',
            peoples:
              [{ name: '*Invited sessions_Dr. Shin-Ichiro Moriyama', institution: 'Associate Professor, Tokyo Gakugei University' },
                { name: '*PE(Oral)_Dr. Walter Ho', institution: 'Visiting Scholar, Tokyo Gakugei University' },
                { name: '*Sports (Oral)_Dr. Seiji Hirosawa', institution: 'Specially-appointed Lecturer, Toin Yokohama University' },
                { name: '*Poster_ Mr. Koji Ishii', institution: 'Assistant Professor, Utsunomiya University' }]
          },
          {
            work: 'Coordinator for the registrations',
            peoples:
              [{ name: 'Mr. Shin-Ichiro Sewa', institution: 'Teacher, Matsudo Municipal High School' },
                { name: 'Mr. Ryoji Fujiwara', institution: 'Teacher, Sakado High School attached to the University of Tsukuba' }]
          },
          { work: 'Coordinator for the sponsorship & exhibition', people: 'Mr. Koji Ishii', institution: 'Assistant Professor, Utsunomiya University' },
          { work: 'Coordinator for managing the staff', people: 'Mr. Koji Ishii', institution: 'Assistant Professor, Utsunomiya University' },
          { work: 'Coordinator with other organization <hotel et.al.,>', people: 'Dr. Seiji Hirosawa', institution: 'Specially-appointed Lecturer, Toin Yokohama University' },
          {
            work: 'Coordinator for Lunch and Coffee Break',
            peoples:
              [{ name: 'Mr. Ryoji Fujiwara', institution: 'Teacher, Sakado High School attached to the University of Tsukuba' },
                { name: 'Mr. Shin-Ichiro Sewa', institution: 'Teacher, Matsudo Municipal High School' }]
          },
          {
            work: 'Coordinator for Reception & Dinner',
            peoples:
              [{ name: 'Ms. Yoshiko Haoka', institution: 'Associate Professor, Tokyo Seitoku University' },
                { name: 'Ms. Mizuho Shiozaki', institution: 'Professor, Akikusa Gakuen University' }]
          },
          { work: 'Coordinator for Excursion', people: 'Mr. Takashi Fukushima', institution: 'Special-appointed Assistant Professor, Tokyo Gakugei University' },
          {
            work: 'Coordinator for Ceremonies',
            peoples:
              [{ name: 'Ms. Mizuho Shiozaki', institution: 'Professor, Akikusa Gakuen University' },
                { name: 'Mr. Yoshiko Haoka', institution: 'Associate Professor, Tokyo Seitoku University' }]
          }
        ],
        scientific: [
          { people: 'Assoc. Prof. Dr. Naoki Suzuki', institution: 'Tokyo Gakugei University, Japan' },
          { people: 'Prof. Dr. Hui Zhang', institution: 'Zhejiang University, China' },
          { people: 'Prof. Dr. Martin Lames', institution: 'Technical University of Munich, Germany' },
          { people: 'Prof. Dr. Arnold Baca', institution: 'University of Vienna, Austria' },
          { people: 'Prof. Dr. Daniel Link', institution: 'Technical University of Munich, Germany' },
          { people: 'Prof. Dr. Jesse Davis', institution: 'University of Leuven, Belgium' },
          { people: 'Prof. Dr. Hayri Ertan', institution: 'Eskisehir Technical University, Turkey' },
          { people: 'Prof. Dr. Yingcai Wu', institution: 'Zhejiang University, China' },
          { people: 'Prof. Dr. Stuart Morgan', institution: 'AIS Canberra/ LaTrobe University, Australia' },
          { people: 'Prof. Dr. Kerstin Witte', institution: 'Otto-von-Guericke Universität, Germany' },
          { people: 'Prof. Dr. Tiago Russomanno', institution: 'University of Brasilia, Brazil' },
          { people: 'Prof. Dr. Daniel Memmert', institution: 'German Sports University, Germany' },
          { people: 'Prof. Dr. Sam Robertson', institution: 'Victoria University, Australia' },
          { people: 'Prof. Dr. Hyongjun Choi', institution: 'Dankook University, South Korea' },
          { people: 'Dr. Juliana Exel', institution: 'University of Vienna, Austria' },
          { people: 'Dr. Victor Cossich', institution: 'University of Calgary，Canada' }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
