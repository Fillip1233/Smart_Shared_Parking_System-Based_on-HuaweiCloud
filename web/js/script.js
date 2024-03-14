document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.content').classList.toggle('s--signup')
})

// function box_blink(){
//     document.getElementById("Rusername").
// }

function Registration_check() {
    var usernameValue = document.getElementById('R_username').value;
    var passwordValue = document.getElementById('R_password').value;
    var emailValue = document.getElementById('R_email').value;

    // 检查密码格式是否正确,正确时Pjudgment的值为null
    var Pjudgment = passwordValue.match(/[^0-9a-zA-Z_&]/);
    // 检查邮箱格式，当返回null时，格式不正确
    var Ejudgment = emailValue.match(/^\w+@\w+\.\w+$/i);
    if (usernameValue.length < 2 || usernameValue.length > 20) {
        alert("用户名长度范围为[2,20]");
    } else if (passwordValue.length < 8 || passwordValue.length > 20) {
        alert("密码长度范围为[8,20]");
    } else if (Pjudgment != null) {
        alert("密码中不能包含除数字、大小写字母、_和&以外的字符");
    } else if (Ejudgment == null) {
        alert("邮箱格式不正确");
    } else {
        alert("注册成功");
        document.querySelector('.content').classList.toggle('s--signup')
        setTimeout(() => {
            document.getElementById('R_username').value = "";
            document.getElementById('R_password').value = "";
            document.getElementById('R_email').value = "";
        }, 500);
    }
}