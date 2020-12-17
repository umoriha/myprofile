/*旧版
let displayRightMenus = () => {
    document.getElementById("profile").innerHTML = "プロフィール";
    document.getElementById("makes").innerHTML = "作ったもの";
    document.getElementById("photo").innerHTML = "写真";
    document.getElementById("closeRightMenus").innerHTML = "閉じる";
};
*/


const displayRightMenus = () => {
    const rightMenusVisibility = document.getElementById("rightMenus");
    if(rightMenusVisibility.style.visibility === "visible") {
        rightMenusVisibility.style.visibility = "hidden";
    } else {
        rightMenusVisibility.style.visibility = "visible";
    }
};

/*
let closeRightMenus = () => {
    document.getElementById("profile").style.display = "none";
    document.getElementById("makes").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("closeRightMenus").style.display = "none";
};
*/

/*作りかけ
class userData{
    constructer(){
        this.name = name, this.age = age;
    }
}
*/