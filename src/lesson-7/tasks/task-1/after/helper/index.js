'use strict';

import {
    DataManager
} from '../dataManager/index';


export const validator = ({id, firstName, lastName, age, sex, social}) => {
    const dataManager = new DataManager();

    if (typeof firstName !== 'string')
        throw new Error('First name must be a string');


    if (typeof lastName !== 'string')
        throw new Error('Last name must be a string');


    if (typeof age !== 'number')
        throw new Error('Age must be a number');


    if (typeof sex === 'string') {
        if (!(sex === 'male' || sex === 'female')) {
            throw new Error('incorrect sex')
        }
    } else {
        throw new Error('Sex must be a String')
    }

    if (social !== undefined) {
        social.forEach(({id, title, views}) => {
            if (typeof id !== 'number')
                throw new Error('id must be a number');

            if (title !== 'facebook' && title !== 'youtube' && title !== 'twitter')
                throw new Error(`social name is invalid [${title}]`);

            if (typeof views !== 'number')
                throw new Error('views must be a number');
        })
    }
};
