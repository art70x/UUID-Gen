function generateUUID() {
    const uuid = createUUID();
    const display = document.getElementById('uuid');
    display.textContent = uuid;
}

function createUUID() {
    // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    let uuid = '';
    const hex = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid += '-';
        } else if (i === 14) {
            uuid += '4';
        } else if (i === 19) {
            const random = Math.floor(Math.random() * 16);
            uuid += hex[(random & 0x3) | 0x8];
        } else {
            uuid += hex[Math.floor(Math.random() * 16)];
        }
    }
    return uuid;
    
    // in short
    // cryto.randomUUID()
}