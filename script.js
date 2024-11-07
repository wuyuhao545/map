// 模拟宝藏地图API  
class TreasureMap {  
    static getInitialClue() {  
        return new Promise((resolve) => {  
            setTimeout(() => {  
                resolve("在古老的图书馆里找到了第一个线索...");  
            }, 1000);  
        });  
    }  

    static decodeAncientScript(clue) {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                if (!clue) {  
                    reject("没有线索可以解码!");  
                }  
                resolve("解码成功!宝藏在一座古老的神庙中...");  
            }, 1500);  
        });  
    }  

    static encounterTrap() {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                const random = Math.random();  
                if (random < 0.5) {  
                    reject("小心!掉入了陷阱!");  
                }  
                resolve("成功避开了陷阱!");  
            }, 1500);  
        });  
    }  

    static searchTemple(location) {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                const random = Math.random();  
                if (random < 0.5) {  
                    reject("糟糕!遇到了神庙守卫!");  
                }  
                resolve("找到了一个神秘的箱子...");  
            }, 2000);  
        });  
    }  

    static openTreasureBox() {  
        return new Promise((resolve) => {  
            setTimeout(() => {  
                resolve("恭喜!你找到了传说中的宝藏!");  
            }, 1000);  
        });  
    }  
}  

async function findTreasureWithAsyncAwait() {  
    const output = document.getElementById('output');  
    const animation = document.getElementById('animation');  
    output.innerHTML = ""; // 清空输出区域  
    animation.classList.remove('hidden'); // 显示动画  

    try {  
        const clue = await TreasureMap.getInitialClue();  
        output.innerHTML += `<p>${clue}</p>`;  
        
        const script = await TreasureMap.decodeAncientScript(clue);  
        output.innerHTML += `<p>${script}</p>`;  
        
        const trapMessage = await TreasureMap.encounterTrap();  
        output.innerHTML += `<p>${trapMessage}</p>`;  
        
        const box = await TreasureMap.searchTemple(script);  
        output.innerHTML += `<p>${box}</p>`;  
        
        const treasure = await TreasureMap.openTreasureBox();  
        output.innerHTML += `<p>${treasure}</p>`;  
    } catch (error) {  
        output.innerHTML += `<p style="color: red;">任务失败: ${error}</p>`;  
    } finally {  
        animation.classList.add('hidden'); // 隐藏动画  
    }  
}  

// 绑定按钮点击事件  
document.getElementById('startButton').addEventListener('click', findTreasureWithAsyncAwait);