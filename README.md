# React Native Testing App

## Getting started
1. Clone this repository
2. Run `npm install` , all required components will be installed automatically

    ### iOS
      
    1. Run `cd /ios && pod install`
    2. Launch in iOS simulator `npm run ios`
    3. Start XCode and open generated `appName.xcworkspace`
    
    ### Android
    1. Launch in android simulator or device `npm run android`
    
    
###    This is my personal repo of react native v61.4
Earlier this was private but I just made it public.
The structuring is also very good everything well separated => `components <-> screens`

This uses :

Redux
Redux SAGA => middleware
API Sauce
Axios
Reduxer
Generator function
React hooks
React navigation v4
Loadash
Redux-persist => For offline support like youtube/zomato

### Also, it has dev level dependencies to deal with:

Jest => App Level Test Cases
ReactToTron => To check which funcs are being called repeatidly and what UI are triggering
ESLint => Like we had in Frendy PWA
Husky => Pre commit lint testing

