export default function(length) {
    let tokens = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i ++) {
        tokens += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return tokens;
};