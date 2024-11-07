import { Button } from '@/components/ui/button'
import { Layout } from './layout'
import { RiChatSmileAiLine, RiGithubLine } from '@remixicon/react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

export function App() {
  return (
    <Layout>
      <div className="border rounded-lg p-4 w-full">
        <div className="flex gap-1.5">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/mancuoj-collective/react-tmpl-lite" target="_blank" rel="noreferrer">
              <RiGithubLine />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://mancuoj.me" target="_blank" rel="noreferrer">
              <RiChatSmileAiLine />
            </a>
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </Layout>
  )
}
