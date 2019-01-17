import UserRepository = require('../repository/UserRepository');
import IUserBusiness = require('../business/interfaces/UserBusiness');

class UserBusiness implements IUserBusiness {
    private _UserRepository: UserRepository;

    constructor() {
        this._UserRepository = new UserRepository();
    }

    create() { }

    retrieve(callback: (error: any, result: any) => void) {
        this._UserRepository.retrieve(callback);
    }

    delete() { }
    update() { }
    findById() { }
}
Object.seal(UserBusiness);
export = UserBusiness;
