import { useState, useEffect, useRef } from 'react';
import '../styles/Terminal.css';

// Startup messages to display on load
const STARTUP_MESSAGES = [
  '╔════════════════════════════════════════╗',
  '║    ROBCO INDUSTRIES UNIFIED OPERATING  ║',
  '║              SYSTEM v3.62              ║',
  '║                                        ║',
  '║     WELCOME TO LAB34 TERMINAL          ║',
  '╚════════════════════════════════════════╝',
  '',
  'SYSTEM INITIALIZED...',
  'SECURITY PROTOCOLS: ONLINE',
  'MEMORY CHECK: COMPLETE',
  ''
];

// ASCII art for lab34
const ASCII_ART = [
  '',
  '                         bbbbbbbb',
  'lllllll                  b::::::b             333333333333333          444444444',
  'l:::::l                  b::::::b            3:::::::::::::::33       4::::::::4',
  'l:::::l                  b::::::b            3::::::33333::::::3     4:::::::::4',
  'l:::::l                   b:::::b            3333333     3:::::3    4::::44::::4',
  ' l::::l   aaaaaaaaaaaaa   b:::::bbbbbbbbb                3:::::3   4::::4 4::::4',
  ' l::::l   a::::::::::::a  b::::::::::::::bb              3:::::3  4::::4  4::::4',
  ' l::::l   aaaaaaaaa:::::a b::::::::::::::::b     33333333:::::3  4::::4   4::::4',
  ' l::::l            a::::a b:::::bbbbb:::::::b    3:::::::::::3  4::::444444::::444',
  ' l::::l     aaaaaaa:::::a b:::::b    b::::::b    33333333:::::3 4::::::::::::::::4',
  ' l::::l   aa::::::::::::a b:::::b     b:::::b            3:::::34444444444:::::444',
  ' l::::l  a::::aaaa::::::a b:::::b     b:::::b            3:::::3          4::::4',
  ' l::::l a::::a    a:::::a b:::::b     b:::::b            3:::::3          4::::4',
  'l::::::la::::a    a:::::a b:::::bbbbbb::::::b3333333     3:::::3          4::::4',
  'l::::::la:::::aaaa::::::a b::::::::::::::::b 3::::::33333::::::3        44::::::44',
  'l::::::l a::::::::::aa:::ab:::::::::::::::b  3:::::::::::::::33         4::::::::4',
  'llllllll  aaaaaaaaaa  aaaabbbbbbbbbbbbbbbb    333333333333333           4444444444',
  ''
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function displayStartupSequence(setLines) {
  let allLines = [];

  // Display startup messages
  for (const msg of STARTUP_MESSAGES) {
    allLines.push(msg);
    setLines([...allLines]);
    await delay(100); // Typing effect
  }

  // Display ASCII art
  for (const line of ASCII_ART) {
    allLines.push(line);
    setLines([...allLines]);
    await delay(150);
  }

  // Add ready prompt
  allLines.push('> ');
  setLines([...allLines]);
}

function Terminal() {
  const [lines, setLines] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Display startup sequence on component mount
  useEffect(() => {
    displayStartupSequence(setLines);
    // Focus on hidden input for keyboard capture
    inputRef.current?.focus();
  }, []);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentInput]);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && !isWaiting) {
      e.preventDefault();
      
      if (currentInput.trim()) {
        // Display the command
        const newLines = [...lines];
        newLines[newLines.length - 1] = `> ${currentInput}`;
        setLines(newLines);
        
        // Show SYNTAX ERROR after brief delay
        setIsWaiting(true);
        await delay(300);
        
        const errorLines = [...newLines];
        errorLines.push('');
        errorLines.push('SYNTAX ERROR: COMMAND NOT RECOGNIZED');
        errorLines.push('');
        
        setLines(errorLines);
        await delay(800); // Wait before showing prompt
        
        // Add new prompt
        const finalLines = [...errorLines];
        finalLines.push('> ');
        setLines(finalLines);
        
        setCurrentInput('');
        setIsWaiting(false);
      }
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      setCurrentInput(prev => prev.slice(0, -1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      // Only add printable characters
      setCurrentInput(prev => prev + e.key);
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal" ref={terminalRef}>
        {lines.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {line}
          </div>
        ))}
        {lines.length > 0 && (
          <div className="terminal-line">
            <span className="prompt">&gt; </span>
            <span className="current-input">{currentInput}</span>
            <span className="cursor"></span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="text"
        className="hidden-input"
        onKeyDown={handleKeyDown}
        value=""
        readOnly
        aria-label="Terminal input"
      />
    </div>
  );
}

export default Terminal;
