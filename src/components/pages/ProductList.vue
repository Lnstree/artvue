
<template>
   <div id="product-container">
        <div>
            <img src="@/assets/news/cover1.jpg" alt="">
        </div>

        <section>
        <div class="left-align" id="inner">
            <div id="inner-left">
                <div id="inner-head">Categories</div>
                <ul  id="inner-tags">
                  <li><router-link to="/product/Custom Silk Scarf/page/1">Custom Silk Scarf</router-link></li>
                  <li><router-link to='/product/Custom Tie/page/1' href="">Custom Tie</router-link></li>
                  <li><router-link to="/product/Cashmere Wool Scarf/page/1">Cashmere Wool Scarf</router-link></li>
                  <li><router-link to="/product/Wholesale Scarves/page/1">Wholesale Scarves</router-link></li>
                  <li><router-link to="/product/Sleep Mask/page/1">Sleep Mask</router-link></li>
                  <li><router-link to="/product/Pajamas/page/1">Pajamss</router-link></li>
                  <li><router-link to="/product/Silk Shawl/page/1">Silk Shawl</router-link></li>
                  <li><router-link to="/product/Men Scarf/page/1">Men Scarf</router-link></li>
                </ul>
                <div id="inner-head">Contact US</div>
                <connectme></connectme>
            </div>

            <div id="inner-right">
                <div id="inner-title">Products</div>
                <div id="content">
                    <ul class="pro_lb1">
                        <li v-for="info in page_info.items">
                            <div class="pimg">
                                <router-link v-bind:to="content_url + info.id">
                                    <img v-bind:src="info.metadata.main_img"> 
                                </router-link>
                            </div>
                            <div class="ptxt">
                                <router-link v-bind:to="content_url + info.id">{{info.metadata.title}}</router-link>
                            </div>
                       </li>
                    </ul>
                </div>
                <div class="pages">
                    <span v-if="page_info.currentPage == 1">First</span>
                    <router-link v-bind:to="current_url + 1" v-if="page_info.currentPage >  1">First</router-link>
                    <span v-if="page_info.currentPage == 1">Prev</span>
                    <router-link v-bind:to="current_url + (page_info.currentPage - 1)" v-if="page_info.currentPage>  1">Prev</router-link>

                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) - 3)"     v-if="parseInt(page_info.currentPage) - 3 >=  1">{{parseInt(page_info.currentPage) - 3}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) - 2)" v-if="parseInt(page_info.currentPage) - 2 >= 1">{{ parseInt(page_info.currentPage) - 2}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) - 1)" v-if="parseInt(page_info.currentPage) - 1 >= 1">{{ parseInt(page_info.currentPage) - 1}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage))" v-if="parseInt(page_info.currentPage) >= 1">{{ parseInt(page_info.currentPage)}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) + 1)" v-if="parseInt(page_info.currentPage) + 1 <=  parseInt(page_info.totalPage)">{{ parseInt(page_info.currentPage) + 1}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) + 2)" v-if="parseInt(page_info.currentPage) + 2 <=  parseInt(page_info.totalPage)">{{ parseInt(page_info.currentPage) + 2}}</router-link>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) + 3)" v-if="parseInt(page_info.currentPage) + 3 <=  parseInt(page_info.totalPage)">{{ parseInt(page_info.currentPage) + 3}}</router-link>

                    <span v-if="parseInt(page_info.currentPage) >=  parseInt(page_info.totalPage)">Next</span>
                    <router-link v-bind:to="current_url + (parseInt(page_info.currentPage) + 1)" v-if="parseInt(page_info.currentPage) <  parseInt(page_info.totalPage)">Next</router-link>
                    <span v-if="parseInt(page_info.currentPage) >=  parseInt(page_info.totalPage)">Last</span>
                    <router-link v-bind:to="current_url + (page_info.totalPage)" v-if="parseInt(page_info.currentPage) <  parseInt(page_info.totalPage)">Last</router-link>

                </div>
            </div>
        </div>
    </section>
   </div>

</template>


<script>
import GLOBAL from '@/config/global_var.js'

function pageData(currentPage,pageSize,data){
     var pageData = {"pageSzie":pageSize,"currentPage":currentPage,"totalPage":0,"items":[]};
     var num = data.length;//数据的长度
     var totalPage = 0;//总页数
     if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
     }else{
        totalPage=parseInt(num/pageSize);
     }
        pageData.totalPage=totalPage;
        var maxLength = currentPage * pageSize - 1;
        var minLength = currentPage * pageSize - pageSize;
        for (var i = minLength; i < data.length; i++) {
             if (maxLength < i) {
                break;
             } else {
              pageData.items.push(data[i]);
             }
        }
    console.log(pageData)
    return pageData;
}

