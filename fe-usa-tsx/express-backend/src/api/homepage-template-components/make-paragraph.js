/* 
 * make-paragraph.js 
 */ 

/* 
 * Paragraph 
 * Wrapper object that contains the data for a paragraph.
 * Wraps around the componentData object.
 */ 
class Paragraph { 
    constructor = (data) => { 
        this.data = data; 
    }
}

/* 
 * generatePar 
 * Wraps a paragraph object around the data object.
 */
function generatePar(parObject) { 
    if (!parObject) { 
        return null; 
    } 

    return new Paragraph(parObject);
}

/* 
 * generateParCode
 * Turns a Paragraph object into JSX code.
 */ 
function generateParCode(parObject) { 
    if (!parObject) { 
        return null; 
    } 
    {type, id, data} = parObject; 


    return `<Typography 
                variant={${}} 
                sx={{ pb: 5 }}
                className={ ${id} } > 
                ${parObject.data} 
            </Typography>`;

}

module.exports = { 
    Paragraph, 
    generatePar, 
    generateParCode,
};