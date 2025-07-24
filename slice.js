const address = 'Andrkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = "I am a good and hardworking person.";
// console.log(sentence.split(' '))
// console.log (sentence.split ('a'))

const friendsStr = 'Rahim,karim,darim,fahim';
const friends = friendsStr.split(',')
console.log(friends);
const realFriend = [ 'Rahim', 'karim', 'darim', 'fahim' ]

console.log(realFriend.join());
console.log(realFriend.join('-'));
console.log(realFriend.join('|'));