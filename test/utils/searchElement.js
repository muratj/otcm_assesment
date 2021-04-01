let xpath = (xpathToExecute) => {
    let result = [];
    let nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
        result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
}

let getOnlyNumbers = (elements) => {
    let result = [];
    elements.forEach(element => {
        if (/^[0-9.,N/A x]+$/.test(element.textContent)) {
            result.push(element.textContent);
        }
    })
    return result;
}

module.exports = {
    getOnlyNumbers,
    xpath
}