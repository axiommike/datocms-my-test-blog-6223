import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              This is my development practice page. To go to my main home on the web{' '}
              <a
                href="https://mikecameron.ca"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
