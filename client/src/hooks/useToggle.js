// useToggle.js
// A reusable custom hook that toggles a boolean value between true and false
// Used by card components to handle expand/collapse functionality

import { useState } from 'react'

function useToggle(initialValue) {
  // Initialize state with the provided value or false by default
  const [value, setValue] = useState(initialValue || false)

  // Toggle function flips the current value
  function toggle() {
    setValue(function(prev) { return !prev })
  }

  // Return the current value and the toggle function
  return [value, toggle]
}

export default useToggle