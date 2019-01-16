import BaseBusiness = require('./base');
import IHeroModel = require('./../../model/interfaces/HeroModel');

interface HeroBusiness extends BaseBusiness<IHeroModel> {

}
export = HeroBusiness;