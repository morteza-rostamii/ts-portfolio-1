<!-- 

# color game: 
==

# what is this color game?
==

# pick 3 random hex colors.
# pick a target color.
# show the target color on screen.
# user clicks on any of 3 hex colors.
  # if: correct:
    # show success message.
    # generate new colors.
    # show the new target color.
  # if: wrong: 
    # show error.
    # user can pick another one.


#----------------

1# understand the problem and gather general info.
2# break the problem into small pieces.
3# make a re-search list and answer each question.
4# write pseudo code.
5# write code.
6# refactor code.

#----------------

# re-search: 
# what is a hex color? 
# how to generate 3 random hex colors?
# what states do i need?

==============================

# how hex works?
==

# 6 digits
# red, green, blue
# base 16 digits 

# 0 to 9
# A to F =: 10 to 15

# A = 10
# B = 11

First two digits: Red intensity (00-FF, where FF is maximum)
Second two digits: Green intensity (00-FF)
Last two digits: Blue intensity (00-FF)

#FF0000

# short hand
#F00 is equivalent to #FF0000 as both represent pure red.



=========================

Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google
firebase login
Initiate your project
Run this command from your app's root directory:

firebase init
Specify your site in firebase.json
Add your site ID to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.

{
  "hosting": {
    "site": "rostami-react",

    "public": "public",
    ...
  }
}
When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

firebase deploy --only hosting:rostami-react
After deploying, view your app at rostami-react.web.app

Need help? Check out the Hosting docs

====================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlm2HdileRHvSRjjxXE4gUjrigMbzoADE",
  authDomain: "portfolio1-b6d40.firebaseapp.com",
  projectId: "portfolio1-b6d40",
  storageBucket: "portfolio1-b6d40.appspot.com",
  messagingSenderId: "676820010562",
  appId: "1:676820010562:web:c7fca1bd4e07e360d44fdb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 -->


 