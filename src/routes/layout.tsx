import { GridPattern } from '@/components/ui/magic/grid-pattern'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative font-sans antialiased">
      <div className="grid min-h-svh grid-cols-[1fr_min(444px,calc(100%_-_64px))_1fr] gap-x-8">
        <div className="col-[2] flex flex-col items-center justify-center">
          <div className="w-full h-[28rem] border rounded-lg relative shadow-lg z-10">{children}</div>
        </div>
      </div>
      <GridPattern
        width={35}
        height={35}
        x={-5}
        y={-8}
        className={cn('opacity-75 [mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
      />
    </div>
  )
}
