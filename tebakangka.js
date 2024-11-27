var tanya = true;
while(tanya){
    var r = Math.floor((Math.random() * 10)+1);
    var nyawa = 3;
    while (nyawa > 0){
        var p = prompt('Tebak Angka dari 1 - 10');
        console.log(r);

        if (p==r){
            hasil="Menang";
            alert("SELAMAT ANDA BERHASIL MENEBAKNYA!!" + "\n Jawabannya Adalah "+ r);
            break;
        }else if(p<r){
            hasil = 'Rendah'
            nyawa -= 1;
            alert('\n Sisa Nyawa Anda ' + nyawa + '\n Tebakan anda : ' + hasil);
        }else if(p>r){
            hasil = 'Tinggi'
            nyawa -=1 ;
            alert('\n Sisa Nyawa Anda ' + nyawa + '\n Tebakan anda : ' + hasil);
        }else{
            alert("Angka tidak termasuk ke dalam perintah");
        }
    }
    alert("jawabannya adalah " + r);
    tanya = confirm('Lagi?')
}

alert('terimakasih Sudah bermain')