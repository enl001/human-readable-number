module.exports = function toReadable (number) {
    let result = '';
    let mult = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion '];
    
    if (number > Number.MAX_SAFE_INTEGER) return 'overflow';
    if (number == 0) return 'zero';
    if (number < 0) result = 'minus ';
    groups = number.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
        
    let i=1;
    for(let g of groups){
        result+=parseGroup(g) + mult[groups.length-i++];
    }
    return result.trimRight();
}

function parseGroup(group){
    let n = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let dec = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
    let result = "";
    
    if(!group[2]) group = "0"+group;
    if(!group[1]) group = "0"+group;
    if (Number(group) >= 100) result+= n[Number(group[0])] + 'hundred ';
    //if (Number(group) >= 100) result+= n[Number(group[0])] + 'hundred and';
    //if (Number(group) == 100) result = n[Number(group[0])] + 'hundred';
    
    if (Number(group.substring(1)) > 19) result+= (dec[Number(group[1])] + n[Number(group[2])]);
    else result+=n[Number(group.substring(1))];
    return result;
}


