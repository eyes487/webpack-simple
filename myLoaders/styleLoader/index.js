module.exports = function(source){
    return `let ele = document.createElement('style');
        ele.innerHTML = ${JSON.stringify(source)};
        document.head.appendChild(ele)
    `;
}