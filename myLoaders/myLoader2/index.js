module.exports = function(source ){
    //loader处理模块
    //多个loader实时有顺序的,将拿到的源码返回

    console.log( this.query, source);
    const result = source.replace('webpack', ', '+this.query.name)
    return result;
}