<template>
  <div>
    <div class="view-container">
      <div class="view-title">浙江大学</div>
      <div class="view-main">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/g33F1bHM4JE" title="An Overview of Zhejiang University" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p style="text-align: center">浙江大学紫金港校区教育学院, 浙江省杭州市西湖区余杭塘路866号</p>
        </div>
        <div class="view-supplemental map">
          <iframe src="https://j.map.baidu.com/f6/lK" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueViewCn'
}
</script>

<style scoped>
.map{
  max-width: 1080px;
  margin: 0 auto;
}
iframe{
  width: 1080px;
}
</style>
