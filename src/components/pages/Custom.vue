<template>
  <div id="about-container">
    <div>
      <img src="@/assets/img/cover/200_800.jpg" alt="" />
    </div>

    <section>
      <div class="left-align" id="inner">
        <div id="inner-left">
          <div id="inner-head">Process</div>

          <ul id="inner-tags">
            <router-link to="/news/tag/Women/1"></router-link>
          </ul>

          <div id="inner-head">Contact US</div>
          <connectme></connectme>
        </div>

        <div id="inner-right">
          <div id="inner-title">Custom Service</div>
          <div id="content">
            Hi Dear, welcome to Huacuiyuan custom scarf service page, below is
            some information about custom scarf project, if you need further
            assistance, please contact us.
            <h2>Design</h2>
            <p>
              Files like JPG,JPEG,PDF,AI,TIFF,PSD and etc are all available, the
              design should be 150 DPI at least and make sure it is still clear
              when zoom in its actual size, the design size need to be close to
              scarf size (length,width), leave 37.5px each side for hemming,
              like 90x2250px scarf,the scarf size should be 93x2325px
            </p>
            <p>
              If you have specific need for the color, please offer the pantone
              color number to match the colors you want.
            </p>
            <p>
              If you only have scarf samples, that is also workable, you can
              send the samples, we can scan it and create the same design, but
              that will need extra cost, the cost will up to how complicated the
              designs are.
            </p>

            <h2>Fabrics</h2>
            <p>
              For your better custom scarves, we offer all kinds of fabric for
              your choose, such as silks
              (twill,satin,cdc,chiffon,ggt,habotai,charmeuse...) silk blends
              (silk wool, silk cotton,silk modal...), wool, cotton, modal,linen
              & polyester (twill,chiffon,satin)
            </p>
            <p>
              You can choose the fabric which are better for your designs, if
              you have no idea of how to choose fabric, you can send the designs
              to us,we will provide a professional suggestion
            </p>
            <p>
              Follow are some fabrics for your reference, better for you to know
              them.
            </p>
            <p class="strong">
              <strong
                >Fabric samples can be sent to you without charge if you willing
                to pay shipping cost</strong
              >
            </p>

            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="table"
            >
              <tbody>
                <tr class="firstRow">
                  <td valign="middle" align="center">
                    <p>
                      <img
                        src="@/assets/img/fabric/silk_twill.png"
                        alt=""
                        width="198"
                        height="180"
                        title="silk twill.png"
                      />
                    </p>
                  </td>
                  <td valign="middle" align="center">
                    <p>
                      <img
                        title="silk georgette.png"
                        src="@/assets/img/fabric/silk_ggt.png"
                        width="198"
                        height="180"
                        alt="silk georgette.png"
                      />
                    </p>
                  </td>
                  <td valign="middle" align="center" colspan="1" rowspan="1">
                    <p>
                      <img
                        title="Modal Silk.png"
                        src="@/assets/img/fabric/silk_modal.png"
                        width="198"
                        height="180"
                        alt="Modal Silk.png"
                      />
                    </p>
                  </td>
                  <td valign="middle" align="center">
                    <p>
                      <img
                        title="silk satin.png"
                        src="http://www.customsilkscarfs.com/Content/ueditor-builder/net/upload1/Other/7552/6357817873300348905610177.png"
                        width="198"
                        height="180"
                        alt="silk satin.png"
                      />
                    </p>
                  </td>
                </tr>

                <tr>
                  <td valign="middle" align="center"><p>Silk Twill</p></td>
                  <td valign="middle" align="center"><p>Silk GGT</p></td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <p>Silk Modal</p>
                  </td>
                  <td valign="middle" align="center"><p>Silk Satin</p></td>
                </tr>
                <tr>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="silk chiffon.png"
                        src="@/assets/img/fabric/silk_chiffon.png"
                        width="198"
                        height="180"
                        alt="silk chiffon.png"
                      />
                    </p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="silk crepe de chine.png"
                        src="@/assets/img/fabric/silk_cdc.png"
                        width="198"
                        height="180"
                        alt="silk crepe de chine.png"
                      />
                    </p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <p>
                      <img
                        title="silk cotton.png"
                        src="@/assets/img/fabric/silk_cotton.png"
                        width="198"
                        height="180"
                        alt="silk cotton.png"
                      />
                    </p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="silk habotai.png"
                        src="@/assets/img/fabric/silk_habotai.png"
                        width="198"
                        height="180"
                        alt="silk habotai.png"
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="92" valign="middle" align="center">
                    <p>Silk Chiffon</p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>Silk CDC</p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <p>Silk Cotton</p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>Silk Habotai</p>
                  </td>
                </tr>
                <tr>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="Silk Wool.png"
                        src="@/assets/img/fabric/silk_wool.png"
                        width="198"
                        height="180"
                        alt="Silk Wool.png"
                      />
                    </p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="silk stripe satin.png"
                        src="@/assets/img/fabric/silk_stripe_satin.png"
                        width="198"
                        height="180"
                        alt="silk stripe satin.png"
                      />
                    </p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <p>
                      <img
                        title="modal cashmere.png"
                        src="@/assets/img/fabric/modal_cashmere.png"
                        width="198"
                        height="180"
                        alt="modal cashmere.png"
                      />
                    </p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>
                      <img
                        title="modal wool.png"
                        src="@/assets/img/fabric/modal_wool.png"
                        width="198"
                        height="180"
                        alt="modal wool.png"
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="92" valign="middle" align="center">
                    <p>Silk Wool</p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>Silk Stripe Satin</p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <p>Modal Cashmere</p>
                  </td>
                  <td width="92" valign="middle" align="center">
                    <p>Modal Wool</p>
                  </td>
                </tr>
                <tr>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <p>
                      <img
                        title="cotton.png"
                        src="@/assets/img/fabric/100_cotton.png"
                        width="198"
                        height="180"
                        alt="cotton.png"
                      />
                    </p>
                  </td>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <p>
                      <img
                        title="Wool.png"
                        src="@/assets/img/fabric/100_wool.png"
                        width="198"
                        height="180"
                        alt="Wool.png"
                      />
                    </p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <br />
                  </td>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <br />
                  </td>
                </tr>
                <tr>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <p>100% Cotton</p>
                  </td>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <p>100% Wool</p>
                  </td>
                  <td
                    valign="middle"
                    align="center"
                    colspan="1"
                    rowspan="1"
                    width="92"
                  >
                    <br />
                  </td>
                  <td
                    valign="middle"
                    colspan="1"
                    rowspan="1"
                    align="center"
                    width="92"
                  >
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Sizes</h2>
            <p>
              Below are some popular sizes for scarves, bandana, Hermes silk
              twilly, triangular scarves or infinity scarves, also any size can
              be customized.
            </p>
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="table"
            >
              <tbody>
                <tr class="firstRow">
                  <td valign="top" width="189"><p>Square Scarves</p></td>
                  <td valign="top" width="189"><p>Size in Inches</p></td>
                  <td valign="top" width="189"><p>Size in Centimeters</p></td>
                </tr>
                <tr>
                  <td valign="top" width="189"><p>Common Scarves</p></td>
                  <td valign="top" width="189"><p>36x36</p></td>
                  <td valign="top" width="189"><p>90x90</p></td>
                </tr>
                <tr>
                  <td valign="top" width="189"><p>Large Size Shawls</p></td>
                  <td valign="top" width="189"><p>44x44,55x55</p></td>
                  <td valign="top" width="189"><p>110x110,140x3500px</p></td>
                </tr>
                <tr>
                  <td valign="top" width="189"><p>Bandana Scarves</p></td>
                  <td valign="top" width="189"><p>27x27</p></td>
                  <td valign="top" width="189"><p>70x70</p></td>
                </tr>
                <tr>
                  <td valign="top" width="189"><p>Pocket Square</p></td>
                  <td valign="top" width="189"><p>22x22</p></td>
                  <td valign="top" width="189"><p>55x55</p></td>
                </tr>
                <tr>
                  <td valign="top" width="189"><p>Hijab</p></td>
                  <td valign="top" width="189"><p>36x36</p></td>
                  <td valign="top" width="189"><p>90x90</p></td>
                </tr>
              </tbody>
            </table>
            <h2>Printing</h2>
            <h3>Digital Printing</h3>
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="table"
            >
              <tbody>
                <tr class="firstRow">
                  <td valign="middle" align="center">
                    <p>
                      <img
                        src="@/assets/digit_print.jpg"
                        alt="digital printing.jpg"
                        width="359"
                        height="229"
                        title="digital printing.jpg"
                        style="width: 359px; height: 229px;"
                      />
                    </p>
                  </td>
                  <td valign="top" align="left">
                    <p>
                      Digital printing has the advantage of producing complex
                      designs whichhave gradient colors and photographic images.
                    </p>
                    <p>
                      Digital printing effect is better on front side,color is
                      better match with the original design.
                    </p>
                    <p>
                      Digital printing will need the file in
                      PDF,AI,TIF,JPG,JPEG, no less than 150 DPI, design size
                      should be close to silk scarf actual size.
                    </p>
                    <p>
                      Digital printing allows short turnaround time, for
                      samples, only need 10 days, massorder basically need about
                      20 days.
                    </p>
                    <p>
                      Digital printing allows low MOQ: 20pcs/design, can be
                      lower if many patterns.
                    </p>
                    <p><br /></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <span style="font-size: 18px;"
                ><strong
                  ><img
                    src="@/assets/machine.jpg"
                    title="machine"
                    alt="machine"
                    width="790"
                    height="257"
                    style="width: 790px; height: 257px;"/></strong
              ></span>
            </p>

            <h3>Screen Printing</h3>
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="table"
            >
              <tbody>
                <tr class="firstRow">
                  <td valign="middle" align="center">
                    <p>
                      <img
                        src="@/assets/screen_print.jpg"
                        alt="screen printing.jpg"
                        width="360"
                        height="192"
                        title="screen printing.jpg"
                        style="width: 360px; height: 192px;"
                      />
                    </p>
                  </td>
                  <td valign="top" align="left">
                    <p>
                      The main advantage is the vivid results it creates, not
                      only on the front side but reverse side.For screen
                      printing,not matter how thick the silk fabric is, the
                      penetration can be good as well, quality is same as the
                      Hermes silk printing quality.
                    </p>
                    <p>
                      Screen Printing is Versatile, Durable, and Vibrant, with
                      cheaper price compared with digital printing
                    </p>
                    <p>
                      Samples can be remade without extra cost if quality or
                      color has much difference with your requested
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Edge & Hemming</h2>
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="table"
            >
              <tbody>
                <tr class="firstRow">
                  <td valign="middle" align="center">
                    <img
                      src="@/assets/edge.png"
                      alt="Label.png"
                      width="359"
                      height="148"
                      title="Label.png"
                      style="width: 359px; height: 148px;"
                    />
                    <p><br /></p>
                  </td>
                  <td width="524" valign="top" align="left">
                    <p>
                      A. Hand rolling is more elegant and beautiful,also we can
                      offer Hermes hand rolling, suggested<br />
                    </p>
                    <p>
                      B. Machine is better for large quantity with lower
                      price,zigzag machine hemming and straight machine hemming
                      are all available
                    </p>
                    <p>
                      C. Fringe or tassels is better for large sizes, length
                      about 1-50px, according to your need
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Labels and Package</h2>
            <p>
              Washing instruction& composition label will be put on each of
              scarf. Custom label can be customized by putting own contents on
              it sewing labels on scarf is totally free,label cost: $35 for
              500pcs (MOQ). Every piece of your scarves will be pack in OPP bag
              individually.
            </p>
            <h2>Shipping & Delivery</h2>
            <p>
              Scarves will be sent via DHL,FEDEX or TNT with shipping cost
              prepaid, door to door service, 3-4 days will send to your hand
            </p>

            <strong
              >Please contact us if any problem or any suggestion, any comment
              will be highly appreciated.</strong
            >
            <p>Tel:{{ company_tel }}</p>
            <p>Mobile:{{ company_tel }}</p>
            <p>Email:{{ mail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GLOBAL from "@/config/global_var.js";
import connectme from '@/components/common/ConnectMe'

let info = GLOBAL.BB_Info;
let host = info.host;

export default {
  name: "News",
  content: "test",
  data() {
    return {
      company_name: info.company_name,
      company_addr: info.company_addr,
      company_zip: info.company_zip,
      company_tel: info.company_tel,
      company_mob: info.company_mob,
      mail: info.mail,
      mailto: info.mailto
    };
  },

  components:{
    connectme
  },

  created() {},

  watch: {
    $route(to, from) {}
  },

  methon: {
    getNewsInfo: () => {
      console.log(this.$route.params);
    }
  }
};
</script>

<style scoped>


.table {
  border-collapse: collapse;
}
.table td,
.table th {
  border: 1px solid #cdcdcd;
  padding: 5px;
}
.table p {
  padding: 0;
  margin: 0;
}

#inner-head {
  width: 250px;
  height: 50px;
  background: #f42539;
  text-indent: 20px;
  font-size: 18px;
  color: #fff;
  line-height: 50px;
  margin: 10px 0;
}
#news-container {
  margin-left: 0;
  margin-right: 0;
}



#content h1 {
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
