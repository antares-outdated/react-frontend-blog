export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(post => {
        if(post[objPropName] === itemId) {
            return {...post, ...newObjProps}
        }
        return post
    })
}