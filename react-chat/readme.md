# React-chat
## Welcome to day three

## Add Firebase to the app
Firebase has already been introduced as a dependency for the app, but everyone will need to create a seporate `firebase.config.js` file before building the project
1. Create a file called `src/firebase.config.js`
2. If you don't already have one, [create a new Firebase app](https://console.firebase.google.com/u/0/) with add project
3. In `src/firebase.config.js`, `Export` a config JSON object with your firebase credentials filled in.
```
export default {
	apiKey: "`<`apiKey`>`",
    databaseURL: "https://`<`databaseName`>`.firebaseio.com",
    projectId: "`<`projectId`>`"
}
```

## Tasks
### Easy
* Style the [editor component](./src/components/editor)
  * Add an `index.scss` file to `src/components/editor` and `@import` it from `src/index.scss`
  * Add a `$NS` variable to the stylesheet that matches the `const NS` provided in editor (NS stands for Name Space, so we don't have to manually namespace our classes)
  * Get Rid of that ugly default input text and button style!
* Add the delete function

### Medium
* Add a live delete when 

### Difficult 
* Add Change logic