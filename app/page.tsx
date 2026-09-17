import type { ReactNode } from 'react'
import { Check, Rocket, Sparkles } from 'lucide-react'
import { Confetti } from '@/components/confetti'
import { Button } from '@/components/ui/button'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function AchievementCard({
  icon,
  label,
  title,
  description,
}: {
  icon: ReactNode
  label: string
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20">
      <div className="flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-white">
          {icon}
        </div>
        <span className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="size-4" strokeWidth={3} />
          <span className="sr-only">Completado</span>
        </span>
      </div>
      <p className="mt-5 text-xs font-medium uppercase tracking-widest text-white/50">
        {label}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-white/60">
        {description}
      </p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 py-16 text-center">
      {/* Glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/30 via-fuchsia-500/10 to-transparent blur-3xl"
      />

      <Confetti />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
          <Sparkles className="size-4 text-amber-300" />
          Todo listo para empezar
        </span>

        <h1 className="mt-6 text-balance bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          ¡Ya soy oficialmente
          <br />
          desarrollador con v0!
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          Creé mi cuenta de v0 y Vercel, conecté mi usuario de GitHub y ya tengo
          todo lo que necesito para empezar a construir. Que empiece la
          diversión.
        </p>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2">
          <AchievementCard
            icon={<Rocket className="size-6" />}
            label="Cuenta creada"
            title="Usuario de v0 & Vercel"
            description="Listo para generar, iterar y desplegar apps en segundos."
          />
          <AchievementCard
            icon={<GithubIcon className="size-6" />}
            label="Cuenta conectada"
            title="Usuario de GitHub"
            description="Mi código versionado y sincronizado, listo para colaborar."
          />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <a href="https://v0.app" target="_blank" rel="noopener noreferrer">
              Empezar a programar
              <Rocket className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              Ver mi GitHub
            </a>
          </Button>
        </div>

        <p className="mt-16 text-sm text-white/40">
          El primero de muchos proyectos increíbles.
        </p>
      </div>
    </main>
  )
}
