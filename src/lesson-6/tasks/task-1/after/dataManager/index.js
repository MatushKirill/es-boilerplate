'use strict';


import {validator} from '../helper/index'


export function DataManager() {
    const entities = [];

    return {
        getEntities() {
            return entities;
        },

        getEntityById(id) {
            let entity = entities.filter(({id: currentId}) => currentId === id);
            return entity.length ? entity[0] : null;
        },

        getFirstEntity() {
            return entities.length ? entities[0] : null;
        },

        getLastEntity() {
            return entities.length ? entities[data.length - 1] : null;
        },

        getCount() {
            return entities.length
        },

        add(entity) {
            validator(entity);
            entities.push(entity);
        },

        getEntityTotalViews(entityId, socialIds, callback) {
            const {social: socialList} = this.getEntityById(entityId);

            if (Array.isArray(socialIds)) {
                return socialList.filter(socialElement => socialIds.includes(socialElement.id) || socialIds.includes(socialElement.title))
                    .map((itm) => itm.views)
                    .reduce((firstEntityViews, secondEntityViews) => firstEntityViews + secondEntityViews)
            }

            if (typeof callback === 'function') {
                return callback(socialList
                    .map((socialElement) => socialElement.views)
                    .reduce((firstEntityViews, secondEntityViews) => firstEntityViews + secondEntityViews))
            }
            return socialList.map((socialElement) => socialElement.views).reduce((firstEntityViews, secondEntityViews) => firstEntityViews + secondEntityViews);
        },

        getEntitiesSortedByPopularity() {
            return entities.sort((firstEntity, secondEntity) => {
                const firstEntityViews = this.getEntityTotalViews(firstEntity.id);
                const secondEntityViews = this.getEntityTotalViews(secondEntity.id);

                return firstEntityViews < secondEntityViews ? 1 : firstEntityViews === secondEntityViews ? 0 : -1;
            })
        }
    };
}
