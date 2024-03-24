const deviceUA = window.navigator.userAgent.toLowerCase();
const is_iPhone = deviceUA.indexOf('iphone') != -1 && deviceUA.indexOf('ipod') == -1; // iPhone (ここでは iPod touch を除外)
const is_iPad = deviceUA.indexOf('ipad') != -1 || deviceUA.indexOf('macintosh') > -1 && 'ontouchend' in document; // iPad (旧 iOS, 新 iPad OS とも
const is_Android = deviceUA.indexOf('android') != -1; // Android
if (is_iPhone || is_iPad) { // iPhone, iPad
    fbPageUrl = "fb://profile?id=100000986298724";
}
else if (is_Android) { // Android
    fbPageUrl = "fb://profile/100000986298724";
}
else { // PC, iPod touch
    fbPageUrl = "https://www.facebook.com/hidenori.takehara.7/";
}
function fbPageLink() {
    if (is_iPhone || is_iPad || is_Android) { // iPhone, iPad, Android なら
        location.href = fbPageUrl; // アプリで起動する
    } else { // PC, iPod touch なら
        open(fbPageUrl, "_blank"); // ブラウザ別タブで開く
    }
};
