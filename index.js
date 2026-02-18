// نمبر گیس گیم لاجک
function guess() {
    let lucky = Math.floor(Math.random() * 10) + 1;
    let user = document.getElementById('numInp').value;
    let r = document.getElementById('res1');
    if(user == lucky) {
        r.innerHTML = "🎉 واہ! آپ جیت گئے۔ نمبر " + lucky + " ہی تھا۔";
    } else {
        r.innerHTML = "❌ غلط! صحیح نمبر " + lucky + " تھا۔ دوبارہ کوشش کریں۔";
    }
}

// چیٹ بوٹ لاجک
function chat() {
    let m = document.getElementById('chatInp').value.toLowerCase();
    let r = document.getElementById('res2');
    if(m.includes("salam") || m.includes("سلام")) {
        r.innerHTML = "بوٹ: وعلیکم السلام! کیا حال ہے آپ کا؟";
    } else if(m.includes("naam") || m.includes("نام")) {
        r.innerHTML = "بوٹ: میرا نام گیم ماسٹر بوٹ ہے۔";
    } else {
        r.innerHTML = "بوٹ: بہت اچھا لگا آپ سے بات کر کے!";
    }
}
