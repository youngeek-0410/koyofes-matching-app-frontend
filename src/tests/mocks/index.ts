if (typeof window === 'undefined') {
  ;(async (): Promise<void> => {
    const { server } = await import('./server')
    server.listen()
  })()
} else {
  ;(async (): Promise<void> => {
    const { worker } = await import('./browser')
    worker.start()
  })()
}
export {}
