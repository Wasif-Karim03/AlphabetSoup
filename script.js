// Transformation functions
const transformations = {
    'swap-last-two-beginning': (word) => {
        if (word.length < 2) return word;
        const lastTwo = word.slice(-2);
        const rest = word.slice(0, -2);
        return lastTwo + rest;
    },
    
    'swap-first-two-end': (word) => {
        if (word.length < 2) return word;
        const firstTwo = word.slice(0, 2);
        const rest = word.slice(2);
        return rest + firstTwo;
    },
    
    'reverse-word': (word) => {
        return word.split('').reverse().join('');
    },
    
    'first-to-end': (word) => {
        if (word.length < 2) return word;
        return word.slice(1) + word[0];
    },
    
    'last-to-beginning': (word) => {
        if (word.length < 2) return word;
        return word[word.length - 1] + word.slice(0, -1);
    },
    
    'swap-first-last': (word) => {
        if (word.length < 2) return word;
        return word[word.length - 1] + word.slice(1, -1) + word[0];
    },
    
    'swap-middle': (word) => {
        if (word.length < 4) return word;
        const mid = Math.floor(word.length / 2);
        if (word.length % 2 === 0) {
            // Even length: swap middle two
            return word.slice(0, mid - 1) + word[mid] + word[mid - 1] + word.slice(mid + 1);
        } else {
            // Odd length: swap around middle
            return word.slice(0, mid - 1) + word[mid + 1] + word[mid] + word[mid - 1] + word.slice(mid + 2);
        }
    },
    
    'reverse-first-half': (word) => {
        if (word.length < 2) return word;
        const half = Math.floor(word.length / 2);
        const firstHalf = word.slice(0, half).split('').reverse().join('');
        const secondHalf = word.slice(half);
        return firstHalf + secondHalf;
    }
};

// Function to check if a character is a letter
function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

// Function to extract words from text (preserving punctuation and spaces)
function extractWords(text) {
    const words = [];
    let currentWord = '';
    let currentNonWord = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (isLetter(char)) {
            if (currentNonWord) {
                words.push({ type: 'nonword', content: currentNonWord });
                currentNonWord = '';
            }
            currentWord += char;
        } else {
            if (currentWord) {
                words.push({ type: 'word', content: currentWord });
                currentWord = '';
            }
            currentNonWord += char;
        }
    }
    
    if (currentWord) {
        words.push({ type: 'word', content: currentWord });
    }
    if (currentNonWord) {
        words.push({ type: 'nonword', content: currentNonWord });
    }
    
    return words;
}

// Function to apply transformations to text
function transformText(text, selectedRules) {
    if (!text.trim() || selectedRules.length === 0) {
        return text;
    }
    
    const words = extractWords(text);
    const transformedWords = words.map(item => {
        if (item.type === 'word') {
            let transformed = item.content;
            // Apply each selected rule in sequence
            selectedRules.forEach(rule => {
                if (transformations[rule]) {
                    transformed = transformations[rule](transformed);
                }
            });
            return transformed;
        } else {
            return item.content;
        }
    });
    
    return transformedWords.join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const transformBtn = document.getElementById('transformBtn');
    const output = document.getElementById('output');
    const ruleCheckboxes = document.querySelectorAll('.rule-option input[type="checkbox"]');
    
    transformBtn.addEventListener('click', () => {
        const text = inputText.value;
        const selectedRules = Array.from(ruleCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        if (!text.trim()) {
            output.textContent = 'Please enter some text first.';
            return;
        }
        
        if (selectedRules.length === 0) {
            output.textContent = 'Please select at least one transformation rule.';
            return;
        }
        
        const transformed = transformText(text, selectedRules);
        output.textContent = transformed;
    });
    
    // Allow Enter key to trigger transformation (Ctrl+Enter or Cmd+Enter)
    inputText.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            transformBtn.click();
        }
    });
});

