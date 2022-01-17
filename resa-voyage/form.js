const start = document.getElementById("start-date");
const end = document.getElementById("end-date");
const today = new Date ().toISOString().split('T')[0]; // toISOS transforme le retour, puis on splite les infos pour avoir un tableau et on veut le 1er élemnent du tab.

start.value = today;// démarre toujours à today
start.min = today;// ne peut pas aller endeça de today

// création de demain
const tomorrowDate = () => {
 let day = new Date(today); // évite de retaper le toISos et c...
 day.setDate(day.getDate() + 1 ); // +1 jour
 let tomorrow = day.toISOString().split('T')[0];
 end.value = tomorrow;
 end.min = tomorrow;
}

//qd la date de départ bouge, la date doit aussi bouger!

start.addEventListener('change', (e) => {
    let day = new Date(e.target.value); // c'est la value dans start
 day.setDate(day.getDate() + 1 ); // +1 jour
 let tomorrow = day.toISOString().split('T')[0];
 end.min = tomorrow;
 end.value = tomorrow;
});

const bookingTotal = () => {
    let date1 = new Date(start.value);
    let date2 = new Date(end.value);
    let diffTime = Math.abs(date2-date1);

    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 )); // transforme les seconde en jour
    let nightPrice = document.getElementById('nightPrice').innerHTML;

    let total = diffDays * nightPrice;
    document.getElementById('total').innerHTML = total;
};
start.addEventListener('change', () => bookingTotal());
end.addEventListener('change', () => bookingTotal());

bookingTotal();
