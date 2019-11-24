var num = [10,20,30];
console.log(num[2]);
var topics = ['node','mocha','chai'];

var newtopics = [...topics,'Angular','react','Jest'];
newtopics.push('svelt');
console.log(newtopics);

newtopics.slice(3,1);
console.log(newtopics);