import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const messages = [
  'Did you drink a glass of water today?',
  'How about watching an episode of that favorite series?',
  'Take here, 10 minutes for you to relax 😜',
  '"A Jedi uses force for knowledge and defense, never for attack." Rest a few minutes there'
]

const notify = () => {
  
  const randomIndex = Math.floor(Math.random() * messages.length)
  
  const notification = Notifyer.notify({
    title: 'Pomodoro time',
    body: messages[randomIndex]
  })
  notification()
}

const App = {
  async start() {
    try {
      await Notifyer.init()

      Emitter.on('countdown-start', notify)
      Emitter.on('countdown-end', Timer.init)

      Timer.init()

    } catch (err) {
      console.log(err.message);
    }
  }
}

export { App }