
let tickets_sold = 1000;
let venue_capacity = 2000;
let performer = 'John';
let is_sold_out = false;
let is_repeat_show = true;

if(is_sold_out === true){
    console.log('YAHHH!, all tickets are sold out!!')
} else{
    console.log('We are almost there.')
   
}


if(tickets_sold/venue_capacity >= 0.9){
    console.log('Almost sold out')
}else if(tickets_sold/venue_capacity >= 0.5){
    console.log('Tickets selling fast' )
}else{
    console.log('Tickets on sale now')
}


if(tickets_sold > venue_capacity){
    console.log('System Error')
}else if(tickets_sold === venue_capacity & is_sold_out === false){
    console.log('System error')

}else if(performer === 'Alex' & is_sold_out === false ){
    console.log('System error')
}else{
    console.log('All Good')
}


if(tickets_sold > 0.9 || venue_capacity >= 60000 & tickets_sold > 0.7 || venue_capacity >= 90000 & tickets_sold ){
       console.log('Special case1')
}else if(is_sold_out === true & is_repeat_show === true){
    console.log('Special case')
}else{
    console.log('Normal case')
}


let sepcial_performer_1 = 'Maureen';
let sepcial_performer_2 = 'Alex';
let sepcial_performer_3 = 'Elvis';
let sepcial_performer_4 = 'Shrek';
let sepcial_performer_5 = 'Dolphine';

if(sepcial_performer_1 === 'Alex'){
    console.log('Lucky You1')
}else if(sepcial_performer_2 === 'Alex'){
    console.log('Lucky You2')
}else if(sepcial_performer_3 === 'Dolphine'){
    console.log('Lucky You3')
}else if(sepcial_performer_4 === 'Shrek'){
    console.log('Lucky You4')
}else if(sepcial_performer_5 === 'Dolphine'){
    console.log('Lucky You5')
}else{
    console.log('Look one more time')
}



