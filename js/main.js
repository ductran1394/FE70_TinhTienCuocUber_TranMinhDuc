document.querySelector('#btnTinhTien').onclick = function () {
  var soKM = document.querySelector('#soKM').value;
  var thoiGianCho = document.querySelector('#thoiGianCho').value;
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;

  // console.log(soKM)
  // console.log(thoiGianCho)
  // console.log(loaiXe);

  var tienXe = '';
  var tienCho = '';
  var thanhTien = '';


  if (loaiXe == 'UberX') {
    if (soKM >= 0 && soKM <= 1) {
      tienXe = 8000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 8000 + (soKM - 1) * 12000;
    }
    if (soKM > 20) {
      tienXe = 8000 + 19 * 12000 + (soKM - 20) * 10000;
    }
    tienCho = 2000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  else if (loaiXe == 'UberSUV') {
    if (soKM > 0 && soKM <= 1) {
      tienXe = 9000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 9000 + (soKM - 1) * 14000;
    }
    if (soKM > 20) {
      tienXe = 9000 + 19 * 14000 + (soKM - 20) * 12000;
    }
    tienCho = 3000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  else if (loaiXe == 'UberBlack') {
    if (soKM > 0 && soKM <= 1) {
      tienXe = 10000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 10000 + (soKM - 1) * 16000;
    }
    if (soKM > 20) {
      tienXe = 10000 + 19 * 16000 + (soKM - 20) * 14000;
    }
    tienCho = 4000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  document.querySelector('#divThanhTien').style.display = 'block';
  document.querySelector('#xuatTien').innerHTML = thanhTien.toFixed(2);

}

document.querySelector('#btnInHoaDon').onclick = function () {
  var soKM = document.querySelector('#soKM').value;
  var thoiGianCho = document.querySelector('#thoiGianCho').value;
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;

  // console.log(soKM)
  // console.log(thoiGianCho)
  // console.log(loaiXe);

  var tienXe = '';
  var tienCho = '';
  var thanhTien = '';


  if (loaiXe == 'UberX') {
    if (soKM >= 0 && soKM <= 1) {
      tienXe = 8000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 8000 + (soKM - 1) * 12000;
    }
    if (soKM > 20) {
      tienXe = 8000 + 19 * 12000 + (soKM - 20) * 10000;
    }
    tienCho = 2000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  else if (loaiXe == 'UberSUV') {
    if (soKM > 0 && soKM <= 1) {
      tienXe = 9000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 9000 + (soKM - 1) * 14000;
    }
    if (soKM > 20) {
      tienXe = 9000 + 19 * 14000 + (soKM - 20) * 12000;
    }
    tienCho = 3000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  else if (loaiXe == 'UberBlack') {
    if (soKM > 0 && soKM <= 1) {
      tienXe = 10000;
    }
    if (soKM > 1 && soKM <= 20) {
      tienXe = 10000 + (soKM - 1) * 16000;
    }
    if (soKM > 20) {
      tienXe = 10000 + 19 * 16000 + (soKM - 20) * 14000;
    }
    tienCho = 4000 * thoiGianCho;
    thanhTien = tienXe + tienCho;
  }

  // console.log(loaiXe);

  document.querySelector('#txtLoaiXe').innerHTML = loaiXe;

  document.querySelector('#quangDuong').innerHTML = soKM;
  document.querySelector('#thoiGian').innerHTML = thoiGianCho;

  document.querySelector('#quangDuong__cost').innerHTML = tienXe.toFixed(2);
  document.querySelector('#thoiGian__cost').innerHTML = tienCho.toFixed(2);

  document.querySelector('#total__cost').innerHTML = thanhTien.toFixed(2);

}