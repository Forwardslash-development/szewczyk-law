import { SITE_MAX_WIDTH, SITE_PADDING } from '../../utils/layout'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div style={{ maxWidth: SITE_MAX_WIDTH, margin: '0 auto', padding: SITE_PADDING }}>
      {children}
    </div>
  )
}
