import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';  // XML mode is used for HTML
import 'codemirror/mode/javascript/javascript';  // JavaScript mode
import 'codemirror/mode/css/css';  // CSS mode
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
  const {
    language,      // Language mode (HTML, CSS, JavaScript)
    displayName,   // Display name for the editor (HTML, CSS, JS)
    value,         // The current code in the editor
    onChange       // Function to handle changes in the editor
  } = props;

  const [open, setOpen] = useState(true);  // State to track if the editor is open or collapsed

  // Handle change in the editor's content
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,  // Wrap long lines
          lint: true,          // Enable linting
          mode: language,      // Set the language mode
          theme: 'material',   // Set the editor theme
          lineNumbers: true    // Show line numbers
        }}
      />
    </div>
  );
}
