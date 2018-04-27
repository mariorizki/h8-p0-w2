console.log('Soal 1\n')

for(x = 0; x < 5; x++){
  console.log('*')
}

console.log('\nSoal 2\n')

var x = 0;
var y = 0;
var star = '';

for(x = 5; x > 0; x--)
{
  for(y = 5; y > 0; y--)
  {
    star = star + '*';
  } console.log(star);
  star = '';
}

console.log('\nSoal 3\n')

var x3 = 0;
var y3 = 0;
var star3 = '';

for(x3 = 1; x3 <= 5; x3++)
{
  for(y3 = 0; y3 < x3; y3++)
  {
    star3 = star3 + '*';
  } console.log(star3);
  star3 = '';
}