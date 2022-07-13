<template>
  <div class="main">
    <div class="text-box">
      <div class="info-text">
        <p>A web scraper I built for a friend of mine. The targeted webpage used to post their list of products quarterly in an XML file which he used to check for price drops. They stopped doing this and he needed a way to get a hold on the data again. This file doesn&rsquo;t include the API&rsquo;s, but I have left the code to show the functionality of this project.</p>
        <p>This project is purely backend and results in two JSON txt files which is used to compare the old data with the new. Included is a set scheme to run this on, for example, a headless raspberry pi connected to VNC viewer as I did during the testing progress. </p>
      </div>
      <div class="tools-used">
        <ul>
          <h2>Tools</h2>
          <li>Python</li>
          <li>pip</li>
          <li>RaspberryPi</li>
        </ul>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
            import requests
            import json
            import datetime
            import os
            import schedule
            import time
            from deepdiff import DeepDiff
            import re
            
            #--------------------------------- DOWNLOAD PRODUCTS ------------------------------------
            def get_data():
                page = 1
                result = {}
                data = {}
                parameters_count = 17
                url_count = 0
                today = datetime.datetime.today().strftime("%Y-%m-%d-")
            
                print("\nDownloading data...")
                while True:
                    parameters = ["",""]
                    parameters_pick = f"{parameters[parameters_count]}"
                    url = [f"", f""]
                    url_pick = f""
                    if parameters_count &lt;= 17:
                        payload={}
                        headers = {
                        'authority': '',
                        'accept': 'application/json, text/plain, */*',
                        'dnt': '1',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
                        'ocp-apim-subscription-key': '',
                        'sec-gpc': '1',
                        'origin': '',
                        'sec-fetch-site': 'same-site',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'referer': '',
                        'accept-language': 'en-US,en;q=0.9,sv;q=0.8'
                        }
                        response = requests.request("GET", url_pick, headers=headers, data=payload).json()
                        try:
                            data_items = {item["productNumber"]:item for item in response['products']}
                            data.update(data_items)
                        except KeyError:
                            print(f"End of products: {parameters_pick}, Page Number: {page}")
                            parameters_count += 1
                            page = 1
                            if parameters_count &lt;= 17:
                                print(f"Current count: {parameters_count} out of 17.\n")
                            elif parameters_count &gt; 17 and url_count == 1:
                                # REMOVE OLDEST FILE
                                if os.path.exists("old_data.txt"):
                                    os.remove("C:\\Users\oloof\Documents\old_data.txt")
                                else:
                                    print("The file does not exist")
                                if os.path.exists("old_data-id.txt"):
                                    os.remove("C:\\Users\oloof\Documents\old_data-id.txt")
                                else:
                                    print("The file does not exist")
                                # RENAME OLD FILE
                                os.rename(r"C:\\Users\oloof\Documents\new_data.txt", r"C:\\Users\oloof\Documents\old_data.txt")
                                os.rename(r"C:\\Users\oloof\Documents\new_data-id.txt", r"C:\\Users\oloof\Documents\old_data-id.txt")
                                # WRITE NEW FILE
                                with open(f"new_data.txt", "w") as file:
                                    file.write(json.dumps(data))
                                    break
                                # WRITE NEW FILE ID
                                data_dict = []
                                with open("new_data.txt", "r") as file:
                                    data = json.load(file)
                                for key in data.keys(): data_dict.append(key)
                                with open("new_data-id.txt", mode="w") as file:
                                    for i in data_dict:
                                        file.write(("%s\n" % i))
                            elif parameters_count &gt; 17:
                                parameters_count = 0
                                print("\n")
                                print(f"Current count: {parameters_count} out of 17.\n")
                                url_count += 1
                        else:
                            page += 1
                            print(url_pick)
                print(f"\nThere are {len(data)} products in result")
            
            #----------------------------- GET PRICE DROP PRODUCTS ---------------------------------
                price_drop = []
                with open("new_data.txt") as json_file:
                    data = json.load(json_file)
                    data_dict = {key:value["price"] for (key,value) in data.items()}
            
                with open("old_data.txt") as json_file:
                    data = json.load(json_file)
                    data_comp_dict = {key:value["price"] for (key,value) in data.items()}
            
                diff = DeepDiff(data_dict, data_comp_dict)
                try:
                    price_check = {key:value for (key,value) in diff["values_changed"].items()}
                    for item in price_check.items():
                        if item[1]["new_value"] &lt; item[1]["old_value"]:
                            price_drop.append(item)
                        elif item[1]["new_value"] &gt; item[1]["old_value"]:
                            price_drop.append(item)
                        else:
                            pass
            
                except KeyError:
                    print("Nothing changed")
                else:
                    if os.path.exists("old_price_drop.txt"):
                        os.remove("C:\\Users\oloof\Documents\old_price_drop.txt")
                    else:
                        print("The file does not exist")
                    if os.path.exists("price_drop.txt"):
                        os.rename(r"C:\\Users\oloof\Documents\price_drop.txt", r"C:\\Users\oloof\Documents\old_price_drop.txt")
                    else:
                        print("The file does not exist")
                    price_dict = {key:value for (key,value) in price_drop}
                    for item in price_dict.items():
                        percent_value = float(round(((item[1]["new_value"] - item[1]["old_value"])/(item[1]["new_value"] + item[1]["old_value"]) * 100), 1))
                        percent = ((percent_value)-((percent_value)*2))
                        item[1].update({"percent": percent})
            
                    #Check ID for products in price_drop
                    price_keys_id = []
                    for key in price_dict:
                        result = re.sub('[^0-9]','', key)
                        price_keys_id.append(result)
            
                    with open("price_drop_id.txt", "a") as file:
                        file.write(price_keys_id)
                    with open("price_drop.txt", "w") as file:
                        file.write(json.dumps(price_dict))
            
            schedule.every().monday.at("22:35").do(get_data)
            while 1:
                schedule.run_pending()
                time.sleep(1)
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebScraperInfo",

  methods: {
  },
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
  font-size: 16px;
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
  width: 80%;
}

.info-text {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
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
  font-size: 18px;
  
}

ul {
  text-align: center;
}

li {
  display: inline-flex;
  text-align: center;
  padding: 15px;
  font-size: 18px;
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