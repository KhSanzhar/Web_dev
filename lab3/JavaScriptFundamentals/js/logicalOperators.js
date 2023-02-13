//alert(null || 2 || undefined);//2

//2
alert( alert(1) || 2 || alert(3) );
//first 1 then 2

//3
// alert( 1 && null && 2 );
//null


//4
// alert( alert(1) && alert(2) );
//first 1 then undef

//5
// if (age >= 14 && age <= 90)

//6
// if (!(age >= 14 && age <= 90))

//7
//
// if (-1 || 0) alert( 'first' );//runs
// if (-1 && 0) alert( 'second' );//not run
// if (null || -1 && 1) alert( 'third' );//run

//8
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}