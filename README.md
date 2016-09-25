# ILuvMysuru Build  for Apk

[![Build Status](https://travis-ci.org/bullhorn/career-portal.svg)](https://github.com/kathirr007/ILuvMysuru)

**[ILuv Mysuru](https://github.com/kathirr007/ILuvMysuru)** is the prject of an app for the Namma Mysuru about the latest updates of Mysuru. Build from website to app Android app.

## To Build and Run the project

In order to Check App functionality, ensure that you have **[Git](http://git-scm.com/downloads)** and **[Node.js](http://nodejs.org)** installed.

Clone a copy of the repo:

```
git clone https://github.com/kathirr007/ILuvMysuru.git
```

Change to the Project directory:

```
cd ILuv-Mysuru_dev_WorkFlow
```

Install build tools and dev dependencies:

```
npm install -g gulp
npm install
```

Exect the following to check the functionality in browser

```

## For Develolment version

...
gulp                 # Build development version of App in `/builds/development`
...

## For production version

Change local NODE_ENV to production and execute the following

...
gulp                 # Build production version of App in `/builds/production`
```