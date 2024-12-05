import { GridPattern } from '@/components/ui/grid-pattern'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { Provider } from 'jotai'
import { PropsWithChildren } from 'react'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      <div className="relative font-sans antialiased">
        <div className="grid min-h-svh grid-cols-[1fr_min(444px,calc(100%_-_64px))_1fr] gap-x-8">
          <div className="col-[2] flex flex-col items-center justify-center">
            <div className="relative z-10 h-[28rem] w-full rounded-lg border shadow-lg">
              {children}
            </div>
          </div>
        </div>
        <GridPattern
          width={35}
          height={35}
          x={-5}
          y={-8}
          className={cn(
            'opacity-75 [mask-image:linear-gradient(to_bottom_right,white,transparent,white)]',
          )}
        />
      </div>
      <Toaster richColors />
    </Provider>
  )
}
