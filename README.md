# 🍲 AlphabetSoup - Word Warper 🍲

> *Stirring up your words since... now!*

A web-based text transformation tool designed to help educators create engaging and thought-provoking test questions by applying various word transformation patterns. Transform entire paragraphs with multiple rules while preserving punctuation and formatting.

##  The Story Behind AlphabetSoup

During one of my classes, my professor created a unique test experience. Instead of writing questions in plain text, he crafted an entire question paper where every word followed a specific transformation pattern. This creative approach challenged us to think differently and decode the patterns to understand the questions.

After the exam, I was curious about how he created such a complex question paper. When I asked him, he revealed that he had spent **hours manually transforming each word** to create that pattern. The dedication and effort he put into making us think critically was truly inspiring.

That conversation sparked an idea: *What if there was a tool that could do this transformation automatically?* 

This project is my gift to him—a way to save countless hours while continuing to create those engaging, pattern-based learning experiences. AlphabetSoup allows educators to transform entire paragraphs with multiple rules in seconds, preserving all punctuation and formatting, so they can focus on teaching rather than manual word manipulation.

##  Features

- **8 Different Transformation Rules**: Choose from a variety of word transformation patterns
- **Multiple Rule Application**: Apply multiple transformations sequentially to create complex patterns
- **Punctuation Preservation**: Maintains all punctuation, spaces, and formatting in your text
- **User-Friendly Interface**: Clean, modern design with intuitive controls
- **Keyboard Shortcuts**: Use `Ctrl+Enter` (or `Cmd+Enter` on Mac) to quickly transform text
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Available Transformation Rules

1. **Swap last 2 letters → move to beginning**: Takes the last two letters and places them at the start
   - Example: `hello` → `lohel`

2. **Swap first 2 letters → move to end**: Takes the first two letters and places them at the end
   - Example: `hello` → `llohe`

3. **Reverse entire word**: Completely reverses the word
   - Example: `hello` → `olleh`

4. **Move first letter to end**: Shifts the first letter to the end
   - Example: `hello` → `elloh`

5. **Move last letter to beginning**: Shifts the last letter to the beginning
   - Example: `hello` → `ohell`

6. **Swap first and last letters**: Exchanges the first and last letters
   - Example: `hello` → `oellh`

7. **Swap middle two letters**: Swaps the middle two letters (handles both even and odd-length words)
   - Example: `hello` → `hlelo` (even) or `world` → `wolrd` (odd)

8. **Reverse first half of word**: Reverses only the first half of the word
   - Example: `hello` → `lehlo`

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Enter Your Text**: Paste or type your text into the textarea
3. **Select Transformation Rules**: Check one or more transformation rules you want to apply
4. **Transform**: Click the "Transform Text" button or press `Ctrl+Enter` (Windows/Linux) or `Cmd+Enter` (Mac)
5. **View Results**: The transformed text will appear in the output box below

### Example Usage

**Input:**
```
Hello, world! This is a test.
```

**Selected Rules:**
- Reverse entire word
- Move first letter to end

**Output:**
```
dlrow, olleH! sihT si a tset.
```

##  Technical Details

### File Structure
```
AlphabetSoup-main/
├── index.html      # Main HTML structure
├── script.js       # JavaScript logic and transformations
├── style.css       # Styling and responsive design
└── README.md       # This file
```

### How It Works

1. **Word Extraction**: The application intelligently separates words from punctuation and spaces using the `extractWords()` function
2. **Transformation Application**: Each selected rule is applied sequentially to every word in the text
3. **Reconstruction**: The transformed words are reassembled with their original punctuation and spacing intact

### Key Functions

- `extractWords(text)`: Parses text into words and non-word characters (punctuation, spaces)
- `transformText(text, selectedRules)`: Applies selected transformations to the text
- `transformations`: Object containing all 8 transformation functions

## Design Philosophy

AlphabetSoup was designed with educators in mind:
- **Simple**: No complex setup or installation required
- **Fast**: Instant transformations for any length of text
- **Flexible**: Mix and match rules to create unique patterns
- **Reliable**: Preserves formatting so your questions remain readable (in their transformed state!)

##  Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

##  License

This project is open source and available for educational use.

## Acknowledgments

Special thanks to my professor, whose creative teaching methods inspired this project. This tool is dedicated to all educators who go the extra mile to make learning engaging and thought-provoking.

---

**Made with ❤️ for educators who make us think differently**

*If you find this tool helpful, feel free to share it with other educators who might benefit from it!*

