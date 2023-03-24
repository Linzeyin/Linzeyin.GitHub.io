(function() {
    var coreSocialistValues = ["到底是在追赶着谁呢", "夜空中有星辰点缀！", "我喜欢星星", "我在干什么啊", "林泽音真的存在吗？", "如梦似幻的衰败", "希望能好好睡一觉"],
    index = Math.floor(Math.random() * coreSocialistValues.length);
    
    document.body.addEventListener('click',
    function(e) {
    //过滤a标签
        if (e.target.tagName == 'A') {
            return;
        }
        var x = e.pageX,
        y = e.pageY,
        span = document.createElement('span');
        span.textContent = coreSocialistValues[index];
        index = (index + 1) % coreSocialistValues.length;
        span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ', y - 20, 'px; left: ', x, 'px;'].join('');
        document.body.appendChild(span);
        animate(span);
    });