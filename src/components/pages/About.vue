<template>
   <div id="about-container">
        <div>
            <img src="@/assets/img/cover/200_800.jpg" alt="">
        </div>

        <section>
        <div class="left-align" id="inner">
            <div id="inner-left">
                <div id="inner-head">Contact US</div>
                <connectme></connectme>
            </div>


            <div id="inner-right">
                <div id="inner-title">About Us</div>
                <div id="content">
                    
                    HUACUIYUAN is a Professional OEM Supplier For Custom Scarves, Fabrics, Silk Garments and Accessories such as Pocket Squares, Foulards, Ties, Eye Masks, Skinny Scarves and Cushions. 
                    We are committed to offering the best quality products to our treasured customers all over the world.

                    <h2>Company Profile</h2>
                    <p>
                         Established in 2005, we are a direct printing factory equipped with the most advanced facilities to meet the highest standards. Currently we have 2 digital printers imported from Italy, 6 high speed printers and 10 average speed printers, with a capacity of 200,000 meters per month. 
                    </p>
                    <p>
                    We insist using the top grade silk material, 6A grade for all our silk types, resulting in great hand feel and expose excellent colors and printing. 
                    </p>
                    <img src="@/assets/about.jpg" />
                    <h2>Our Service</h2>
                    <p>Silk Scarves, Fabrics, Ties and Pyjamas are our advantage products, and there are a wide variety of fabrics in different specifications for your choice.</p>
                    <p>Product Range: Scarves, Fabrics, Pyjamas, Ties, Pocket Squares, Skinny Scarves and Cushions.</p>
                    <p>Material: All kinds of silk material, cotton, linen, modal, viscose, wool, cashmere and also their mix. Polyester is also workable.</p>
                    <!-- <img src="../assets/silks.jpg"/> -->
                    <p> <strong>Free sample swatches</strong> are available for you to check the quality of material, printing and hem. Please feel free to contact us if any interest.</p>
                    <p> <strong>Processing:</strong> Digital printing, screen printing, hand painting and dyeing.</p>
                    <img src="@/assets/process.jpg"/>
                </div>
            </div>
        </div>
    </section>
   </div>
</template>


<script>
import GLOBAL from '@/config/global_var.js'

let info = GLOBAL.BB_Info;
let host = info.host;

export default {
  name: 'News',
  content: 'test',
  data () {
    return {
    }
  },

  created(){
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


<style scoped>



#news-container{
    margin-left: 0;
    margin-right: 0;
}

#content{
    margin-top: 1rem;
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

#content img{
    width:1000px;
    height: 850px;
}


</style>
