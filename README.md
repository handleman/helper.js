# HLP module (pure js version)


Module in which i am collecting functions and utility objects i use in my daily tasks.I am glad to share it with others.

## Connection and use

My module is pretty easy to use. Just plug it into your code by javascript tag `<script src="helper.js">`

Module creates object `HLP` which contains some utility methods and objects. Below you can find brief description for each one.

===

### HLP.whatBrowser

A function which returns specified data depending on a user's browser

**Syntax**

```javascript
HLP.whatBrowser({'browser name [browser version]':'string to return by function', ...});
```

***using example:***

```javascript
var currentBrowser = HLP.whatBrowser({"firefox":"Current browser is firefox","ie":"Explorer you dont know how to rock","chrome safari":" based on webkit","opera":"geek opera"});
```

Where variable currentBrowser will recieve value ' based on webkit'. Which is result for current browser

===

### HLP.whatDevice

A function which defines whether it is executed on mobile device

***Syntax***

```javascript
HLP.whatDevice.iOS(); // returns true on iOS Devices
HLP.whatDevice.Android(); // returns true on Android Devices
HLP.whatDevice.BlackBerry(); // returns true on BlackBerry Devices
HLP.whatDevice.Opera(); // returns true on any Devices with Opera Mini or Opera Mobile browser
HLP.whatDevice.Windows(); // returns true on Devices with IE Mobile browser
HLP.whatDevice.any(); // returns true on any mobile device
```

***using example:***

```javascript
var currentBrowser = HLP.whatDevice.any();
```

Where variable currentBrowser will recieve value 'false'. Which is result for current platform (mobile or not)

===

### HLP.inlineStyle

A function which returns value of inline style attribute accordingly defined css property.

***Syntax***

```javascript
var inlineStyleElement = document.querySelector("#inlineStyleExample"),
	inlineOutputElement = document.querySelector("#resultInline");
	inlineOutputElement.innerHTML = HLP.inlineStyle(inlineStyleElement, 'color');
```

***Using example:***

```javascript
var currentInlyneStyleValue = HLP.inlineStyle(inlineStyleElement, 'color');
```

Where inlineStyleElement is target DOM object element. Second parameter is a css property name.
