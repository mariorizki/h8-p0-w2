var nama = 'Budi';
var peran = 'Archer'; //peran : Tank, Support, Archer

if (nama === 'Budi' && peran === 'Tank') {
	console.log(
		'"Selamat datang di Dunia Proxytia, Budi"\n"Halo, Tank Budi, kamu depat melindungi temanmu di bagian depan"');
} else if (nama === 'Budi' && peran === 'Support') {
	console.log(
		'"Selamat datang di Dunia Proxytia, Budi"\n"Halo, Support Budi, kamu depat menyembuhkan temanmu yang terluka"');
} else if (nama === 'Budi' && peran === 'Archer') {
	console.log(
		'"Selamat datang di Dunia Proxytia, Budi"\n"Halo, Archer Budi, kamu dapat menghabisi musuh dari jarak jauh"');
} else if (nama === '') {
	console.log('"Nama harus diisi!"');
} else if (nama === 'Budi') {
	console.log('"Halo Budi, Pilih peranmu untuk memulai game!"');
} else {
	console.log('"invalid input"');
}
