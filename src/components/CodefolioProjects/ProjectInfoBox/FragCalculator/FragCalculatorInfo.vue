<template>
  <div class="main">
    <div class="text-box">
      <div class="info-text">
        <p>Tibia frag calculator is a tool I built as my initial coding project. This was a great way to get into coding and learn the thought process behind handling data strings and looking up information online. It&rsquo;s also a very well needed and appreciated tool for the game community it is written for, and is still used nearly everyday.</p>
        <p>The use of this tool prevents the user from going over the limit of how many frags you can take on the MMORPG server each day, month and week. The server keeps track of this in a list of strings stored on your account page. It can be tough to read through the dates, check the times of each frag and calculate the outcome which could lead to you missing a frag and get banned in the process. The frag calculator helps with the calculations and give you the answer clearly.</p>
      </div>
      <div class="tools-used">
        <ul>
          <h2>Tools</h2>
          <li>Python</li>
          <li>pip</li>
          <li>Flask</li>
          <li>HTML/CSS</li>
          <li>Webhotel</li>
        </ul>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
            @app.route('/submit_frags', methods=['POST'])
            def submit_frags():
                frag_list = request.form.get('kills')
                frag_split = frag_list.split('\t')
                list_of_frag_lists = [frag_split[x:x+6] for x in range(1, len(frag_split), 6)]
                result = []
                return render_template('submit_frags.html', result = (unjust_status(timediff(dates(unjusts(list_of_frag_lists))))))
                
            def unjusts(frag_unjusts):
                frag_list = frag_unjusts
                just = ['justified']
                for item in range(len(frag_list) - 1, -1, -1):
                    for x in just:
                        if x in frag_list[item]:
                            del frag_list[item]
                return str(frag_unjusts)

            def dates(dates):
                input_string = dates
                dates_list = list(datefinder.find_dates(input_string))
                return (dates_list)
          </code>
        </pre>
      </div>
    </div>
    <div class="text-box">
      <div class="info-text">
        <p>The input form takes in a string of names, dates and character level and sort out the irrelevant information such as justified frags. It then assign all the dates that contain an unjustified frag to a variabel.</p>
        <p>If a frag is older than a month it gets irrelevant and removed from the list. Pythons datetime module was kind of hard to work with as it converts dates and datetimes different. The best way to get around this was to use seconds as it was the variable both took as a valid input.</p>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
            def remove_old_frags(frag_list):
                dates_list = []
                for date in frag_list:
                    if (datetime.today().replace(tzinfo = None) - date.replace(tzinfo = None)).total_seconds() &lt; 2592000:
                        dates_list.append(date)
                        dates_list = sorted(dates_list, reverse = True)
                return(dates_list)
            
            def count_number_of_unjusts(frag_list):
                day_unjust = 0
                week_unjust = 0
                month_unjust = 0
                for item in frag_list:
                    if item &lt; timedelta(days = 1, minutes = 0, seconds = 0):
                        day_unjust += 1
                    if item &lt; timedelta(days = 7, minutes = 0, seconds = 0):
                        week_unjust += 1
                    if item &lt; timedelta(days = 30, minutes = 0, seconds = 0):
                        month_unjust += 1
                return({
                    "day": day_unjust,
                    "week": week_unjust,
                    "month": month_unjust
                })
          </code>
        </pre>
      </div>
    </div>
    <div class="text-box">
      <div class="info-text">
        <p>What you have to do now is check the daily and weekly span of frags to see if the frag count is past the limit. You can then return a “ban status” or the amount of frags you have left until you are fully banned. The game rules includes a skull system which gives you one month of penalty for exceeding the weekly or daily frag count limit.</p>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
            def check_weekly_span(dates_list):
                status = {
                    "redskull": False,
                    "ban": False
                }
                bans = []
                actually_banned = False
                for delta in dates_list:
                    counter = 0
                    for delta2 in dates_list:
                        if (max([delta2, delta]) - min([delta2, delta])).total_seconds() &lt; 604800:
                            counter = counter + 1
                        if counter &gt; 5:
                            status["redskull"] = True
                        if counter &gt; 10:
                            status["ban"] = True
                            bans.append(delta)
                for ban_time in bans:
                    if (datetime.today().replace(tzinfo = None) - ban_time.replace(tzinfo = None)).total_seconds() &lt; 604800:
                        actually_banned = True
                if status["ban"] and actually_banned:
                    status["ban"] = True
                else:
                    status["ban"] = False
                return(status)
            
            def check_daily_span(dates_list):
                status = {
                    "redskull": False,
                    "ban": False
                }
                bans = []
                actually_banned = False
                for delta in dates_list:
                    counter = 0
                    for delta2 in dates_list:
                        if (max([delta2, delta]) - min([delta2, delta])).total_seconds() &lt; 86400:
                            counter = counter + 1
                        if counter &gt; 2:
                            status["redskull"] = True
                        if counter &gt; 5:
                            status["ban"] = True
                            bans.append(delta)
                for ban_time in bans:
                    if (datetime.today().replace(tzinfo = None) - ban_time.replace(tzinfo = None)).total_seconds() &lt; 604800:
                        actually_banned = True
                if status["ban"] and actually_banned:
                    status["ban"] = True
                else:
                    status["ban"] = False
                return(status)
          </code>
        </pre>
      </div>
    </div>
    <div class="text-box">
      <div class="info-text">
        <p>Last but not least is setting the variable for the HTML output to showcase the result for the player. If you are banned or have received a penalty this output returns how many days, hours and minutes you have left until your banned or red skull status is removed. Otherwise it returns the amount of safe frags you can take before receiving a penalty, which is the main usage of this application. Preventing penalty.</p>
      </div>
    </div>
    <div class="code-content">
      <div class="code-block" v-highlight>
        <pre id="code" class="language-python">
          <code>
        def i_am_banned(frag_list_input):
            ban_left = []
            ban_output = []
            latest_unjust = datetime(1900, 1, 1)
            for item in remove_old_frags(frag_list_input[1]):
                if latest_unjust.replace(tzinfo = None) &lt; item.replace(tzinfo = None):
                    latest_unjust = item
                ban_left = datetime.today().replace(tzinfo = None) - (latest_unjust).replace(tzinfo = None)
                ban_output = timedelta(days = 7, minutes = 0, seconds = 0) - ban_left
                days = ban_output.days
                seconds = ban_output.seconds
                hours = seconds//3600
                minutes = (seconds//60%60)
            return ("","","","You are banned", "DAYS",(days), "HOURS",(hours), "MINUTES",(minutes), " left until ban lift")
            
        def i_am_redskull(frag_list_input):
            frag_counts = count_number_of_unjusts(frag_list_input[0])
            day_frags_left = 5 - frag_counts["day"]
            week_frags_left = 9 - frag_counts["week"]
            month_frags_left = 19 - frag_counts["month"]
            ban_list = min(day_frags_left, week_frags_left, month_frags_left)
            return ("You're redskull, you have",(ban_list), "safe frag(s) until ban")
        
        def i_am_pure(frag_list_input):
            redskull_list =[]
            frag_counts = count_number_of_unjusts(frag_list_input[0])
            if frag_counts["day"] &gt;= 0 or frag_counts["week"] &gt;= 0 or frag_counts["month"] &gt;= 0:
                day_frags_left = 2 - frag_counts["day"]
                week_frags_left = 4 - frag_counts["week"]
                month_frags_left = 9 - frag_counts["month"]
                redskull_list = min(day_frags_left, week_frags_left, month_frags_left)
            return ("You have",(redskull_list), "safe frag(s)")
        
        def unjust_status(frag_list_input):
            already_redskull = False
            if check_weekly_span(remove_old_frags(frag_list_input[1]))["redskull"]\
                or check_daily_span(remove_old_frags(frag_list_input[1]))["redskull"]:
                    already_redskull = True
        
            already_banned = False
            if check_weekly_span(remove_old_frags(frag_list_input[1]))["ban"]\
                or check_daily_span(remove_old_frags(frag_list_input[1]))["ban"]:
                    already_banned = True
        
            if already_banned:
                return i_am_banned(frag_list_input)
            if already_redskull:
                return i_am_redskull(frag_list_input)
            return i_am_pure(frag_list_input)
          </code>
        </pre>
      </div>
    </div>
    <div class="text-box">
      <div class="info-text">
        <p>This was a great first project which taught me a lot about programming. I’m glad it’s still used by the community and I’m always looking for new project ideas to solve problems to existing issues in all kinds of places. Python was a good first language to learn, it was easy to grasp the fundamentals and it gets the job done with ease.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FragCalculatorInfo",

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