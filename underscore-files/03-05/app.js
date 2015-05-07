var fireIntheHole = function() {
    console.log('Boommmm...');
};

var fire = _.throttle(fireIntheHole, 3000);