<template>
  <div>
    <div class="view-container">
      <div class="view-title">杭州印象</div>
      <div class="view-main">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/9lKdK2WSmok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p>杭州是中国东部浙江省的首都和人口最多的城市。它位于杭州湾的顶部，杭州湾将上海和宁波分开。杭州作为大运河的南端，在上个千年的大部分时间里，一直是中国最著名、最繁荣的城市之一。该市的西湖，联合国教科文组织世界遗产立即在城西，是最著名的景点之一。</p>
          <p>截至2019年，全市下辖10个区、2个县、代管1个县级市，总面积16853.57平方千米，建成区面积648.46平方千米。2020年11月1日零时，杭州市常住人口1193.601万人。</p>
          <p>杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹，具代表性的有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说。杭州也是一个新兴的技术中心，是国际重要的电子商务中心。2015年9月，杭州被授予2022届亚运会。它是继1990年北京和2010年广州之后第三个举办亚运会的中国城市。</p>
          <p>杭州自秦朝设县治以来已有2200多年的历史，中国著名的七大古都之一，曾是吴越国和南宋的都城。因风景秀丽，素有“人间天堂”的美誉。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueHangzhouViewCn',
  data () {
    return {
      hangzhou: [
        { img: require('@/assets/xihu_4.jpg'), copyright: 'TravelHK', legend: 'West Lake' }
      ]
    }
  }
}
</script>

<style scoped></style>