let info = GLOBAL.BB_Info;
let host = info.host;


let handler = (self, params, res)=>{
    let data = res.data;
    console.log(data)
    var tags = [];
    let index = params.index
    let items = data.items

    self.$data.page_info  = pageData(index, 5, items);
    self.$data.news_tags  = data.class_names
    self.$data.news_info  = data;

};

export default {
  data () {
    return {
      company_name: info.company_name,
      company_addr: info.company_addr,
      company_zip:  info.company_zip,
      company_tel:  info.company_tel,
      company_mob:  info.company_mob,
      mail: info.mail,
      mailto: info.mailto,
      page_info: "",
      class_names: [],
      current_url: "",
      content_url: "",
    }
  },

  created(){
        let self   = this;
        let params = this.$route.params;
        let class_name = params.name
        if (class_name == undefined){
            class_name = ""
        }

        console.log(this.$route.path);
        var query = JSON.stringify({id:"", class_name:class_name});
        this.$axios.post(host+"product/list", 
        query, 
        {headers:{'Content-Type':'application/json'}})
        .then(handler.bind(this, self, params))
        .catch(function(err){
            console.log(err);
        });

        if (class_name){
            this.$data.current_url = "/product/" + class_name + "/page/"
            this.$data.content_url = "/product/" + class_name + "/content/"
        }else{
            console.log(class_name + "22222")
            this.$data.current_url = "/product/page/"
            this.$data.content_url = "/product/content/"
        }
  },

  watch:{
      '$route' (to, from) {
        let self   = this;
        let params = this.$route.params;
        console.log(params);
        let class_name = params.name
        if (class_name == undefined){
            class_name = ""
        }

        console.log(this.$route.path);
        var query = JSON.stringify({id:"", class_name:class_name});
        this.$axios.post(host+"product/list", 
        query, 
        {headers:{'Content-Type':'application/json'}})
        .then(handler.bind(this, self, params))
        .catch(function(err){
            console.log(err);
        });
     
    }
  },

  methods:{
      getNewsInfo: ()=>{
         console.log(this.$route.params)
      },
      test_click: (event)=>{
      }
  }
}
</script>


<style>
#inner-tags {
    padding: 0;
    margin: 0;
}

#inner-tags  li {
    list-style: none;
    background-color:antiquewhite;
}


#inner-tags  li a{
    font-weight: 600;
    text-decoration: none;
    color: #666;
}

#inner-tags  li a{
    text-transform: capitalize;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    padding-left: 30px;
    /* background: #ddd url(point.png) no-repeat 13px 17px; */
    border-bottom: 1px solid #fff;
}

#inner-head{
    width: 250px;
    height: 50px;
    background: #f42539;
    text-indent: 30px;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
}

#news-container{
    margin-left: 0;
    margin-right: 0;
}

#content{
    font-family: "Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
    color: #333;
}

#content h1{
    clear: both;
    font-size: 20px;
    font-weight: 700;
    color: black;
    line-height: 22px;
    padding: 0 0 5px 0;
    text-align: center;
    margin-bottom: 0;
}

.inner-align{
    text-align: center;
}

#inner{
    padding-top: 20px;
    width: 1200px;
    /* margin: 0 auto; */
    
}

#inner-left{
    float: left;
    /* background-color:antiquewhite; */
    width: 250px;
    min-height: 600px;
}

#inner-title{
    font-size: 20px;
    font-weight: 700;
    color: #f42539;
}

#inner-right{
    float: right;
    width: 900px;
}

#inner-content{
    margin: 0;
    background-color: white;
}

#inner-content p{
    height: 24px;
}

.pro_lb1{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
}

.pro_lb1 li {
    width: 28%;
    box-sizing: border-box;
    margin: 0 4% 4% 0;
    border: 0;
    height: unset;
    list-style: none;
}

.pro_lb1 li a{
    text-decoration: none;
    font-size: 1.1em;
    font-family: Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Microsoft YaHei;
    color: #333;
}

.pro_lb1 li .ptxt{
    padding-top: 0.4em;
}


.pro_lb1 li .pimg {
    border: 1px solid #ccc;
    width: 100%;
    display: block;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    box-sizing: border-box;
}

.pro_lb1 li .pimg img{
    max-width: 205px;
    max-height: 205px;
}


.pro_lb1 li .pimg a {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    overflow: hidden;
}

.pro_lb1 li .pimg a:hover img{width:110%;height:110%}

.pro_lb1 li .pimg a img {
    width: 100%;
    height: 100%;
    max-width: unset;
    max-height: unset;
    object-fit: contain;
    transition: all .3s;
}

</style>
