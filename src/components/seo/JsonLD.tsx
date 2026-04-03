import { useEffect } from 'react'

interface JsonLDProps {
  data: Record<string, unknown>
  id: string
}

export default function JsonLD({ data, id }: JsonLDProps) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`
    let script = document.getElementById(scriptId) as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
    return () => {
      const el = document.getElementById(scriptId)
      if (el) el.remove()
    }
  }, [data, id])

  return null
}
