'use client'

// Función para extraer ID y parámetros de un enlace de YouTube
function parseYouTubeUrl(url = '') {
  try {
    const u = new URL(url)
    let id = ''
    let params = {}

    // Detectar ID
    if (u.hostname.includes('youtu.be')) {
      id = u.pathname.slice(1)
    } else if (u.pathname.startsWith('/shorts/')) {
      id = u.pathname.split('/shorts/')[1]
    } else if (u.searchParams.has('v')) {
      id = u.searchParams.get('v')
    } else if (u.pathname.startsWith('/embed/')) {
      id = u.pathname.split('/embed/')[1]
    }

    // Guardar parámetros extra
    if (u.searchParams.has('start')) params.start = u.searchParams.get('start')
    if (u.searchParams.has('autoplay'))
      params.autoplay = u.searchParams.get('autoplay')
    if (u.searchParams.has('mute')) params.mute = u.searchParams.get('mute')
    if (u.searchParams.has('list')) params.list = u.searchParams.get('list') // para playlists

    return { id, params }
  } catch {
    return { id: '', params: {} }
  }
}

export default function YouTubeEmbed({ url, title = 'Video' }) {
  const { id, params } = parseYouTubeUrl(url)
  if (!id) return null

  // Construir URL del embed con parámetros
  const query = new URLSearchParams({
    rel: 0,
    modestbranding: 1,
    playsinline: 1,
    ...params,
  })

  const src = `https://www.youtube-nocookie.com/embed/${id}?${query.toString()}`

  return (
    <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
      <iframe
        className='absolute inset-0 h-full w-full rounded-lg'
        src={src}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </div>
  )
}
