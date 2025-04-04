<template>
  <div>
    <div class="view-container">
      <div class="view-title">Conference News</div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-section-title small">Conference Photos Sharing</div>
          <p>Dear Colleagues and Friends,</p>
          <p>Thanks to all attendees, the IACSS 2023 conference has been successfully concluded.</p>
          <p>We have selected photos from the conference programs and provided two links (<a class="link_text" href="https://drive.google.com/drive/folders/1PYVb9V1875rFNoKNT4WrZQwpo1MDaCrP?usp=drive_link">Google Drive</a> and <a class="link_text" href="https://pan.baidu.com/s/1B30Fz2RvFgtFk12TDo2alQ?pwd=0000">BaiduNetDisk</a> ) so that attendees can choose the link they can use to view the shared photos and download them.</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>October 8, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Campus map and Network connection</div>
          <p>Dear Colleagues and Friends,</p>
          <p>To assist you in becoming acquainted with the conference venue, we have included a map of the campus where the conference will be held, with important addresses clearly marked. You can download the specific map (<a class="link_text" href="/map_en.pdf" download="map_en.pdf">English</a>, <a class="link_text" href="/map_cn.pdf" download="map_cn.pdf">Chinese</a>) or view the <span class="link_text" @click="$router.push('/2023/venue')">Venue</span>.</p>
          <p>While you are staying at Zhejiang University, you will have access to the Wi-Fi network. Participants from institutions outside of China are recommended to connect through eduroam (<a class="link_text" href="/network-connection.pdf" download="network-connection.pdf">connection instruction</a>), while participants from institutions within China are advised to use ZJU-Guest.</p>
          <p>We look forward to welcoming you to the conference.</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>September 22, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Conference Program</div>
          <p>Dear Colleagues and Friends,</p>
          <p>The formal conference schedule has been published on the website (<span class="link_text" @click="$router.push('/2023/program')">Conference Program</span>). We warmly welcome you to join IACSS 2023 at Zhejiang University! We look forward to seeing you in Hangzhou!</p>
          <p>Thank you all!</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>September 4, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Conference Program Update</div>
          <p>Dear Colleagues and Friends,</p>
          <p>The conference schedule (draft) has been published on the website (<span class="link_text" @click="$router.push('/2023/program')">Conference Program</span>). If this schedule is not suitable for you, please email us at <a href="mailto:iacss.2023@zju.edu.cn">iacss.2023@zju.edu.cn</a>. We warmly welcome you to join IACSS 2023 at Zhejiang University!</p>
          <p>We look forward to seeing you in Hangzhou!</p>
          <p>Thank you all!</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>August 4, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Hotel Reservation Reminder</div>
          <p>Dear Colleagues and Friends,</p>
          <p>Hangzhou is one of the most famous tourist cities in China, and September is the best season to visit Hangzhou. Furthermore, our conference coincides with Hangzhou Asian Games (September 23rd to October 8th), the Mid-Autumn Festival (September 29th), and the National Day holiday (September 30th to October 6th). Therefore, <b>hotels in Hangzhou will be in high demand</b>.</p>
          <p>We earnestly request that you make hotel reservations as soon as possible through the suggested <span class="link_text" @click="$router.push('/2023/accommodation')">webpage</span>.</p>
          <p>Thank you all!</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>July 10, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Registration Payment Reminder</div>
          <p>Dear Colleagues and Friends,</p>
          <p>In order to provide a more convenient way for participants to make payments, we have prepared an Alipay QR code on the <span class="link_text" @click="$router.push('/2023/registration')">registration information</span> page for participants to scan and transfer fees.</p>
          <p>For participants who need to be invoiced, please note that additional information will be required to send to the official email, including participant's name, organization, email for receiving the invoice, invoice title, and tax ID.</p>
          <p>Thank you all!</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>June 25, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Hotel Advance Reservation Reminder</div>
          <p>Dear Colleagues and Friends,</p>
          <p>After the review by the conference academic committee, we have sent out the conference invitation letters to everyone. Please check your emails for further details. We kindly request that you complete the conference registration as soon as possible.</p>
          <p>Hangzhou is one of the most famous tourist cities in China, and September is the best season to visit Hangzhou. Furthermore, our conference coincides with Hangzhou Asian Games (September 23rd to October 8th), the Mid-Autumn Festival (September 29th), and the National Day holiday (September 30th to October 6th). Therefore, hotels in Hangzhou will be in high demand.</p>
          <p>We earnestly request that you make hotel reservations as soon as possible through the suggested <span class="link_text" @click="$router.push('/2023/accommodation')">webpage</span>.</p>
          <p>Thank you all!</p>
          <p>IACSS 2023 Organizing Committee</p>
          <p>June 23, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Award Submission Deadline Updates</div>
          <p>Dear Colleagues and Friends,</p>
          <p>Upon the request of several authors, we have decided to extend the submission deadline for the <span class="link_text" @click="$router.push('/2023/award')">Dartfish-IACSS Young Scientist Award</span>. <b>The new deadline for applications is June 20th, 2023</b>. We encourage everyone to actively participate and submit their applications.</p>
          <p>Best regards,</p>
          <p>Organizing Committee</p>
          <p>June 8, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Early Bird Registration</div>
          <p>Dear Colleagues and Friends,</p>
          <p>We are happy to announce that the early-bird registration has been open. <b>The early-bird registration deadline is June 30th, 2023</b>.</p>
          <p>Participants please check the conference website <a href="https://iacssconference.org/">https://iacssconference.org/</a>, download the registration form and send your completed registration form to <a href="mailto:iacss.2023@zju.edu.cn">iacss.2023@zju.edu.cn</a>.</p>
          <p>The payment of the registration fee will be done by bank transfer or Alipay. The detailed payment information can be found in the registration form.</p>
          <p>Please click <span class="link_text" @click="$router.push('/2023/registration')">here</span> to find the registration information and register form.</p>
          <p>Thank you for your attention, and we look forward to seeing you soon.</p>
          <p>Organizing Committee</p>
          <p>May 22, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Deadline Updates</div>
          <p>Dear Colleagues and Friends,</p>
          <p>We are pleased to announce that, upon receiving many requests, a last extension to the call for abstracts for the 14th International Symposium on Computer Science in Sport hosted by Zhejiang University in Hangzhou, China (27th-30th September 2023).</p>
          <p>The program will feature keynote presentations from leading experts, as well as oral and poster presentations on the topics of Computer Science in Sport. To learn more about guidelines and other relevant congress news, please visit our website at <a href="https://iacssconference.org/">https://iacssconference.org/</a>.</p>
          <p><b>The NEW submission deadline for abstracts is May 20th, 2023.</b></p>
          <p><b>Additionally, we warmly welcome students to actively apply for the DARTFISH-IACSS Young Scientist Award.</b></p>
          <p>Thank you for your attention, and we look forward to receiving your submissions.</p>
          <p>Organizing Committee</p>
          <p>April 29, 2023</p>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Hotel Booking Information</div>
          <p>Dear Colleagues and Friends,</p>
          <p>Autumn is the most beautiful season in Hangzhou and also the peak season for tourism. Our conference coincides with the <b>19th Hangzhou Asian Games</b> (September 23 to October 8) and the <b>National Day</b> holiday (October 1 to 3), which may make it difficult to book hotels. We have recommended three hotels (near the Zijingang Campus of Zhejiang University) on the conference website and kindly ask everyone to book hotels as soon as possible (<a class="link_text" href="https://www.trip.com/" target="_blank">https://www.trip.com/</a>). </p>
          <p>Please refer to the <span class="link_text" @click="$router.push('/2023/accommodation')">link</span> for hotel information</p>
          <ul>
            <li>1) Ou Ya Mei International Hotel (No. 859 Shixiang West Road, Xihu District, Hangzhou, Zhejiang, China). </li>
            <li>2) Zijingang International Hotel (No.796 Shenhua Road, Xihu District, Hangzhou, Zhejiang, China). </li>
            <li>3) Zheda Yuanzheng Forest Hotel (Building D1, No.1 Xiyuanba Road, Xihu District, Hangzhou, Zhejiang, China). </li>
          </ul>
          <p>Thank you for your cooperation, and we look forward to a successful conference with all of you.</p>
          <p>Organizing Committee</p>
          <p>April 25, 2023</p>
        </div>
        <div class="view-section">
          <p>It is with great pleasure that we can announce that from the 27-30th of September 2023 the 14th International Symposium on Computer Science in Sport will be held at the Zhejiang University, Hangzhou.</p>
          <p>The program will include presentations from renowned keynote speakers and leading experts, as well as oral and poster presentations from world-class researchers touching on cutting edge subjects and newest technologies from the field of Computer Science in Sport.</p>
          <p>The keynote sessions will be critical reviews of the most recent and key issues in Computer Science in Sport, with recommendations for future research and avenues for real world application delivered by the most renowned academics and practitioners in the field.</p>
          <p>The oral sessions will be themed to reflect the desires of the Congress participants to ensure that sessions maximise the opportunity to share, engage with and reflect upon cutting edge questions in particular interest areas.</p>
          <p>The poster sessions will be organised to permit delivery of key messages by authors, whilst permitting time for all delegates to mix, interact and develop academic friendships through research and endeavour in computer science in sport.</p>
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
.link_text{
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
</style>
