var map = map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 11, //初始化地图层级
    center: [116.397428, 39.90923], //初始化地图中心点
    lang: "en" //可选值：en，zh_en, zh_cn
});

var radios = document.querySelectorAll("#lang input");
radios.forEach(function (ratio) {
    ratio.onclick = setLang;
});

function setLang() {
    map.setLang(this.id);
}

var arr = [
    [116.397428, 35.90923],
    [117.397428, 36.90923],
    [118.397428, 37.90923],
    [119.397428, 38.90923],
    [120.397428, 39.90923]
];

var markerbox = [];

for (var i = 0; i < arr.length; i++) {
    var marker = new AMap.Marker({
        position: arr[i],
        map: map
    });
    marker.setLabel({
        offset: new AMap.Pixel(14, 13),  //设置文本标注偏移量
        content: "<div class='info'>共享车位&nbsp;" + (i + 1) + "</div>", //设置文本标注内容
        direction: 'left' //设置文本标注方位

    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
    markerbox.push(marker);
}

//实例化信息窗体
var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
    content = [];
content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
content.push("电话：010-64733333");
content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
var infoWindow = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: createInfoWindow(title, content.join("<br/>")),
    offset: new AMap.Pixel(16, -45)
});

//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}