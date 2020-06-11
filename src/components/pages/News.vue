<template>
   <div id="news-container">

        <div class="crop">
            <img src="@/assets/img/cover/200_800.jpg" alt="">
        </div>

        <section>
        <div class="left-align" id="inner">
            <div id="inner-left">
                <div id="inner-head">Categories</div>
                <ul  id="inner-tags">
                    <li> <router-link to='/news/page/1'>All News</router-link></li>
                    <li v-for="(tag, index) in news_tags" :key="index">
                       <router-link v-bind:to="'/news/tag/' + tag + '/1'" > {{ tag }} </router-link>
                    </li>
                </ul>
                <div id="inner-head">Contact US</div>
                <div id="inner-content">
                    <p>{{company_name}}</p>
                    <p>Add:{{company_addr}}</p>
                    <p>Zip code:{{company_zip}}</p>
                    <p><i class="fa fa-phone-square fa-lg" aria-hidden="true"> </i> {{company_mob}}</p>
                    <p><i class="fa fa-tty fa-lg" aria-hidden="true"></i> {{company_tel}}</p>
                    <p><i class="fa fa-envelope fa-lg" aria-hidden="true"></i> <a v-bind:href="mailto">{{mail}}</a></p>
                </div>
            </div>

            <div id="inner-right">
                <div id="inner-title">News
                    <span>

                    </span>
                </div>
                <div id="content">
                    <h1>{{news_info.metas.title}}</h1>
                    <div id="news_time">{{news_info.metas.date_time}}</div>
                    <div id="news_content"><span v-html="news_info.sections[0].content"></span></div>
                </div>
            </div>
        </div>
    </section>
   </div>

</template>


<script>
import GLOBAL from '@/config/global_var.js'
import moment from 'moment'

let info = GLOBAL.BB_Info;
let host = info.host;

export default {
  name: 'News',
  content: 'test',
  data () {
    return {
      company_name: info.company_name,
      company_addr: info.company_addr,
      company_zip:  info.company_zip,
      company_tel:  info.company_tel,
      company_mob:  info.company_mob,
      mail: info.mail,
      mailto: info.mailto,
      news_tags:["1", "2", "3"],
      news_info:{metas:{title:"", date_time:""}, sections:[""]}
    }
  },

  created(){
          let params = this.$route.params;
          console.log(this.$route);
          let self = this;
          this.$axios.get(host+"news/list").then(function (res){
                let data = res.data;
                var tags = [];
                for (var i = 0;  i < data.length; ++i){
                    if (data[i].tags != ""){
                        var t = data[i].tags.split(",");
                        tags = tags.concat(t);
                        tags = tags.filter(function(item, index, array){
                            return tags.indexOf(item) === index;
                        })
                        // console.log(tags);
                    }
                }
                let index = params.index
                self.$data.news_tags  = tags;
            }).catch(function(err){
                console.log(err);
          });
          this.$axios.get(host+"news/content/" + params.id).then(function (res){
                let data = res.data;
                console.log(data.metas.date_time)
                let date = new Date(data.metas.date_time);
                date = moment().set(date);
                date = date.format("MMMM d,YYYY");
                data.metas.date_time = date;
                self.$data.news_info = data;
            }).catch(function(err){
                console.log(err);
        });
  },

  watch:{
      '$route' (to, from) {
          let params = this.$route.params;
          console.log(params);
          let self = this;
          this.$axios.get(host+"news/content/" + params.id).then(function (res){
                let data = res.data;
                self.$data.news_info = data;
            }).catch(function(err){
                console.log(err);
            });
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



#news-container{
    margin-left: 0;
    margin-right: 0;
    overflow: hidden;
}

/* #content{
    font-family: "Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
    color: #333;
} */

#news_content{
    color: #333;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    line-height: 1.614285714;
}

#news_content img{
    display: block;
    max-width: 480px;
    max-height: 400px;
    /* padding-left: 200px;
    padding-right: 200px; */
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


#news_time{
    clear: both;
    line-height: 15px;
    margin-bottom: 15px;
    color: #999;
    font-size: 12px;
    text-align: center;
}

</style>
