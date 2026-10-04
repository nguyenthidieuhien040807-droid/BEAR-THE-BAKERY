
document.addEventListener("DOMContentLoaded", function () {
    const oTimKiem = document.getElementById("nhap1");
    const nutTimKiem = document.getElementById("nhap2");
    if (oTimKiem && nutTimKiem) {
        function timKiemSanPham() {
            const tuKhoa = oTimKiem.value.trim().toLowerCase();
            if (tuKhoa === "") {
                alert("Vui lòng nhập tên sản phẩm cần tìm.");
                return;
            }
            if (window.location.pathname.includes("sanpham.html")) {
                const sanPhams = document.querySelectorAll(".sanpham-card");
                let timThay = false;
             sanPhams.forEach(function (sanPham) {
                    const tenSanPham =
                        sanPham.querySelector("h3").textContent.toLowerCase();
                    if (tenSanPham.includes(tuKhoa)) {
                        sanPham.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                        sanPham.style.outline = "3px solid #b66d3d";
                        setTimeout(function () {
                            sanPham.style.outline = "none";
                        }, 2000);
                        timThay = true;
                    }
                });
                if (!timThay) {
                    alert("Không tìm thấy sản phẩm: " + oTimKiem.value);
                }
            } else {
            window.location.href = "./WEBCON/sanpham.html";
            }
        }
        nutTimKiem.addEventListener("click", timKiemSanPham);
        oTimKiem.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                timKiemSanPham();
            }

        });
    }
    const nutDatMua = document.querySelectorAll(".sanpham-card button");
    nutDatMua.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".sanpham-card");
            const tenBanh = card.querySelector("h3").textContent;
            alert(
                "Bạn đã chọn " +
                tenBanh +
                ".\nCảm ơn bạn đã mua bánh tại Bear The Bakery! ♡"
            );

        });

    });
    const formLienHe = document.getElementById("contactForm");
    if (formLienHe) {
        formLienHe.addEventListener("submit", function (event) {
            event.preventDefault();
            const hoTen = document.getElementById("hoten").value.trim();
            const email = document.getElementById("email").value.trim();
            const soDienThoai = document.getElementById("sdt").value.trim();
            const noiDung = document.getElementById("noidung").value.trim();
            const thongBao = document.getElementById("formMessage");
            if (
                hoTen === "" ||
                email === "" ||
                soDienThoai === "" ||
                noiDung === ""
            ) {

                thongBao.textContent =
                    "Vui lòng nhập đầy đủ thông tin.";

                thongBao.style.color = "red";
                return;
            }
            thongBao.textContent =
                "Gửi liên hệ thành công! Bear The Bakery sẽ phản hồi bạn sớm. ♡";
            thongBao.style.color = "green";
            formLienHe.reset();
        });

    }
    const nutVeDau = document.createElement("button");
    nutVeDau.innerHTML = "↑";
    nutVeDau.id = "nutVeDau";
    nutVeDau.style.position = "fixed";
    nutVeDau.style.bottom = "20px";
    nutVeDau.style.right = "20px";
    nutVeDau.style.width = "42px";
    nutVeDau.style.height = "42px";
    nutVeDau.style.border = "none";
    nutVeDau.style.borderRadius = "50%";
    nutVeDau.style.background = "#8b5e3c";
    nutVeDau.style.color = "white";
    nutVeDau.style.fontSize = "20px";
    nutVeDau.style.cursor = "pointer";
    nutVeDau.style.display = "none";
    nutVeDau.style.zIndex = "999";
    document.body.appendChild(nutVeDau);
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            nutVeDau.style.display = "block";
        } else {
            nutVeDau.style.display = "none";
        }
    });
    nutVeDau.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});