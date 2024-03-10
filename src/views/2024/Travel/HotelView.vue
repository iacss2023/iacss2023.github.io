<template>
  <div>
    <div class="view-container">
      <div class="view-title">HOTEL</div>
      <div class="view-main">
        <div class="view-section-title">TBD</div>
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
          name: 'Ou Ya Mei International Hotel',
          imgs: [
            require('../../../assets/accommodation/ouyamei_1.jpg'),
            require('../../../assets/accommodation/ouyamei_2.jpg'),
            require('../../../assets/accommodation/ouyamei_3.jpg')],
          address: 'No. 859 Shixiang West Road, Xihu District, Hangzhou, Zhejiang, China',
          transport: [
            {
              method: '(1) Metro Station',
              solutions: ['Jiangcun, About 6min(s) from hotel by car (2.1 km)', 'Zijingang Campus Zhejiang University,About 7min(s) from hotel by car (2.7 km)']
            },
            {
              method: '(2) Train Station',
              solutions: ['Hangzhou Railway Station, About 31min(s) from hotel by car (19.1 km)', 'Hangzhou East Railway Station, About 34min(s) from hotel by car (19.3 km)']
            },
            {
              method: '(3) Airport',
              solutions: ['Hangzhou Xiaoshan International Airport, About 70min(s) from hotel by car (45.7 km)']
            }
          ],
          tel: '+86-0571-81959999'
        },
        {
          name: 'Zijingang International Hotel',
          imgs: [
            require('../../../assets/accommodation/zijingang_1.jpg'),
            require('../../../assets/accommodation/zijingang_2.jpg'),
            require('../../../assets/accommodation/zijingang_3.jpg')],
          address: 'No.796 Shenhua Road, Xihu District, Hangzhou, Zhejiang, China',
          transport: [
            {
              method: '(1) Metro Station',
              solutions: ['Xialongwei, About 7min(s) from hotel by foot (490m)', 'Sanba, About 15min(s) from hotel by foot (1.0 km)']
            },
            {
              method: '(2) Train Station',
              solutions: ['Hangzhou Railway Station, About 25min(s) from hotel by car (15.8 km)', 'Hangzhou East Railway Station, About 25min(s) from hotel by car (15.9 km)']
            },
            {
              method: '(3) Airport',
              solutions: ['Hangzhou Xiaoshan International Airport, About 62min(s) from hotel by car (42.7 km)']
            }
          ],
          tel: '+86-0571-89731046'
        },
        {
          name: 'Zheda Yuanzheng Forest Hotel',
          imgs: [
            require('../../../assets/accommodation/zhedayuanzheng_1.jpg'),
            require('../../../assets/accommodation/zhedayuanzheng_2.jpg'),
            require('../../../assets/accommodation/zhedayuanzheng_3.jpg')],
          address: 'Building D1, No.1 Xiyuanba Road, Xihu District, Hangzhou, Zhejiang, China',
          transport: [
            {
              method: '(1) Metro Station',
              solutions: ['Jiangcun, About 6min(s) from hotel by car (2.3 km)']
            },
            {
              method: '(2) Train Station',
              solutions: ['Hangzhou East Railway Station, About 30min (s) from hotel by car (20.5 km)', 'Hangzhou Railway Station, About 26min(s) from hotel by car (20.5 km)']
            },
            {
              method: '(3) Airport',
              solutions: ['Hangzhou Xiaoshan International Airport, About 71min(s) from hotel by car (47.1 km)']
            }
          ],
          tel: '+86-0571-56573999'
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
