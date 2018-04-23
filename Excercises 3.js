var nama = 'Joko';  //nama : Budi, Joko, Ali
var peran = 'Tank'; //peran : Tank, Support, Archer

// Memilih nama Budi
if (nama === 'Budi' && peran === 'Tank') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat melindungi temanmu di barisan depan"');
} else if (nama === 'Budi' && peran === 'Support') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} else if (nama === 'Budi' && peran === 'Archer') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menghabisi musuh dari jarak jauh"');
} 

// Memilih nama Joko
else if (nama === 'Joko' && peran === 'Tank'){
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat melindungi temanmu di barisan depan"');
} else if (nama === 'Joko' && peran === 'Support') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} else if (nama === 'Joko' && peran === 'Archer') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} 

// Memilih nama Ali
else if (nama === 'Ali' && peran === 'Tank'){
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat melindungi temanmu di barisan depan"');
} else if (nama === 'Ali' && peran === 'Support') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} else if (nama === 'Ali' && peran === 'Archer') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} 

// Nama kosong
else if (nama === '') {
	console.log('"Nama harus diisi!"');
} 

//Peran kosong
else if (peran === '') {
	console.log('"Halo ' + nama + ', Pilih peranmu untuk memulai game!"');
} else {
	console.log('"invalid input"');
}
