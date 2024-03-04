<!-- 

# show this timer format on ui: 02:23:01

# total time
# current time left 
# time === 00 =: out of time

# input hours and minutes and seconds 
# start the timer 
# pause the timer
# stop the timer and show record 
# reset the timer 
# we need an timer interval to subtract 1 second at each second (so: runs each second)
# show progress bar =: how much percentage of total time has passed 
# pause the progress bar when timer stops
# timer reaches 0 seconds =: stop and show run out of time
# if: timer is zero =: don't start the timer
# make a sound when timer is down

#**
representing time: (options)

When implementing a countdown timer in JavaScript with the format hours:minutes:seconds, you have several options for representing and managing time. Here are three common approaches:

Using a Single Numeric Value for Total Seconds:

In this approach, you represent the remaining time as a single numeric value representing the total number of seconds remaining.
You decrement this value by 1 every second and then convert it into hours, minutes, and seconds for display purposes.
Example: Representing 1 hour, 30 minutes, and 45 seconds as totalSeconds = 1 * 3600 + 30 * 60 + 45 = 5445.
Using Separate Variables for Hours, Minutes, and Seconds:

In this approach, you maintain separate variables for hours, minutes, and seconds remaining.
You decrement the seconds variable by 1 every second and then adjust minutes and hours accordingly when necessary.
Example: Start with hours = 1, minutes = 30, seconds = 45. Decrement seconds, and if it reaches 0, decrement minutes and reset seconds to 59. Repeat for minutes and hours.
Using JavaScript's Date Object:

You can also use JavaScript's Date object to represent the countdown time.
Calculate the difference between the target end time and the current time to determine the remaining time.
Extract hours, minutes, and seconds from this difference for display purposes.
Example: Calculate the difference between the target end time and the current time using new Date(targetEndTime - currentTime), then extract hours, minutes, and seconds from this difference.
Each approach has its pros and cons, and the choice depends on factors such as ease of implementation, readability, and specific requirements of your application.

=====================================

# 

-->


<!-- 

************************************
# can't use a custom hook inside of a parent and child =: we get different objects.

https://stackoverflow.com/questions/71269175/usestate-not-working-inside-a-custom-react-hook


-->