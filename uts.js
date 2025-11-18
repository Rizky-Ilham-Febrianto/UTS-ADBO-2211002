class karyawan {
    constructor(nama, cuti) {
        this.nama = nama;
        this.cuti = cuti;
    }

    hitungcuti1() {
        return "";
    }

    info() {
        console.log(`Nama Karyawan: ${this.nama}.`);
        console.log(`Pengajuan Cuti : ${this.cuti}.`);
        console.log(`Keterangan : ${this.hitungcuti1()}.`);
        console.log("\n");
    }
}

class cutitahunan extends karyawan {
    hitungcuti1() {
        if(this.cuti <= 12) {
            return "Kuota anda cukup untuk mengajukan cuti ini!";
        } else {
            return "Kuota anda tidak cukup untuk mengajukan cuti ini!";
        };
    }
}

class cutisakit extends karyawan {
    hitungcuti1() {
        if(this.cuti <= 2) {
            return "Kuota anda cukup untuk mengajukan cuti ini!";
        } else {
            return "Kuota anda tidak cukup untuk mengajukan cuti ini!";
        };
    }
}

class cutimelahirkan extends karyawan {
    hitungcuti1() {
        if(this.cuti <= 90) {
            return "Kuota anda cukup untuk mengajukan cuti ini!";
        } else {
            return "Kuota anda tidak cukup untuk mengajukan cuti ini!";
        };
    }
}

let k1 = new cutitahunan("Rizky", 13);
let k2 = new cutisakit("Budi", 2);
let k3 = new cutimelahirkan("Andi", 91);

k1.info();
k2.info();
k3.info();