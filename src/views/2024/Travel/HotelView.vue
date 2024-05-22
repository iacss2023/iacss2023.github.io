<template>
  <div>
    <div class="view-container">
      <div class="view-title">HOTEL</div>
      <div class="view-main">
        <div class="view-text">
          <p>Here you can find some options for accommodation in Strasbourg. Please note that these are suggestions of a third party vendor`s service. Any activity, including purchase made, on the third party service shall be governed by such third party vendor`s terms and conditions.</p>
          <p>We recommend the Best Western Plus Hôtel Monopole Métropole. If you need to make a reservation, please contact claude.karcher@creps-strasbourg.sports.gouv.fr via email. The introduction of the hotel is as follows.</p>
          <iframe id="myframe"
                  src="/hotel.pdf"
                  width="800" height="500" frameborder="0"></iframe>
        </div>
        <hr class="hr-block-wrapper">
        <div v-for="hotel in hotels" class="view-section" :key="hotel">
          <el-row :gutter="10">
            <el-col :span="10">
              <el-carousel :interval="5000" arrow="hover">
                <el-carousel-item v-for="item in hotel.imgs" :key="item">
                  <img class="hotel-image" :src="item">
                </el-carousel-item>
              </el-carousel>
            </el-col>
            <el-col :span="14">
              <div class="hotel-info">
                <p class="name view-section-title">{{hotel.name}}</p>
                <p class="address view-section-title small">Address: {{hotel.address}}</p>
                <p class="view-section-title small transport">Introduction:</p>
                <ul>
                  <li v-for="item in hotel.introduction" :key="item" class="transport_list">
                    {{item}}
                  </li>
                </ul>
                <p class="view-section-title small transport">Price: (price for two nights)</p>
                <ul>
                  <li v-for="item in hotel.price" :key="item" class="transport_list">
                    <span>{{item.type}}: {{item.price}}</span>
                  </li>
                </ul>
                <a class="view-section-title small hotel-text" :href="hotel.bookinglink" target="_blank">Booking</a>
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
  name: 'HotelView',
  data () {
    return {
      link: 'https://www.trip.com/',
      hotelInfo: [
        { name: 'Yuanzheng Qizhen Hotel', location: 'No. 866, Yuhangtang Road, Hangzhou, Zhejiang, China (Inside Zijingang Campus, ZJU)', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-88982888' },
        { name: 'Zijingang International Hotel', location: 'No. 796, Shenhua Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-89731046' },
        { name: 'Vienna Classic Hotel (Hangzhou Zijinggang)', location: 'No. 800, Shenhua Road, Xihu District, Hangzhou', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-89731046' },
        { name: 'Hanting Express (Hangzhou Zhejiang University Zijinggang)', location: 'No. 188, Zijinghua North Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-28056999' },
        { name: 'Rezen Dong Hotel (Hangzhou Xixi Longhu Paradise walk)', location: 'No.968 Yuhangtang Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-28322322' },
        { name: 'Padington International Hotel apatment (Hangzhou Xixi Longhu Paradise walk)', location: 'Room 323, unit 2, building 3, West Xitian Street, Longhu, Jiangcun Street, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 13396715436' }
      ],
      hotels: [
        {
          name: 'Hôtel Restaurant Athena Spa',
          imgs: [
            require('../../../assets/accommodation/athenaspa_1.jpg'),
            require('../../../assets/accommodation/athenaspa_2.jpg'),
            require('../../../assets/accommodation/athenaspa_3.jpg'),
            require('../../../assets/accommodation/athenaspa_4.jpg'),
            require('../../../assets/accommodation/athenaspa_5.jpg')
          ],
          address: '1 Rue Armande Béjart, 67200 Strasbourg, France',
          price: [{ type: 'Class Double Room', price: '$243' }, { type: 'Double Room', price: '$243' }, { type: 'Classic Twin Room', price: '$243' }],
          introduction: [
            'Hôtel Restaurant Athena Spa is located less than 1.9 mi from the center of Strasbourg and features a fitness center that is open 24 hours a day.'
          ],
          bookinglink: 'https://www.booking.com/hotel/fr/athena-spa.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaMkBiAEBmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuAKYytqvBsACAdICJGEzMjkxZmZjLTM1ZGUtNDhhMy05NzIyLWFiYmYwZjJlOWNiN9gCBeACAQ&sid=4f256ea33f29959f3acbf5ff2056c980&all_sr_blocks=112122806_366496800_0_2_0;checkin=2024-07-28;checkout=2024-07-30;dest_id=-1471697;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=25;highlighted_blocks=112122806_366496800_0_2_0;hpos=25;matching_block_id=112122806_366496800_0_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=112122806_366496800_0_2_0__21260;srepoch=1710663076;srpvid=0dee39662f82019c;type=total;ucfs=1&#map_closed '
        },
        {
          name: 'Hotel des Vosges BW Premier Collection',
          imgs: [
            require('../../../assets/accommodation/vosgesbw_1.jpg'),
            require('../../../assets/accommodation/vosgesbw_2.jpg'),
            require('../../../assets/accommodation/vosgesbw_3.jpg'),
            require('../../../assets/accommodation/vosgesbw_4.jpg'),
            require('../../../assets/accommodation/vosgesbw_5.jpg')],
          address: '3 Place De La Gare , 67000 Strasbourg, France',
          price: [{ type: 'Comfort Queen Room', price: '$243' }, { type: 'Comfort Twin Room', price: '$243' }, { type: 'Executive King Room', price: '$292' }, { type: 'Superior Twin Room with City View', price: '$292' }],
          introduction: [
            'Hotel des Vosges is located in Stasbourg near the train station and the city center. It offers comfortable and affordable accommodations.'],
          bookinglink: 'https://www.booking.com/hotel/fr/des-vosges.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaMkBiAEBmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuAKYytqvBsACAdICJGEzMjkxZmZjLTM1ZGUtNDhhMy05NzIyLWFiYmYwZjJlOWNiN9gCBeACAQ&sid=4f256ea33f29959f3acbf5ff2056c980;checkin=2024-07-28;checkout=2024-07-30;room1=A,A;homd=1;srpvid=78f33992895701be;srepoch=1710663276;atlas_src=hp_iw_title '
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hotel-image{
  width: 100%;
}
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
