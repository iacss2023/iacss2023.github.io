<template>
  <div>
    <div class="view-container">
      <div class="view-title">Conference News</div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-section-title small">Hotel Booking Information</div>
          <p>Dear Colleagues and Friends,</p>
          <p>Autumn is the most beautiful season in Hangzhou and also the peak season for tourism. Our conference coincides with the <b>19th Hangzhou Asian Games</b> (September 23 to October 8) and the <b>National Day</b> holiday (October 1 to 3), which may make it difficult to book hotels. We have recommended three hotels (near the Zijingang Campus of Zhejiang University) on the conference website and kindly ask everyone to book hotels as soon as possible (<a class="link_text" href="https://www.trip.com/" target="_blank">https://www.trip.com/</a>). </p>
          <p>Please refer to the <span class="link_text" @click="$router.push('accommodation')">link</span> for hotel information</p>
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
