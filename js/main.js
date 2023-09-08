// alert('message');
// let password = prompt('введите пароль');
// password = Number(password);
// console.log(password);

// // confirm('Вы уверены?')

// let sure = confirm('Вы уверены?')
// console.log(sure);
// alert('text' + password + 'text2')

let count = prompt('Введите стоимость товара');
let money = prompt('Введите кол-во денег клиента');

if(count == money){
    alert('Покупка совершена')
}else{
    if(count > money){
    let a = count - money;
    alert('Для покупки не хватает ' + a + ' р.')
    }else{
    let b = money - count;
    alert('Покупка совершена. Сдача ' + b + ' р.' )
    }
}
