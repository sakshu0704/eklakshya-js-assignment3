var twister=`Peter piper picked a peck of pickled peppers 
a peck of pickled peppers peter piper picked
if peter piper picked a peck of pickled peppers
where's the pick of pickled peppers peter picked?`

console.log('the twister is---->',twister);
var printOddNums=function(str1){
    const count= str1.match(/[o]/gi).length;
    return count;
}
console.log("count of\'o\'=",printOddNums(twister));