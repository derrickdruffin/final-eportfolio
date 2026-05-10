function formatDate(dateString) {
  if (!dateString) return ''
  return dateString
}

function truncateText(text, maxLength) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

function capitalizeFirst(string) {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { formatDate, truncateText, capitalizeFirst }