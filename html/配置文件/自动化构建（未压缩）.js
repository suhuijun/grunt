var u_in = document.getElementById("u_in");
    var tel_in = document.getElementById("tel_in");
    var pw_in = document.getElementById("pw_in");
    var p_in = document.getElementById("p_in");
    var counts = 60;
    var reg_tel = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  
    function settime(val) {
        if(reg_tel.test(tel_in.value)){
            if(counts == 0) {
                val.removeAttribute("disabled");
                val.value = "获取验证码";
                counts = 60;
                return false;
            } else {
                val.setAttribute("disabled", true);
                val.value = "重新发送（" + counts + "）";
                counts--;
            }
            setTimeout(function() {
                settime(val);
            }, 1000);
        }
        else{
            alert("手机号不符合规范！！")
        }
        
    }

    function Up(){
        if(u_in.value == ""){
            alert("请输入用户名");
            return;
        }else if(pw_in.value == ""){
            alert("请输入密码");
            return;
        }else if(p_in.value == ""){
            alert("请输入验证码");
            return;
        }else{
            alert("上传成功");
            return;
        }
    }