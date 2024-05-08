/* 
 * button.js 
 * This is a class for creating a button component, which is a wrapper 
 * over the componentData object.
 */ 

/* 
 * Button
 */ 
class Button { 
    constructor (componentData) { 
        this.data = componentData
    }
}

/* 
 * createButton
 */
function createButton(componentData) { 
    if (!componentData) return NULL;

}

/* 
 * generateButtonCode 
 */ 
function generateButtonCode(buttonObject) { 

    return `<ButtonWrapper> 
                <Button 
                    variant={ ${} }  
                    color={ ${} }
                    href={ ${} }
                    > 
                ${buttonObject.data.text}
                </Button> 
            </ButtonWrapper>`;

}

module.exports = { 
    Button, 
    createButton, 
    generateButtonCode,
};