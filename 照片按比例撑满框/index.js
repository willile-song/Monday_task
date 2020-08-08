let elData = (div, img) => {  // 获取元素尺寸
    return {
        divW: div.width(),
        divH: div.height(),
        imgW: img.width(),
        imgH: img.height()
    }
}
obj1 = elData( $('.box1'), $('.pict_1')) // 获取元素尺寸
obj2 = elData( $('.box2'), $('.pict_2'))
obj3 = elData( $('.box3'), $('.pict_3'))

let calc = ({ // 计算照片应该改到的尺寸,并返回一个尺寸对象
    divW,
    divH,
    imgW,
    imgH
}) => {
    let changedWidth, changedHeight; // 照片变换后的大小 
    let div_ratio = divW / divH
    let img_ratio = imgW / imgH
    let scale;
    if (div_ratio > img_ratio) {
        changedHeight = divH
        changedWidth = divH / imgH * imgW
    } else if (div_ratio < img_ratio) {
        scale = imgW / divW
        changedWidth = divW
        changedHeight = divW * imgH / imgW
    }else {
        changedWidth = divW
        changedHeight = divH
    }
    return {
        changedWidth,
        changedHeight
    }
}
let change_1 = calc(obj1) 
let change_2 = calc(obj2)
let change_3 = calc(obj3)
console.log(change_3)

let opertion = (el, change, obj) => {  // 参数：操作的图片，改变值对象，原始的图片尺寸对象
    $('.btn').click(function () {
        el.animate({
            height: change.changedHeight,
            width: change.changedWidth
        })
    })
    $('.recover').click(function () {
        el.animate({
            height: obj.imgH,
            width: obj.imgW
        })
    })
}

opertion( $('.pict_1'), change_1, obj1)
opertion( $('.pict_2'), change_2, obj2)
opertion( $('.pict_3'), change_3, obj3)
