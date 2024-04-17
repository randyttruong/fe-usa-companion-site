/* 
 * component.js 
 * This is a file that contains all of the required data structs and 
 * for creating a component. 
 */ 

class componentData {  
    constructor = (type, id, data) => {  
        this.type = type;
        this.id = id; 
        this.data = data; 
    }
}; 

/* 
 * createComponent()
 * Given a JSON, create a component if possible 
 */ 
function createComponent(data) { 
    const { type, id, data } = data; 
    return new componentData(type, id, data);  // return a component object 
}
