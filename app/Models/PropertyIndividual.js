'use strict'

const Model = use('Model')

class PropertyIndividual extends Model {
  //TODO: beforeSave проверить:
  // 1) что замеренное свойство входит в выбранный шаблон спорта
  // 2) что спорт у шаблона и спортсмена совпадает (тренер может быть и из другого спорта)

  property() {
    return this.belongsTo('App/Models/Property')
  }

  sportsman() {
    return this.belongsTo('App/Models/Sportsman')
  }

  trainer() {
    return this.belongsTo('App/Models/Trainer')
  }

  template() {
    return this.belongsTo('App/Models/StatsTemplateIndividual')
  }
}

module.exports = PropertyIndividual
