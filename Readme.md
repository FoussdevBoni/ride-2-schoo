<h1 align="center"> Taxi App </h1> <br>
<p align="center">
  <a>
    <img alt="Taxi App" title="GitPoint" src="https://user-images.githubusercontent.com/80385154/198151101-85d64386-09ae-465a-8f53-652c1f07ac66.png" height="100">
  </a>
</p>

<p align="center">
  Built with React Native.
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Feedback](#feedback)
- [Build Process](#build-process)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Book Taxi easily and comfortably. Choose among 3 types of taxi according to your needs.

**Available for both iOS and Android.**

<p align="center">
  <img src = "https://user-images.githubusercontent.com/80385154/198152796-c4bb4a4f-e78e-4a28-8e49-f08ff2a3b4aa.jpg" height=250>
</p>

## Features

A few of the things you can do with GitPoint:

* ✅ Clean UI built with React Native
* ✅ Enter Origin, Destination to get approximated travel time, distance and prices
* ✅ 3 categories of cars available: Mini, Standar, Large
* ✅ Open Source Application
* ✅ Implements Google Places API
* ✅ Implements Google Autocomplete API [type some letters and google would suggest a location]
* ✅ Implements Distance Matrix API

<p align="center">
  <img src = "https://user-images.githubusercontent.com/80385154/198152429-d7b1c351-8913-47ac-9102-a6b77607a78d.gif" height=350>
</p>

## Feedback

Feel free to [file an issue](https://github.com/Joaquin144/taxi-app/issues/new). Feature requests are always welcome along with contributions.

## Build Process

- Follow the [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) for getting started building a project with native code. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `yarn` to install dependencies
- `yarn run link` to link react-native dependencies
- `yarn start:ios` to start the packager and run the app in the iOS simulator (`yarn start:ios:logger` will boot the application with [redux-logger](<https://github.com/evgenyrodionov/redux-logger>))
- `yarn start:android` to start the packager and run the app in the the Android device/emulator (`yarn start:android:logger` will boot the application with [redux-logger](https://github.com/evgenyrodionov/redux-logger))

Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed process on how to build your application as well as troubleshooting information.

**Development Keys**: The `CLIENT_ID` and `CLIENT_SECRET` in `api/index.js` are for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating an [OAuth application](https://github.com/settings/applications/new) of your own. Set the "Authorization callback URL" to `gitpoint://welcome`.
