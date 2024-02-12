// Booleans

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const parkOpen = currentHour >= 9 && currentHour < 18

if (!parkOpen) {
  throw new Error('The park is closed!')
}

const ticket = user.hasTicket

if (!ticket) {
  throw new Error(`Diego doesn't have a ticket to enter the park!`)
}

const enterToy = user.height > necessaryHeight

if (!enterToy) {
  throw new Error(`Diego can't enter the toy!`)
} 

console.log('Diego had a lot of fun! :)')