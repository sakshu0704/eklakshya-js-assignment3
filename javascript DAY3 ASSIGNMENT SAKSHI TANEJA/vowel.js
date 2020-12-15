var twist =`The quick brown fox jumps over the lazy dog`;
console.log('The twister is:',twist);
function vowel_count(str1)
{
 const count= str1.match(/[aeiou]/gi).length;
 return count;
}
const res=vowel_count(twist);
console.log("total vowels=",res);

