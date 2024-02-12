// Booleans

function parkTrip() {
  const user = {
    name: 'Diego Fernandes',
    height: 190,
    hasTicket: true,
  };

  const necessaryHeight = 130;

  const currentHour = new Date().getHours();

  const isParkOpen = currentHour >= 9 && currentHour < 18;

  if (!isParkOpen) {
    throw new Error('The park is closed!');
  }

  const doesUserHaveTicket = user.hasTicket;

  if (!doesUserHaveTicket) {
    throw new Error(`Diego doesn't have a ticket to enter the park!`);
  }

  const canUserEnterToy = user.height > necessaryHeight;

  if (!canUserEnterToy) {
    throw new Error(`Diego can't enter the toy!`);
  }

  console.log('Diego had a lot of fun! :)');
}

parkTrip();