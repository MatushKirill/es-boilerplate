import {validator} from '../helpers/index'

const data = [];

export const getEntities = () => data;

export const getEntityById = (id) => {
    const entity = data.filter(({id: currentId}) => currentId === id);
    return entity.length ? entity : null
};

export const getFirstEntity = () => data.length ? data[0] : null;

export const getLastEntity = () => data.length ? data[data.length - 1] : null;

export const getCount = () => data.length;

export const addEntity = (entity) => {
    validator(entity);
    data.push(entity);
};

export const filter = (callback) => {
    if (typeof callback === 'function'){
        return data.filter(callback);
    }else {
        throw new Error('Parameter must be a function ')
    }
};


