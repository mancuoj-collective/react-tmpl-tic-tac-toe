import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="font-sans antialiased ">
      <div className="grid min-h-svh grid-cols-[1fr_min(444px,calc(100%_-_64px))_1fr] gap-x-8">
        <div className="col-[2] flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  )
}
