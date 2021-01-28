function sentence() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when i finished', 'during my lunch', 'while i was praying'];

    const randomWho = Math.floor((Math.random() * (-1, 3)));
    const randomAction = Math.floor((Math.random() * (-1, 3)));
    const randomWhat = Math.floor((Math.random() * (-1, 2)));
    const randomWhen = Math.floor((Math.random() * (-1, 4)));

    document.getElementById('sentence').innerHTML = (`<p>${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}</p>`)
}

sentence()