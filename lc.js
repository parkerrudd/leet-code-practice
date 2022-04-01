var isValid = function(s) {
    if (s === '') return false; 
    if (s.length < 2) return false; 
    const brackets = {
        '(':')', 
        '{':'}', 
        '[':']'
    }
    let stack = []; 
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(s[i])
        } else if (brackets[stack.pop()] != s[i]) {
            return false; 
        }
    }
    if (stack.length > 0) {
        return false; 
    }
    return true; 
};

console.log(isValid("()[]{}"))