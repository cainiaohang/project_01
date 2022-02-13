window.addEventListener('load',function(){
    // 1获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    // 2鼠标经过显示按钮
focus.addEventListener('mouseenter',function(){
    arrow_l.style.display =  'block';
    arrow_r.style.display =  'block';
})
focus.addEventListener('mouseenter',function(){
    arrow_l.style.display =  'none';
    arrow_r.style.display =  'none';
})})
var ul = focus.querySelector('ul');
var ol = focus.querySelector('.circle');
// console.log(ul.children.length);
for (var i = 0;i < ul.children.length;i++){
    var li = document.createElement('li');  
    ol.appendchild(li);

}