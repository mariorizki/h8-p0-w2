// 1. Melakukan Looping Menggunakan While

var coding = 0;
console.log('Soal no 1\n\nLOOPING PERTAMA');

while(coding < 20) {
  coding = coding + 2;
  console.log(coding + ' - I love coding');
}

var fullstack = 20;
console.log('LOOPING KEDUA')

while(fullstack > 2) {
  fullstack = fullstack - 2;
  console.log(fullstack + ' - I will become fullstack developer')
}

// 2. Melakukan Looping Menggunakan For

console.log('\nSoal no 2\n\nLOOPING PERTAMA');
for(var coding = 1; coding <= 20; coding++) {
  console.log(coding + ' I love Coding');
}
console.log('LOOPING KEDUA');
for(var fullstack = 20; fullstack >= 1; fullstack--) {
  console.log(fullstack + ' I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

console.log('\nSoal no 3\n\nGANJIL-GENAP\n');

for(var count = 1; count <=100; count++){
  if(count % 2) console.log('counter sekarang = ' + count + ', GANJIL');
  else  console.log('counter sekarang = ' + count + ', GENAP');
}

console.log('\nKelipatan 3')

for(var count = 1; count <=100; count += 2){
  if(count % 3) console.log('counter sekarang = ' + count);
  else  console.log('counter sekarang = ' + count + ', ' + count + ' Kelipatan 3');
}

console.log('\nKelipatan 6')

for(var count = 1; count <=100; count += 5){
  if(count % 6) console.log('counter sekarang = ' + count);
  else  console.log('counter sekarang = ' + count + ', ' + count + ' Kelipatan 6');
}

console.log('\nKelipatan 10')

for(var count = 1; count <=100; count += 9){
  if(count % 10) console.log('counter sekarang = ' + count);
  else  console.log('counter sekarang = ' + count + ', ' + count + ' Kelipatan 10');
}


