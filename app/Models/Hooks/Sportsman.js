'use strict'

const Trainer = use('App/Models/Trainer')

const SportsmanHook = module.exports = {}

SportsmanHook.checkTrainer = async (sportsman) => {
  if (sportsman.trainer_id) {
    const trainer = await Trainer.find(sportsman.trainer_id);
    if (!trainer) throw new Error(`Trainer with id ${sportsman.trainer_id} not exist`);
    if (trainer.sport_id !== sportsman.sport_id) throw new Error('Sportsmam sport not equal to Trainer sport');
  }
}
