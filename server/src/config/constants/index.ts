import { dbURL } from '../environment/index.env';

class Constants {
    static DB_CONNECTION_STRING: string = dbURL;
}

Object.seal(Constants);
export = Constants;