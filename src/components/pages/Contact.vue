<template>
  <div id="contact-container">
    <div>
      <img src="@/assets/news/cover1.jpg" alt="" />
    </div>

    <section>
      <div class="left-align" id="inner">
        <div id="inner-right">
          <div id="inner-title">Contact Us</div>
          <div id="connectme">
            <connectme></connectme>
            <div class="feedbackForm" id="F1" name="F1">
              <table border="0" align="center" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td align="right"><div class="lable">Your Name:</div></td>
                    <td class="fput">
                      <input
                        v-model="username"
                        placeholder="Please input your name here."
                      />
                    </td>
                  </tr>
                  <tr>
                    <td align="right">
                      <div class="lable">Your Email:</div>
                    </td>
                    <td>
                      <input
                        v-model="useremail"
                        maxlength="50"
                        placeholder="Please input your email here."
                      />
                    </td>
                  </tr>

                  <tr>
                    <td valign="top" align="right">
                      <div class="lable">Content:</div>
                    </td>
                    <td>
                      <textarea
                        v-model="usercontent"
                        cols="50"
                        rows="5"
                        maxlength="2000"
                        placeholder="Please include details like size, weight, destination port and etc., so that we can quote the best price."
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <div class="fsbtn">
                        <button
                          class="submita"
                          id="ImgSend"
                          v-on:click="sendClick"
                        >
                          Send</button
                        ><span id="msg"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GLOBAL from "@/config/global_var.js";

let info = GLOBAL.BB_Info;
let host = info.host;

export default {
  data() {
    return {
      username: "",
      useremail:"",
      usercontent:""
    };
  },

  created() {},

  watch: {
    $route(to, from) {}
  },

  methods: {
    sendClick() {

      let message = {
        name:this.username,
        email:this.useremail,
        content:this.usercontent
      }

      
      this.$axios.post(host+"message", message)
      .then((res)=>{
        console.log(res);
      })
      alert(this.username);
    }
  }
};
</script>

<style scoped>
td {
  padding-right: 10px;
  color: #333;
}

input {
  width: 100%;
}

form {
  height: 100%;
}

form table {
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}

#inner {
  font-size: 1.1em;
}

#inner-right {
  left: 100px;
  right: 100px;
  width: auto;
}

#connectme {
  display: flex;
}

#F1 {
  padding-left: 8em;
}
</style>
