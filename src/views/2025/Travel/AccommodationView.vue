<template>
  <div>
    <div class="view-container">
      <div class="view-title">Accommodation</div>
      <div class="view-main">
        <div class="view-text">
          <p>Here you can find some options for accommodation near the venue. Please note that these are suggestions of a third party vendor`s service. Any activity, including purchase made, on the third party service shall be governed by such third party vendor`s terms and conditions.</p>
        </div>
        <hr class="hr-block-wrapper">
        <div v-for="hotel in hotels" class="view-section" :key="hotel">
          <div class="hotel-info">
            <p class="name view-section-title">{{hotel.name?hotel.name:''}}</p>
            <p class="address view-section-title small">Area: {{hotel.area}}</p>
            <p class="view-section-title small transport">Access: {{hotel.access}}</p>
            <p class="view-section-title small">Booking: <span class="hotel-text"><a :href="link" target="_blank">{{link}}</a></span></p>
<!--            <p class="view-section-title small">TEL: <span class="hotel-text">{{hotel.tel}}</span></p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccommodationView',
  data () {
    return {
      link: 'https://www.trip.com/',
      hotels: [
        {
          name: 'Hotel Mets Kokubunji',
          area: 'Kokubunji (Closest Area)',
          access: 'Located at Kokubunji Station (Chuo Line), about 10 minutes by bus or taxi to TGU',
          tel: 'xxx'
        },
        {
          area: 'Tachikawa',
          access: '15 minutes by train (Chuo Line) and bus from Tachikawa Station to TGU',
          tel: 'xxx'
        },
        {
          area: 'Kichijoji',
          access: '20 minutes by train (Chuo Line) and bus from Kichijoji Station to TGU',
          tel: 'xxx'
        },
        {
          area: 'Shinjuku',
          access: '30 minutes by train (Chuo Line) to Musashi-Koganei Station, followed by a short bus or taxi ride to TGU',
          tel: 'xxx'
        },
        {
          area: 'Fuchu',
          access: '15 minutes by train and bus to TGU',
          tel: 'xxx'
        },
        {
          name: 'Cherry Blossom Hostel (Musashi-Koganei)',
          area: 'Affordable Student Accommodation',
          access: '10 minutes by bus or taxi to TGU',
          tel: 'xxx'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.description-list{
  //background-color: #eeeeee;
  //padding: 20px 5px;
  width: 100%;
  .list-item{
    background-color: white;
    margin: 10px 0;
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 25px;
    //font-family: Montserrat;
    //font-weight: ;
  }
}
.transport_list{
  list-style-type:none;
}
ul li{
  margin: 4px 0;
}
</style>
