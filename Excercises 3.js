var nama = '';  
var peran = ''; //peran : Tank, Support, Archer


if (nama !== '' && peran === 'Tank') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat melindungi temanmu di barisan depan"');
} else if (nama !== '' && peran === 'Support') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menyembuhkan temanmu yang terluka"');
} else if (nama !== '' && peran === 'Archer') {
	console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"' + '\n"Halo, ' + peran + " " + nama + ', kamu dapat menghabisi musuh dari jarak jauh"');
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
