<template>
  <div class="main">
    <div class="text-box">
      <div class="info-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos.</p>
      </div>
      <div class="tools-used">
        <ul>
          <h2>Tools</h2>
          <li>Vue.js</li>
          <li>Node</li>
          <li>Android</li>
          <li>APK</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
          import datefinder, os
          from datetime import date, datetime, timedelta
          from flask import Flask, render_template, request, redirect
          
          app = Flask(__name__)
          
          @app.route('/')
          def render_index():
              return render_template('index.html')
              
          @app.route('/art')
          def render_art():
              return render_template('art.html')
              
          @app.route('/support')
          def render_support():
              return render_template('support.html')
              
          @app.route('/submit_frags', methods=['POST'])
          </code>
        </pre>
      </div>
    </div>
    <div class="text-box">
      <div class="info-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit omnis deleniti architecto explicabo corporis accusantium eos quibusdam sed beatae cum consequuntur veritatis veniam praesentium doloribus, corrupti ad eaque expedita!</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AfasiaInfo",
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

ul {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  list-style: none;
}

li {
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
}

.text-box {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 90%;
}

.info-text {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  font-size: 20px;
  font-family: Elena,-apple-system,BlinkMacSystemFont,Roboto,roboto slab,droid serif,segoe ui,system-ui,Arial,sans-serif;;
  font-style: normal;
  line-height: calc(1.5em + .2vw);
  word-break: break-word;
}

.tools-used {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 60px;
}

.code-content {
  position: relative;
  width: 100%;
  margin: 30px 0 40px 0;
}

.code-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#code {
  padding: 40px 20px 20px 20px;
}

@media only screen and (max-width: 1100px) {
.text-box {
  margin: 0 0 0 0;
  flex-direction: column;
  width: 100%;
}

.info-text {
  padding: 0 0 0 0;
  font-size: 20px;
}

ul {
  text-align: center;
}

li {
  display: inline-flex;
  text-align: center;
  padding: 15px;
  font-size: 20px;
}

.tools-used {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 0px;
}

.code-content {
    margin: 45px 0 45px 0;
}
}
</style>