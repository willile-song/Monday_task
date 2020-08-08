let seal = document.querySelector('.seal')
let contract = document.querySelector('.contract')
let wrapper = document.querySelector('.wrapper')
let seal_box = document.querySelector('.seal_box')
let seal_box_width = seal_box.clientWidth;
let seal_box_height = seal_box.clientHeight



// 鼠标按下
let flag = true;
seal.onmousedown = function (e) {
    flag = true;
    // 鼠标坐标
    let mouse_x = e.clientX
    let mouse_y = e.clientY
    // 印章外接正方形坐标
    let box_x = seal_box.offsetLeft
    let box_y = seal_box.offsetTop
    let dx = mouse_x - box_x
    let dy = mouse_y - box_y

    wrapper.onmousemove = function (e) {
        if(flag){
            let new_mouse_x = e.clientX
            let new_mouse_y = e.clientY
            let move_box_x = new_mouse_x - dx   // 印章外接正方形的运动位置
            let move_box_y = new_mouse_y -dy
            if(seal_box.offsetLeft < 0) {
                move_box_x = 0;
            }else if(seal_box.offsetLeft > wrapper.clientWidth - seal_box.clientWidth) {
                move_box_x =wrapper.clientWidth - seal_box.clientWidth 
            }
            if(seal_box.offsetTop < 0) {
                move_box_y = 0;
            }else if(seal_box.offsetTop > wrapper.clientHeight - seal_box.clientHeight) {
                move_box_y =wrapper.clientHeight - seal_box.clientHeight
            }
            seal_box.style.left = move_box_x  + 'px'
            seal_box.style.top = move_box_y + 'px'
        }
        // 鼠标抬起
        document.onmouseup = function () {
            flag = false;
            let x = seal_box.offsetLeft
            if(x >= 100 && x < 150) {
                seal_box.style.left = 150 + 'px';
            }else if(x < 100 && x >= 50) {
                seal_box.style.left = 50 + 'px'; 
            }
        }
    }

}

seal.addEventListener('click', function(e) {
  console.log(22)
},true)
