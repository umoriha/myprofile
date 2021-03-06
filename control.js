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

const clickFunction = () => {
    const inputText = document.getElementById("input").value;
    const inputNumber = Number(inputText);
    const primeNumber = [];
    
    const nowLoading = document.getElementById("nowLoading");
    const resetNowLoading = nowLoading.style.display;
    const onNowLoading = () => {
        nowLoading.style.display = "block";
    };
    const offNowLoading = () => {
        nowLoading.style.display = resetNowLoading;
    };

    const setPrimeNumber = () => {
        for (let number = 2; number < inputNumber; number++) {
        let selecter = "true";
        for (let i = 0; i < primeNumber.length; i++) {
            let amari = number % primeNumber[i];
            if (amari === 0) {
                selecter = "false";
            }
        }
        if (selecter === "true") {
            primeNumber.push(number);
            }
        }
        document.getElementById("insertPrimeNumber").innerHTML = primeNumber;
    };
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(function() {
        setPrimeNumber();
        offNowLoading();    
        }, 10);
        resolve();
    });
    
    onNowLoading();
    promise1;
};

const load = () => {
    document.getElementById("nowLoading").style.display = "none";
};
/////////////////////////////////////
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
