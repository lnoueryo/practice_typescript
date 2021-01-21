const totalTime: number = 100000;
const oldTime: number = Date.now();

setInterval(() => {
const now: Date = new Date;
const h: number = now.getHours();//dateオブジェクトから時間を取得
const m: number = now.getMinutes();//dateオブジェクトから分を取得
const s: number = now.getSeconds();//dateオブジェクトから秒を取得

const degH: number = h*(360/12)+m*(360/12/60);//分に合わせて微動させる
const degM: number = m*(360/60);
const degS: number = s*(360/60);

    const elementH: HTMLElement = document.querySelector('.lineHour');
    const elementM: HTMLElement = document.querySelector('.lineMin');
    const elementS: HTMLElement = document.querySelector('.lineSec');

    //JSでスタイルを操作する。値は動的で、setIntervalを使って角度を秒ごとに変える
    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
}, 50);

