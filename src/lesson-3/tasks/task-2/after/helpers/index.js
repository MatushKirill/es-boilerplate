import {
    getEntityById
} from '../dataManager/index';


export const validator = (obj) => {
    if (typeof obj.id === 'number'){
        const entity = getEntityById(obj.id);
        if (entity !== null){
            throw new Error('Such entity already exist')
        }
    }else {
        throw new Error('id must be a number')
    }

    if (typeof obj.firstName !== 'string'){
        throw new Error('First name must be a string')
    }

    if (typeof obj.lastName !== 'string'){
        throw new Error('Last name must be a string')
    }

    if (typeof obj.age !== 'number'){
        throw new Error('Age must be a number')
    }

    if (typeof obj.sex === 'string'){
        const sex = obj.sex;
        if (!(sex === 'male' || sex === 'female')){
            throw new Error('incorrect sex')
        }
    }else {
        throw new Error('Sex must be a String')
    }
};
