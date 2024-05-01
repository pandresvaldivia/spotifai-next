export function getPlaylistDescription(description: string): string {
  // Check if the description has a list of links to artists
  const hasArtists = description.includes('spotify:')

  if (!hasArtists) return description

  // Remove the anchor tags from the description
  return description.replace(/(<a href=spotify:playlist:[\w\d]+>|<\/a>)/g, '')
}
