class ConNguoi {
    constructor(hoTen, namSinh) {
        this.hoTen = hoTen || "unknown";
        this.namSinh = namSinh || "unknown";
    }
    getHoTen() {
        return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
    }
}
class SinhVien extends ConNguoi {
    constructor(maSSV, hoTen, namSinh) {
        super(hoTen, namSinh);
        this.maSSV = maSSV || "unknown";
    }
    getThongTin() {
        return this.getHoTen() + ", mã sinh viên " + this.maSSV;
    }
}
var sinhVien1 = new SinhVien("B1704863", "Ngô Minh Trung", "1999");
console.log(sinhVien1.getThongTin());
