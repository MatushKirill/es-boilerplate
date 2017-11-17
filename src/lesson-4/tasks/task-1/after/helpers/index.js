import {
    getEntityById
} from '../dataManager/index';


export const validator = ({id, firstName, lastName, age, sex,}) => {
    if (typeof id === 'number') {
        const entity = getEntityById(id);
        if (entity !== null) {
            throw new Error('Such entity already exist')
        }
    } else {
        throw new Error('id must be a number')
    }

    if (typeof firstName !== 'string') {
        throw new Error('First name must be a string')
    }

    if (typeof lastName !== 'string') {
        throw new Error('Last name must be a string')
    }

    if (typeof age !== 'number') {
        throw new Error('Age must be a number')
    }

    if (typeof sex === 'string') {
        if (!(sex === 'male' || sex === 'female')) {
            throw new Error('incorrect sex')
        }
    } else {
        throw new Error('Sex must be a String')
    }
};
