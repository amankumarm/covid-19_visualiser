export const make_it_indian=(raw_int)=>{
    var str_int=String(raw_int)
    var str_len=str_int.length
    if (str_int.length<=3) {
        return str_int
    } else if (str_int.length>3) {
        var new_str=[];
    str_int=str_int.split("")
    str_int.splice(str_len-3,0,",")
    str_int=str_int.join("")
    str_int=str_int.split(",")
    var second_part=str_int[1]
    var two_comma=str_int[0].split("").reverse()
    var position=2
    var count=0;
    var two_comma_arr=[]
    for (let i = 0; i < two_comma.length; i++) {
        if (position===0) {
            two_comma_arr[count]=","
            count++;
            two_comma_arr[count]=two_comma[i]
            position=1        
        }
        else{
            two_comma_arr[count]=two_comma[i]
            position--;    
        }
        count++
    }
        var final=two_comma_arr.reverse().join("")+","+second_part
        return final
    }

}
