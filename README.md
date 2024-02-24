This project is intended to explore and substantiate the viability of building Baseline Mobile.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install Package Dependencies

To install the dependencies, run the following command from the _root_ of the project:

```bash
npm install
```

### Additional Step For iOS

```bash
cd ios && pod install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the project:

```bash
npm start
```

## Step 2: Start the App

Let Metro run in its _own_ terminal. Open a _new_ terminal from the _root_ of the project and run the following command to start the app:

### For iOS

```bash
npm run ios
```

### For Android

```bash
npm run android
```

If everything is set up _correctly_, you should see the app running in your _Simulator_ or _Emulator_.

You can also run the app directly from within Xcode and Android Studio, respectively.

## Step 3: Modifying the App

Now that you have successfully run the app, let's modify it.

### App

The app can be modified by editing `App.tsx`.

### Components

Components can be modified by editing the files in the `src/components` directory.

Baseline Mobile! :partying_face:
