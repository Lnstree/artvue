<template>
   <div id="product-container">
        <div>
            <img src="@/assets/img/cover/200_800.jpg" alt="">
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
                    <div id="product_info">
                        <div class="fl">
                            <img v-bind:src="product_info.main_img"> 
                        </div>
                        <div class="fr">
                            <h1>{{product_info.name}}</h1>
                            <span v-html="product_info.intro"></span>
                        </div>
                    </div>
                    <div id="product_content"><span v-html="product_info.content"></span></div>
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
    console.log(res)
    let data = res.data.content;
    var tags = [];
    let index = params.index
    self.$data.page_info  = pageData(index, 5, data);
    self.$data.product_info = data;
}

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
      product_info:"",
      current_url: ""
    }
  },
  created(){
        let self   = this;
        let params = this.$route.params;
        console.log(params);
        let class_name = params.name
        if (class_name == undefined){
            class_name = ""
        }

        console.log(this.$route.path);
        var query = JSON.stringify({id:params.id, class_name:class_name});
        this.$axios.post(host+"product/content", 
        query, 
        {headers:{'Content-Type':'application/json'}})
        .then(handler.bind(this, self, params))
        .catch(function(err){
            console.log(err);
        });
  },

  watch:{
      '$route' (to, from) {
       }
  },

  methon:{
      getNewsInfo: ()=>{
         console.log(this.$route.params)
      }
  }
}
</script>


<style>

#product-container{
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

#news_content{
    padding-top: 10px;
    line-height: 23px;
    font-size: 14px;
    text-align: left;
    word-break: normal;
}



#product_info{
    width: 900px;
    display: inline-block;
    padding-bottom: 20px;
    border-bottom: 1px dashed #ccc;
}

#product_info img{
    height: 300px;
    width: 300px;
}

#product_info .fl{
    float: left;
}

#product_info .fr{
    width: 500px;
    float: right;
}

#product_info .fr h1{
    line-height: 34px;
    margin-bottom: 10px;
    font-weight: 600;
    width: 500px;
    display: block;
    font-size: 19px;
    border-bottom: 1px dashed #ddd;
    padding: 7px 0;
}



</style>
