var imgs = document.getElementById("imgs");
var lis = document.getElementsByTagName("li");
var t1 = null; //定义一个定时器变量
var init = 0; // 定义一个变量表示第几张图片
var left = document.getElementById("left");
var right = document.getElementById("right");
//第一种定时方法：
var t1 = setInterval(function(){    //设置定时器
    init++;
    init %= 6;  //用于循环到第六张时，使init恢复为0，重新进行循环
    imgs.style.left = init * -300 + 'px'; //控制imgs左移几张图片的距离
    for(var i = 0; i < lis.length; i++)
    {
        lis[i].className = "";  //不给任何li加on类名，用于清除on的样式
    }
    lis[init].className = "on"; //
}, 1000)

//第二种定时方法：
// var t1 = setTimeout(function(){
//     init++;
//     init %= 6;
//     imgs.style.left = init * -300 + 'px';
//     for(var i = 0; i < 6; i++)
//     {
//         lis[i].className = "";
//     }
//     lis[init].className = "on";
//     if(init < 6)
//     {
//         setTimeout(arguments.callee,1000);
//     } 
// }, 1000);

function start()
{
    t1 = setInterval(function(){
        init++;
        init %= 6;
        imgs.style.left = init * -300 + 'px';
        for(var j = 0; j < 6; j++)
        {
            lis[j].className = "";
        }
        lis[init].className = "on";        
    }, 1000);
}


imgs.onmousemove = function()
{
    clearInterval(t1);
}
imgs.onmouseout = function()
{
    start();
}

for(var k = 0; k < lis.length; k++)
{
    lis[k].index = k;
    lis[k].onmouseover = function()
    {
        for(var m = 0; m < lis.length; m++)
        {
            lis[m].className = "";
        }
        this.className = "on";
        clearInterval(t1);
        init = this.index;
        imgs.style.left = init * -300 + 'px';
    }
}

right.onclick = function()
{
    clearInterval(t1);
    init++;
    init %= 6;
    imgs.style.left = init * -300 + 'px';
    for(var n = 0; n < 6; n++)
    {
        lis[n].className = "";
    }
    lis[init].className = "on";
}

left.onclick = function()
{
    clearInterval(t1);
    init--;
    if(init < 0)
    {
        init = 5;
    }
    imgs.style.left = init * -300 + 'px';
    for(var x = 0; x < 6; x++)
    {
        lis[x].className = "";
    }
    lis[init].className = "on";
}





