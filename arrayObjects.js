//reverse without using loops or reverse() method
const arr = [10,20,30,40,50]
// const reversedArr =[]
// for (let i = arr.length - 1; i>=0; i--){
//     reversedArr.push(arr[i])
// }
// console.log(reversedArr)
// let [a,b,c,d,e] = arr
// let reversed = [e,d,c,b,a]
// console.log(reversed)

//Split an array into chunks of size n using spread and rest.
const arr2 = [1,2,3,4,5,6,7,8]
let [a,b,c,d,e,f,...rest] = arr2
let parts = [
    [a,b],
    [c,d],
    [e,f],
    rest
]
console.log(parts)

//Question 3
const userProfile = {
  id: 101,
  name: "John Doe",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  posts: [
    { id: 1, title: "Hello", comments: [{ text: "Nice post!" }] },
    { id: 2, title: "World" },
  ],
  getStatus: () => "Active",
};

//1. Get the user's preferred theme, default to "light" if missing.
console.log(userProfile.settings.theme)

// 2. Check if the user has SMS notifications enabled; default to false.
console.log(userProfile.settings.notifications.sms)

// 3. Get the text of the first comment of the second post; default to "No comments".
console.log(userProfile.posts[0].comments[0].text)

// 4. Call the getStatus function safely; default to "Unknown" if missing.
const status = typeof userProfile.getStatus === 'function' 
    ? userProfile.getStatus() 
   : "Unknown";

console.log(status); // Output: "Active"

// 5. Safely access a deeply nested field that doesn't exist 
// (e.g., userProfile.settings.layout.mode); default to "standard".