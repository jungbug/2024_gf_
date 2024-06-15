#### 📱iOS
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. navigate to the iOS folder using a terminal `cd ios && pod install` 
3. run `yarn ios` at root

#### 📱Android 
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. run `yarn android`

#### Notes
If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
1. Open a new terminal and navigate to the project
2. Run `adb reverse tcp:8081 tcp:8081`
3. Run `yarn start`
4. Run `yarn android` 
