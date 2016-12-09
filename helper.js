var getOs = (str)=>{
    let start = str.indexOf('(');
    let end = str.indexOf(')');
    return str.substring(start +1,end); 
};

var getLang = (str)=>{
    let end = str.indexOf(',');
    return str.substring(0,end);
};

module.exports = {getOs,getLang};

