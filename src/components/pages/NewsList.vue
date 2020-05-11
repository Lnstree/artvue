<template>
   <div id="news-container">
        <div>
            <img src="@/assets/news/cover1.jpg" alt="">
        </div>

        <section>
        <div class="left-align" id="inner">
            <div id="inner-left">
                <div id="inner-head">Categories</div>
                <ul  id="inner-tags">
                    <li> <router-link to='/news/page/1'>All News</router-link></li>
                    <li v-for="tag in news_tags">
                       <router-link to="/news/tag/Women/1" > {{ tag }} </router-link>
                    </li>
                </ul>
                <div id="inner-head">Contact US</div>
                <connectme></connectme>
            </div>

            <div id="inner-right">
                <div id="inner-title">News</div>
                <div id="content">
                    <ul v-for="info in page_info.items">
                        <li>
                            <router-link v-bind:to="'/news/' + info.id">{{info.title}}</router-link>
                            <span>{{info.date_time}}</span>
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

export default {
  data () {
    return {
      mail: info.mail,
      mailto: info.mailto,
      news_tags:[],
      news_info: "",
      page_info: "",
      current_url: ""
    }
  },


  created(){
          let self   = this;
          let params = this.$route.params;
          console.log(this.$route.path);

          let handler = (res)=>{
                let data = res.data.items;
                var tags = res.data.tags;

                let index = params.index
                self.$data.page_info  = pageData(index, 10, data);
                self.$data.news_tags  = tags;
                self.$data.news_info  = data;
          };


          if (params.name != undefined){
            var query = JSON.stringify({name:params.name});
            this.$axios.post(host+"news/list", query, {headers:{'Content-Type':'application/json'}}).then(handler).catch(function(err){
                console.log(err);
            });
            self.$data.current_url = "/news/tag/" + params.name + "/";
          }else{
            this.$axios.get(host+"news/list")
                        .then(handler)
                        .catch(function(err){
                                console.log(err);
                        });
            self.$data.current_url = "/news/page/";
          }
  },

  watch:{
      '$route' (to, from) {
          let self   = this;
          let params = this.$route.params;
          console.log(this.$route.path);

          let handler = (res)=>{
                let data = res.data.items;
                var tags = res.data.tags;
                let index = params.index
                self.$data.page_info  = pageData(index, 10, data);
                self.$data.news_tags  = tags;
                self.$data.news_info  = data;
          };


          if (params.name != undefined){
            var query = JSON.stringify({name:params.name});
            this.$axios.post(host+"news/list", query, {headers:{'Content-Type':'application/json'}}).then(handler).catch(function(err){
                console.log(err);
            });
            self.$data.current_url = "/news/tag/" + params.name + "/";
          }else{
            this.$axios.get(host+"news/list")
                        .then(handler)
                        .catch(function(err){
                                console.log(err);
                        });
            self.$data.current_url = "/news/page/";
          }

    }
  },

  methon:{
      getNewsInfo: ()=>{
         console.log(this.$route.params)
      }
  }
}
</script>


<style scoped>

#content{
    font-family: "Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
    color: #333;
}

#content ul{
    list-style: none;
    padding: 0;
}

#content ul li {
    line-height: 38px;
    border-bottom: 1px dashed #ccc;
}

#content ul li a{
    text-decoration: none;
    color: #333;
}

#content ul li span{
    float: right;
    font-size: 14px;
    color: #333;
}

#content ul li a:hover{
    color: red;
    text-decoration: underline;
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


</style>
