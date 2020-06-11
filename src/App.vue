<template>
  <div id="app">
    <header>
    <div id="nav-wrapper">
      <table>
        <td>
          <div id="nav-band">
            <div>Hang Zhou Hua Cui Yuan Silk Co., LTD</div>
          </div>
        </td>
        <td>

        </td>
      </table>

      <div id="top-bar">
        <div class="menu">
          <ul id="level1">
            <!-- <li><a href="" class="level1">Home</a></li> -->
            <li><router-link to="/" class="level1">Home</router-link></li>
            <li><router-link to="/product/page/1" class="level1">Products</router-link>
              <div class="dropdown-pane bottom">
                <ul class="level2">
                  <li><router-link to="/product/Custom Silk Scarf/page/1">Custom Silk Scarf</router-link></li>
                  <li><router-link to='/product/Custom Tie/page/1' href="">Custom Tie</router-link></li>
                  <li><router-link to="/product/Cashmere Wool Scarf/page/1">Cashmere Wool Scarf</router-link></li>
                  <li><router-link to="/product/Wholesale Scarves/page/1">Wholesale Scarves</router-link></li>
                  <li><router-link to="/product/Sleep Mask/page/1">Sleep Mask</router-link></li>
                  <li><router-link to="/product/Pajamas/page/1">Pajamss</router-link></li>
                  <li><router-link to="/product/Silk Shawl/page/1">Silk Shawl</router-link></li>
                  <li><router-link to="/product/Men Scarf/page/1">Men Scarf</router-link></li>
                  <!-- <li><a href="">tets</a> </li> -->
                </ul>
              </div>
            </li>
            <li><router-link to='/about' class="level1">Abuot US</router-link></li>
            <li><router-link to='/custom' class="level1">Custom Service</router-link></li>
            <!-- <li><a href="" class="level1">News</a></li> -->
            <li><router-link to="/news/page/1" class="level1">News</router-link></li>
            <li><a href="" class="level1">Knowledge</a></li>
            <li><router-link to="/contact" class="level1">Contact Us</router-link></li>

          </ul>
          <div id="search">
            <form action="/search/search-results.html" id="default-js-form">
              <ul class="supernav stagsanslight right">
                <li class="newssearch">
                  <!-- <label class="show-for-sr" for="default-js-input">Search</label> -->
                  <input class="newssearchfield" id="default-js-input" name="q" placeholder="Search Site" type="text">
                </li>
                <li class="newssearch">
                  <button aria-label="Search" class="postfix radius newssearchbtn">
                    <i class="fa fa-search"></i>
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
    <router-view/>
    <footer>
      <div id="foot">
          <div id="products">
              <div id="colunms">
                  <div class="fbox clearfix">
                      <div class="col1">
                          <h3 class="pro-title">Navigation</h3>
                          <ul class="list-inline article-list">
                          <li><router-link to="/" class="level1">Home</router-link></li>
                          <li><router-link to='/about' class="level1">Abuot US</router-link></li>
                          <li><router-link to='/custom' class="level1">Custom Service</router-link></li>
                          <li><router-link to="/news/page/1" class="level1">News</router-link></li>
                          </ul>
                      </div>
                      <div class="col2">
                          <h3 class="pro-title">Products</h3>
                          <ul class="list-inline article-list">
                          <li><router-link to="/product/Custom Silk Scarf/page/1">Custom Silk Scarf</router-link></li>
                          <li><router-link to="/product/Custom Tie/page/1">Custom Tie</router-link></li>
                          </ul>
                      </div>
                      
                      <div class="col4">
                          <h3 class="pro-title">Visit</h3>
                          <ul class="list-inline article-list">
                            <li> <img :src="alibaba_ico" /> 
                            <a href="https://www.customsilkscarfs.com/">customsilkscarfs.com</a></li>
                              <li class="" id="">
                              <img :src="custom_ico" />
                                <a href="https://silkcity.en.alibaba.com/">silkcity alibaba</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="copyright">
          <!-- <center>Copyright@2020 Hangzhou Huacuiyuan Silk Scarf Factory. All Rights Reserved. <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备17032777号</a></center> -->
          <center>Copyright@2020 Hangzhou Huacuiyuan Silk Scarf Factory. All Rights Reserved. </center>
      </div>
  </footer>
  </div>
</template>


<style  scoped>
#app{
  overflow-x: hidden;
}

#router-link {
  display: inline-block;
  width: 100px;
}

.col4 li {
  margin-bottom: 4%;
}

.col4 li img {
vertical-align: middle;
}


</style>

<script>
export default {
  name: 'App',
data () {
  return {
    alibaba_ico: require('@/assets/ico/alibaba.ico'),
    custom_ico: require('@/assets/ico/customsilkscarfs.ico')
  }
},

}
</script>
