let entityMap = new Map();

export function addEntity(entity) {
    entityMap.set(entity.id,entity)
}

export function getEntities() {
    return Array.from(entityMap.values())
}

export function getCount(){
    return entityMap.size
}

export function getEntityById(id){
    return entityMap.get(id)
}

export function getFirstEntity(){
    return entityMap.values().next()
}

export function getLastEntity(){
    let values = Array.from(entityMap.values());
    return values[values.length]
}

export function filter(callback){
    let values = Array.from(entityMap.values());
    values.forEach(function (entity) {
        callback(entity)
    })
}
