import IUserModel = require('../model/interfaces/UserModel');
import UserSchema = require('../dataAccess/schemas/UserSchema');
import RepositoryBase = require('./base');

class UserRepository extends RepositoryBase<IUserModel>{
    constructor(){
        super(UserSchema);
    }
}
Object.seal(UserRepository);
export = UserRepository;
