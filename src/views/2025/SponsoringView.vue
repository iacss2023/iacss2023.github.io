<template>
  <div>
    <div class="view-container">
      <div class="view-title">Sponsoring</div>
      <div class="view-main">
        <div id="sponsoring-container">
          <div id="content-main">
            <p style="font-weight: bold">
              The aim of the conference is to bring scientists and scholars together for an exchange on the current state of research and development. Interested scientists are invited to submit contributions on current progress in the various subject areas of performance diagnostics, data analysis and computer science in sport.
            </p>
            <p>
              Scientific achievements always go hand in hand with the use of already designed and marketed products. This is why both science benefits from technical input from industry and companies from newly created scientific knowledge, which in turn can be integrated into their products.
            </p>
            <p style="font-weight: bold">
              If your company designs products that fit to our conferences themes, we would like to invite you to participate. Within the scope of this sponsoring we offer you the following:
            </p>
            <div id="sponsor-type-container">
              <el-row :gutter="20">
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#186faf">
                      <ChromeFilled/>
                    </el-icon>
                    <h3 style="color: #186faf">Sponsoring Package</h3>
                    <p class="center is-bold">Media appearance:</p>
                    <p class="center">through the presentation of your logo on the event folder on the conference website.</p>
                    <p class="center is-bold">Advertising:</p>
                    <p class="center">Distribution of your company’s advertising material.</p>
                    <p class="center is-bold">Sponsorship price:</p>
                    <p class="center">TBD</p>
                  </div>
                </el-col>
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#f0b429">
                      <Medal/>
                    </el-icon>
                    <h3 style="color: #f0b429">Partner Package</h3>
                    <p class="center is-bold">Media appearance:</p>
                    <p class="center">through the presentation of your logo on the event folder on the conference website.</p>
                    <p class="center is-bold">Advertising:</p>
                    <p class="center">Distribution of your company’s advertising material.</p>
                    <p class="center is-bold">Exhibition stand:</p>
                    <p class="center">TBD.</p>
                    <p class="center is-bold">Sponsorship price:</p>
                    <p class="center">TBD</p>
                  </div>
                </el-col>
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#d64545">
                      <UserFilled/>
                    </el-icon>
                    <h3 style="color: #d64545">Sponsoring Package</h3>
                    <p class="center">Of course, we are open to discuss and offer individual sponsoring packages. Depending on your wishes, we can also fulfil specific requests such as keynote speaker sponsoring, session sponsoring or product presentations. To receive an individual sponsoring package, please contact our sponsoring team directly by email.</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsoringView'
}
</script>

<style lang="scss" scoped>
#sponsoring-container{
  width: 100%;
  background-color: #e8e8e8;
  padding: 20px 0;
  #content-main{
    width: 800px;
    margin: 0 auto;
  }
  #sponsor-type-container{
    background-color: white;
    .scope-container{
      background-color: white;
      padding: 10px;
    }
    .scope-content{
      padding: 20px 10px;
      background-color: #f3f3f3;
    }
    .center{
      text-align: center;
    }
    .is-bold{
      font-weight: bold;
    }
  }
}
</style>
