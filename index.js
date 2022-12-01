function doFirst(){
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
    
    canvas.shadowOffsetX = 4;
    canvas.shadowOffsetY = 4;
    canvas.shadowBlur = 6;
    canvas.shadowColor = 'rbga (0,0,255,.5)';

}
windows.addEventListener("load",doFirst,false);