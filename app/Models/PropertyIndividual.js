'use strict'

const Model = use('Model')

class PropertyIndividual extends Model {
  //TODO: beforeSave проверить:
  // 1) что замеренное свойство входит в выбранный шаблон спорта
  // 2) что спорт у шаблона и спортсмена совпадает (тренер может быть и из другого спорта)

  // TODO: потом убрать, нужно для заполнения из seed
  static get createdAtColumn() { return null }

  static get hidden() {
    return ['property_id', 'sportsman_id', 'template_id', 'trainer_id']
  }

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
