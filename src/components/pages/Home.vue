<template>
  <section>
    <div id="banner">
      <div>
        <div id="banner_img">
          <div style="width:100%;height:100%">
            <slider ref="slider" :options="options">
              <slideritem
                v-for="(item, index) in imgList"
                :key="index"
                :style="item.style"
                >{{ item.html }}</slideritem
              >
              <div slot="loading">loading...</div>
            </slider>
          </div>
        </div>
      </div>
    </div>

    <div id="aboutus">
      <div id="read">
        <div id="mms">
          <h3>Brand Orgin</h3>
          <p>
            Hangzhou HuaCuiYuan Silk Co., Ltd established in 2005. <br />
            We have experienced in supplying scarves and ties over 20 years.
            <br />
            Our company is specialized in ODM&OEM high quality scarves, <br />
            ties and wholesale of popular designs. <br />
            "Quality first, never second" is our principle. <br />
            Top quality material, advanced technology and superior service,
            <br />
            have attracted more than thousands of customers from all over the
            world. <br />
          </p>
          <div>
            <router-link to="/about" id="company">ABOUT US</router-link>
          </div>
        </div>
        <div id="show">
          <video
            preload="metadata"
            autoplay="true"
            muted=""
            poster="https://img.alicdn.com/imgextra/i2/6000000005797/O1CN01mQjaLU1sh4WgZ9Zkl_!!6000000005797-0-tbvideo.jpg"
            playsinline=""
            webkit-playsinline=""
          >
            <source
              src="//cloud.video.alibaba.com/play/u/2153292369/p/1/e/6/t/1/d/hd/227696707183.mp4"
            />
          </video>
          <!-- <img src="asset/make-a-gift.png"> -->
        </div>
      </div>
    </div>

    <h3 class="section_h3">Products</h3>
    <div id="product">
      <div class="column">
        <div class="gateway-caption-group">
          <div>
            <img
              alt="Custom Silk Scarf"
              src="@/assets/img/home_product/custom_silk_scarf.jpg"
            />
          </div>
          <h1 class="">
            Custom Silk Scarf
          </h1>

          <div class="product_content">
            Natural Silk Neck Scarves,Black Silk Twill Kerchief Scarves,
            Houndstooth Silk Twill Wrap Scarf, Bag Twilly Scarf,Multifunction
            Silk Scarf,Silk Pleated Scarf,Coral Silk Chiffon Scarf, Neck
            Decoration Silk Scarf
          </div>
          <div class="learnmore">
            <router-link to="/product/Custom Silk Scarf/page/1">Learn more</router-link>
          </div>
        </div>
      </div>

      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Silk Shawl" 
            src="@/assets/img/home_product/wholesale_scarves.jpg" />
          </div>
          <h1 class="">
            <span>Silk Shawl</span>
          </h1>

          <div class="product_content">
            Elegant Silk Shawl, Silk Georgette Scarf, Oversized Sunscreen Shawl,
            Female Silk Large Square Scarf, Hand Print Silk Hijab, Belt Pattern
            Silk Square Headscarf, Infinity Scarves for Women
          </div>
          <div class="learnmore">
            <router-link to="/product/Silk Shawl/page/1">Learn more</router-link>
          </div>
        </div>
      </div>

      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Cashmere Wool Scarf" 
            src="@/assets/img/home_product/cashmere.jpg" />
          </div>
          <h1 class="">
            <span>Cashmere Wool Scarf</span>
          </h1>
          <div class="product_content">
            Cashmere Wool Scarf, Wool Scarf, Cotton Scarf, Silk Ascot Jacquard
            Necktie, Fringed Cashmere Muffler, Women’s Pure Pashmina Stole,
            Winter Cashmere Blanket Scarf, Cream Cashmere Wrap
          </div>

          <div class="learnmore">
            <router-link to="/product/Cashmere Wool Scarf/page/1">Learn more</router-link>
          </div>
        </div>
      </div>

      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Pajamas" src="@/assets/img/home_product/pajamas.jpg" />
          </div>

          <h1 class="">
            <span>Pajamas</span>
          </h1>

          <div class="product_content">
            Digital Printing Silk Pajamas,Lover Pajama Set,Charmeuse Silk
            Pajama, Plain Dyed Silk Pajama,Silk Nightgown,Silk Sleep Wear,
            Couple Silk Pajama,Family Silk Pajamas,Long Sleeve Sleep Wear
          </div>
          <div class="learnmore">
            <router-link to="/product/Pajamas/page/1">Learn more</router-link>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="gateway-caption-group">
          <div>
            <a href="">
              <img alt="Custom Tie" src="@/assets/img/home_product/custom_tie.jpg" />
            </a>
          </div>
          <h1 class="">
            Custom Tie
          </h1>
          <div class="product_content">
            Narrow Wool Like Men Tie,Private Label Silk Necktie,Wedding Silk Men
            Tie, Wool Imitation Student Tie For School,Silk Ascot Jacquard
            Necktie, Cartoon Design Silk Necktie,Woven Silk Tie
          </div>
          <div class="learnmore">
            <router-link to="/product/Custom Tie/page/1">Learn more</router-link>
          </div>
        </div>
      </div>

      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Wholesale Scarves" src="@/assets/img/home_product/wholesale_scarves.jpg" />
          </div>
          <h1 class="">
            <span>Wholesale Scarves</span>
          </h1>
          <div class="product_content">
            Cream Cashmere Wrap, Beach Cover Up, Bikini Beach Scarf, Polyester
            Swimwear, Resortstyle Swimwear, Silk Feeling Satin Hijab, Long
            Chiffon Scarf For Gift
          </div>
          <div class="learnmore">
            <router-link to="/product/Wholesale Scarves/page/1">Learn more</router-link>
          </div>
        </div>
      </div>
      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Sleep Mask" src="@/assets/img/home_product/sleepmask.jpg" />
          </div>

          <h1 class="project_class">
            <span>Sleep Mask</span>
          </h1>
          <div class="product_content">
            Own Design Silk Eye Night Cover,Natural Sleep Mask,22MM Silk Satin
            Eye Mask, Embroid Eye Mask, Adjustable Eye Mask, Silk Eye Shade,Silk
            Satin Eye Mask, Silk Night Mask,LOGO Silk Eye Mask
          </div>
          <div class="learnmore">
            <router-link to="/product/Sleep Mask/page/1">Learn more</router-link>
          </div>
        </div>
      </div>
      <div class="column ">
        <div class="gateway-caption-group">
          <div>
            <img alt="Men Scarf" src="@/assets/img/home_product/tie.jpg" />
          </div>
          <h1 class="">
            <span>Men Scarf</span>
          </h1>
          <div class="product_content">
            Luxurious Wedding Men Handkerchief, Double Sides Print Silk Ascot
            Cravat, Men Silk Satin Cravat, Breathable Lightweight Neckerchief,
            Silk Pocket Handkerchiefs, Men's Small Neck Scarf
          </div>

          <div class="learnmore">
            <router-link to="/product/Men Scarf/page/1">Learn more</router-link>
          </div>
        </div>
      </div>
    </div>

    
    <div id="info">
    <div id="news">
    <h3>News</h3>
      <ul id="news-list">
        <li v-for="info in news_info">
          <router-link v-bind:to="'/news/' + info.id">{{
            info.title
          }}</router-link>
          {{ info.date_time }}
        </li>
      </ul>
    </div>

    <div id="news">
    <h3 >Knowledge</h3>
      <ul id="news-list">
        <li v-for="info in news_info">
          <router-link v-bind:to="'/news/' + info.id">{{
            info.title
          }}</router-link>
          {{ info.date_time }}
        </li>
      </ul>
    </div>
    
    </div>

    <div id="contact" class="left-align">
      <div class="bg-image">
        <div class="title">
          <h1>CONTACT US</h1>
        </div>

        <div class="body-text">
          <p> 
            If you have any enquiry about quotation or cooperation, please feel free to email us.
          </p>
            <p><strong>Email:</strong></p>
              <p>
                <a v-bind:href="mailto">{{ mail }}</a>
              </p>
              <p><strong>Telephone Numbers:</strong></p>
              <p>{{ company_tel }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import GLOBAL from "@/config/global_var.js";
import bg1 from "@/assets/img/cover/3.jpg";
import bg2 from "@/assets/img/cover/4.jpg";
import bg3 from "@/assets/img/cover/5.jpg";

let info = GLOBAL.BB_Info;
let host = info.host;

export default {
  name: "Home",
  data() {
    return {
      bg1: bg1,
      mail: info.mail,
      mailto: info.mailto,
      company_name: info.company_name,
      company_addr: info.company_addr,
      company_zip: info.company_zip,
      company_tel: info.company_tel,
      company_mob: info.company_mob,
      news_info: [],
      imgList: [
        {
          html: "",
          style: {
            "background-image": "url(" + bg1 + ")",
            "background-size": "100% 700px",
          }
        },
        {
          html: "",
          style: {
            "background-image": "url(" + bg2 + ")",
            "background-size": "100% 700px",
          }
        },
        {
          html: "",
          style: {
            "background-image": "url(" + bg3 + ")",
            "background-size": "100% 700px",
          }
        }
      ],
      //Slider configuration [obj]
      options: {
        autoplay: "5000",
        loop: true,
        currentPage: 0
      }
    };
  },

  components: {
    slider,
    slideritem
  },

  created() {
    let params = this.$route.params;
    console.log(this.$route);
    let self = this;
    this.$axios
      .get(host + "news/list")
      .then(function(res) {
        let data = res.data;
        self.$data.news_info = data.items;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner_img {
  width: 100%;
  height: 700px;
  position: relative;
}

.title {

}

.body-text{
  font-size: 1.5em;
  /* color:#fff; */
}

.learnmore a{
    color: #f47321;
    line-height: 30px;
    font-size: 1.02rem;
    font-weight: 500;
    text-decoration: none;
}

.learnmore a:hover{
    text-decoration: underline;
}


#banner_btn {
  margin-left: 0;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  z-index: 120;
}

#info {
  display: flex;
  width: 100%;
  padding-bottom: 20px;
}

#news {
  margin-left: 20px;
  /* display: flex; */
  margin-left: 5%;
}

#news h3{
  margin-top: 0;
  padding-bottom: 20px;
}

#news li {
  border-bottom: solid 1px #eee;
  height: 36px;
  line-height: 48px;
  width: 23rem;

  margin-inline-end: 30px;
  text-align: right;
  overflow: hidden;
}

#news ul {
  padding-inline-start: 0;
}

#news li a:hover{
  color: #f47321;
  text-decoration: underline;
}

#news li a {
  float: left;
  text-align: left;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color:#666;
  text-indent: 18px;
  height: 40px;
  line-height: 48px;
  max-width: 280px;
  overflow: hidden;
  text-decoration: none;
}

.learnmore:after{ 
    content: "\f054";
    color: #f47321;
    padding-left: 0.3em;
    font-family: FontAwesome;
}

@media screen and (max-width: 1600px){
  #news-list {
    margin: 0;
    column-fill: auto;
    /* column-count: 2; */
    -moz-column-fill: auto;
    /* -moz-column-count: 2; */
  }
}

@media screen and (min-width: 1600px){
  #news-list {
    margin: 0;
    column-fill: auto;
    column-count: 2;
    -moz-column-fill: auto;
  }
}


#product h1 {
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}


</style>
