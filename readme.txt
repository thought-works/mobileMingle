Software requirements:                              

Xcode 3: https://developer.apple.com/xcode/ (Xcode 4 untested)
PhoneGap >1.3: http://phonegap.com/  
Ruby/Rake
Ruby mongo gem

Build instructions:

The web application is designed to work autonomously, with an option to deploy to phone gap for a native client app. 

*Web application*
Open root in web browser. 

*phoneGapApplication*
0. gem install mongo
1. copy web files to phoneGap WWW directory using : rake copyToPhoneGapWWW
2. open phoneGapProject in Xcode
3. build and run (will open simulator)       

