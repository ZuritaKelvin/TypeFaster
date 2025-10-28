# TypeFaster ⌨️

A minimalist typing speed test application inspired by MonkeyType. Test and improve your typing skills with a clean, distraction-free interface.

## 🚀 Features

- **Multiple Test Modes**
  - **Time Mode**: Choose between 15, 30, 60, or 120 seconds
  - **Words Mode**: Practice with 10, 25, 50, or 100 words

- **Real-time Feedback**
  - Live WPM (Words Per Minute) calculation
  - Accuracy percentage tracking
  - Visual indicators for correct/incorrect letters
  - Animated cursor for current position

- **Performance Tracking**
  - Personal record system
  - Results saved in browser localStorage
  - Instant feedback after each test

- **User Experience**
  - Clean, dark-themed interface
  - Smooth animations and transitions
  - Keyboard-focused interaction
  - Responsive design

## 🎮 How to Use

1. **Open** `index.html` in your web browser
2. **Select** your preferred mode (time or words) and configuration
3. **Start typing** - the timer begins automatically with your first keystroke
4. **Review** your results: WPM, accuracy, and personal record
5. **Click** the reload button to start a new test

### Keyboard Controls

- **Type** to start the test automatically
- **Space** to move to the next word
- **Backspace** to correct mistakes

## 📁 Project Structure

```
TypeFaster/
├── index.html    # Main application file with HTML, CSS, and JavaScript
├── config.js     # Default configuration settings
├── words.js      # Word bank for typing tests
└── README.md     # Project documentation
```

## 🛠️ Technical Details

- **Pure Vanilla JavaScript** - No frameworks or libraries required
- **ES6 Modules** - Modern JavaScript module system
- **CSS Variables** - Easy theme customization
- **LocalStorage API** - Persistent settings and records
- **Responsive Design** - Works on different screen sizes

## 🎨 Customization

### Modify Default Settings

Edit `config.js` to change default values:

```javascript
export const config = {
  words: 25,  // Default number of words
  time: 30,   // Default time in seconds
};
```

### Add More Words

Extend the word bank in `words.js` by adding new words to the array.

### Theme Colors

Customize colors by modifying CSS variables in `index.html`:

```css
:root {
  --green: #00b755;
  --yellow: #daaf38;
  --red: #ca4754;
  --black: #222;
  --gray: #999;
}
```

## 🚀 Getting Started

No installation required! Simply:

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start typing!

```bash
# Clone the repository
git clone https://github.com/yourusername/TypeFaster.git

# Navigate to the directory
cd TypeFaster

# Open in browser (or use a local server)
open index.html
```

## 📊 Metrics Explained

- **WPM (Words Per Minute)**: Number of correct words typed divided by time in minutes
- **Accuracy**: Percentage of correctly typed letters vs total letters typed
- **Record**: Your highest WPM score saved locally

## 🌟 Features in Detail

### Visual Feedback
- **Gray letters**: Untyped letters
- **White letters**: Correctly typed letters
- **Red letters**: Incorrectly typed letters
- **Red underline**: Words with mistakes
- **Yellow cursor**: Current typing position

### Smart Backspace
- Navigate back to previous words marked with errors
- Correct mistakes before completing the test

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📝 License

This project is open source and available for personal and educational use.

## 🎯 Future Enhancements

Potential features to add:
- Multiple language support
- Custom word lists
- Detailed statistics and graphs
- Sound effects
- Difficulty levels
- Multiplayer mode

---

**Happy Typing!** 🎉
