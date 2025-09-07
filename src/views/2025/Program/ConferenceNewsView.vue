<template>
  <div>
    <div class="view-container">
      <div class="view-title">Conference News</div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-section-title small">Conference Information Update</div>
          <p>Dear colleagues and friends,</p>
          <p>We are excited to announce that IACSS 2025 is just around the corner!</p>
          <p>For details regarding conference affairs, please refer to the documents below. The specific conference program can be found on the <span class="link_text" @click="$router.push('/2025/program')">program page</span>.</p>
          <p>We look forward to meeting you at the foot of beautiful Mount Fuji.</p>
          <p>Sincerely,</p>
          <p>Organizing Committee</p>
          <p>September 2, 2025</p>
          <iframe id="myframe"
                  src="/3rd%20IACSS%202025%20conference%20note%20(6%20September%202025).pdf"
                  width="980" height="600" frameborder="0"></iframe>
          <br>
          <el-button round type="info"><a class="download_text" href="/3rd%20IACSS%202025%20conference%20note%20(6%20September%202025).pdf" download="Conference Affairs (IACSS 2025).pdf">Download</a></el-button>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Reminders for Mt. Fuji Excursion Enrollment</div>
          <p>Dear colleagues and friends,</p>
          <p>We are pleased to invite IACSS 2025 participants to join a special one-day excursion to the Mt. Fuji area. This optional event includes scenic views from the Mt. Fuji Panoramic Ropeway, a relaxing boat ride on Lake Kawaguchiko, a traditional lunch featuring Hōtō noodles, and a visit to the Mars Yamanashi Winery (Hombo Shuzo).</p>
          <p>Excursion Details:</p>
          <ul class="withicon">
            <li><strong>Date:</strong>September 16, 2025 (Tuesday)</li>
            <li><strong>Destination:</strong>Mt. Fuji Area</li>
            <li><strong>Participation Fee:</strong>15,000 JPY</li>
            <li><strong>Capacity:</strong>Limited to 40 participants</li>
            <li><strong>Registration & Payment Link:</strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzvUt_YlNfwiIx6BwBIS70wA2cJe8_TqHYEeMtm68sxk1FA/viewform?usp=header" target="_blank">link</a></li>
            <li><strong>Note:</strong>Registration will close once capacity is reached.</li>
          </ul>
          <p>This excursion offers a unique opportunity to explore Japan’s natural beauty and cultural heritage while networking with fellow researchers. Early registration is highly recommended.</p>
          <p>Please complete the registration form if you want to participate in this special excursion. After submission, you will receive the payment link to complete your registration.</p>
          <p>If you want to update your lunch choice, please resubmit the form without payment (<strong>before Sept. 2, 2025</strong>).</p>
          <p>Sincerely,</p>
          <p>Organizing Committee</p>
          <p>June 1, 2025</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Reminders for Accommodation Reservations</div>
          <p>Dear colleagues and friends,</p>
          <p>We are pleased to inform you that a limited number of rooms have been reserved at <strong>Hotel Mets Kokubunji</strong> exclusively for conference attendees.
          Booking will be on a <strong>first-come, first-served basis</strong>, so we encourage you to secure your accommodation as soon as possible to avoid disappointment.</p>
          <p>For official booking details and the reservation link, please visit the <span class="link_text" @click="$router.push('/2025/accommodation')">accommodation page</span>. If you have any questions or need assistance, feel free to reach out to us.</p>
          <p>Don’t miss out—book early to ensure a smooth and comfortable stay during the conference!</p>
          <p>We look forward to your participation!</p>
          <p>Sincerely,</p>
          <p>Organizing Committee</p>
          <p>April 24, 2025</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Delay in the Abstract Submission Deadline</div>
          <p>Dear colleagues and friends,</p>
          <p>We received some feedback about the urgency of the abstract submission deadline, and after discussion with the committee, we have decided to delay the <strong>abstract deadline </strong>until <strong>April 30th</strong> to ensure that all participants can submit their work in time.</p>
          <p>We look forward to your contributions and participation!</p>
          <p>Sincerely,</p>
          <p>Organizing Committee</p>
          <p>April 16, 2025</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Third Call for Papers</div>
          <p>Dear colleagues and friends,</p>
          <p><strong>The 15th International Symposium on Computer Science in Sport (IACSS 2025)</strong> will be held at Tokyo Gakugei University, Japan, from September 12 to 16, 2025. The program will feature presentations from distinguished keynote speakers and leading experts, along with oral and poster presentations from top researchers addressing cutting-edge topics and the latest technologies in the field of Computer Science in Sport.
            We invite interested scientists, experts, students and professionals in this field to submit contributions on current advancements in various areas of computer science related to sport. Please refer to the official conference website for detailed information: <a href="https://iacssconference.org/#/2025" target="_blank">https://iacssconference.org/#/2025</a> .</p>
          <div class="news-subsection">
            <div class="view-section-title small">Conference themes</div>
            <p><i>Computer Science in Sport</i>: Modeling and Simulation, Data Analysis, Image Processing, Multimedia, Virtual Reality, Visualization and Visual Analysis, Human Computer Interaction, Computer Vision, Big Bata, Internet of Things, Robotics, Information Systems, Machine Learning and Data Mining.</p>
            <p><i>Examples for Special Applications</i>: Feedback Systems, Predictive Modeling, Decision Support, Digital Games, Network Analysis, Complex Systems Analysis, Sequence Analysis, Sensor Fusion.</p>
            <p><i>Other related topics</i>: sports education, athletic training, sports biomechanics, exercise physiology, sports medicine, sports psychology, and sports engineering.</p>
          </div>
          <div class="news-subsection">
            <div class="view-section-title small">Date and deadlines</div>
            <ul class="withicon">
              <li>Third call for papers: 15.03.2025</li>
              <li><strong>Abstract submission deadline: 15.04.2025</strong> at 23:59 AoE (UTC - 12)</li>
              <li>Author notification (abstract): 15.05.2025</li>
            </ul>
          </div>
          <p>The abstract is limited to 500 words (excluding the title, author names, affiliations, and references), in Times New Roman font, size 12, single-spaced. The abstract template can be downloaded from the abstract submission section of the conference website: <a href="https://iacssconference.org/#/2025/submission" target="_blank">https://iacssconference.org/#/2025/submission</a> .</p>
          <div class="news-subsection">
            <div class="view-section-title small">Publications:</div>
            <p>Authors whose papers meet the publication requirements of the association’s journal, <i>International Journal of Computer Science in Sport</i> (IJCSS), will be invited to submit a full paper. The submission will undergo the regular submission process, peer review, and open-access publication by IJCSS.
              For details, please visit: <a href="https://sciendo.com/journal/IJCSS" target="_blank">https://sciendo.com/journal/IJCSS</a> (For Authors - Article Publishing Charges).
            </p>
            <p>Authors of other papers may also be invited to submit full papers (8-15 pages), which will be published by <strong>Springer</strong> as part of the conference proceedings series <i>Lecture Notes on Data Engineering and Communications Technologies</i> (EI).</p>
          </div>
          <div class="news-subsection">
            <div class="view-section-title small">Contact us:</div>
            <p>Naoki Suzuki, Ph.D.</p>
            <p>Chair of 15th International Symposium on Computer Science in Sport</p>
            <p>Associate Professor, Tokyo Gakugei University</p>
            <p>Email: iacss.2025.tgu@gmail.com</p>
          </div>
          <p>March 15, 2025</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Submission Update</div>
          <p>Dear colleagues and friends,</p>
          <p>Happy New Year!</p>
          <p>The 15th International Symposium on Computer Science in Sport (IACSS 2025) will take place from September 12 to 15, 2025, at Tokyo Gakugei University, Japan. We warmly invite all colleagues, experts, researchers, students, and anyone interested in related fields to submit papers and join our symposium.</p>
          <p>We are pleased to inform you that the submission system for the conference is now open. Submissions can be made via the following link: <a href="https://iacssconference.org/#/2025/submission" target="_blank"><strong>https://iacssconference.org/#/2025/submission</strong></a>. If you encounter any issues during the submission process, please feel free to contact us at: <a href="mailto:zhang_hui@zju.edu.cn">zhang_hui@zju.edu.cn</a>.</p>
          <p>We look forward to your contributions and participation!</p>
          <p>Sincerely,</p>
          <p>Organizing Committee</p>
          <p>January 5, 2025</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">First Call for Papers</div>
          <p>Dear Colleagues and Friends,</p>
          <p>It is with great pleasure that we can announce that <strong>the 15th International Symposium on Computer Science in Sport (IACSS 2025)</strong> will be held at the Tokyo Gakugei University, Japan, from the 13-15th of September 2025 .</p>
          <p>The program will feature presentations from distinguished keynote speakers and leading experts, along with oral and poster presentations from top researchers addressing cutting-edge topics and the latest technologies in the field of Computer Science in Sport.</p>
          <p>We invite interested scientists, experts, students and professionals in this field to submit contributions on current advancements in various areas of computer science related to sport.</p>
          <p>Further details will be available on the <a href="https://iacssconference.org/">conference website</a>.</p>
          <div class="news-subsection">
            <div class="view-section-title small">Conference themes</div>
            <p><i>Computer Science in Sport</i>: Modeling and Simulation, Data Analysis, Image Processing, Multimedia, Virtual Reality, Visualization and Visual Analysis, Human Computer Interaction, Computer Vision, Big Bata, Internet of Things, Robotics, Information Systems, Machine Learning and Data Mining.</p>
            <p><i>Examples for Special Applications</i>: Feedback Systems, Predictive Modeling, Decision Support, Digital Games, Network Analysis, Complex Systems Analysis, Sequence Analysis, Sensor Fusion.</p>
            <p><i>Other related topics</i>: sports education, athletic training, sports biomechanics, exercise physiology, sports medicine, sports psychology, and sports engineering.</p>
          </div>
          <div class="news-subsection">
            <div class="view-section-title small">Date and deadlines</div>
            <ul class="withicon">
              <li>Abstract submission opens: 30.11.2024</li>
              <li>Second call for papers: 05.01.2025</li>
              <li>Third call for papers: 15.03.2025</li>
              <li>Abstract submission deadline: 15.04.2025 at 23:59 AoE (UTC - 12)</li>
              <li>Author notification (abstract): 15.05.2025</li>
            </ul>
          </div>
          <div class="news-subsection">
            <div class="view-section-title small">Publications:</div>
            <p>Authors whose papers meet the publication requirements of the association’s journal, <i>International Journal of Computer Science in Sport</i> (IJCSS), will be invited to submit a full paper. The submission will undergo the regular submission process, peer review, and open-access publication by IJCSS.
              For details, please visit: <a href="https://sciendo.com/journal/IJCSS" target="_blank">https://sciendo.com/journal/IJCSS</a> (For Authors - Article Publishing Charges).
            </p>
            <p>Authors of other papers may also be invited to submit full papers (8-15 pages), which will be published by <strong>Springer</strong> as part of the conference proceedings series <i>Lecture Notes on Data Engineering and Communications Technologies</i>.</p>
          </div>
          <div class="news-subsection">
            <div class="view-section-title small">Contact us:</div>
            <p>Naoki Suzuki, Ph.D.</p>
            <p>Associate Professor, Tokyo Gakugei University</p>
            <p>Email: iacss.2025.tgu@gmail.com</p>
          </div>
          <p>Please click <span class="link_text" @click="$router.push('/2025/submission')">here</span> to find the abstract template for IACSS 2025.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceNewsView'
}
</script>

<style scoped>
ul{
  list-style-type: none;
}
ul li{
  margin: 4px 0;
}
.withicon{
  list-style: disc;
}
.link_text{
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
.news-subsection{
  margin-bottom: 10px;
  .view-section-title{
    font-size: 14px;
    margin-bottom: 2px;
  }
  p{
    margin: 2px;
  }
}
.download_text{
  text-underline: none;
  color: white;
  /*font-weight: bold;*/
  /*font-size: 16px;*/
  text-align: left;
}
</style>
