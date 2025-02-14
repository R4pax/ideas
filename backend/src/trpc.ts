import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const rand = (size: number, min: number) => {
  return Math.round(Math.random() * size + min)
}

const Lorem =
  'Description of Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi amet eveniet quidem aliquid perspiciatis! Blanditiis eligendi totam culpa molestiae. Quas ipsam eaque tempore expedita pariatur dolorum inventore, deserunt explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi amet eveniet quidem aliquid perspiciatis! Blanditiis eligendi totam culpa molestiae. Quas ipsam eaque tempore expedita pariatur dolorum inventore, deserunt explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi amet eveniet quidem aliquid perspiciatis! Blanditiis eligendi totam culpa molestiae. Quas ipsam eaque tempore expedita pariatur dolorum inventore, deserunt explicabo!'

const ideas = Array(42)
  .fill(null)
  .map((_, i) => ({
    id: `id-${i}`,
    name: `IdeaName ${i}`,
    description: Lorem.slice(0, rand(700, 40)),
    text: Array(rand(10, 2))
      .fill(null)
      .map(() => `<p>${Lorem.slice(0, rand(700, 40))}</p>`)
      .join(''),
  }))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
  getIdea: trpc.procedure.input(z.object({ id: z.string() })).query(({ input }) => {
    const idea = ideas.find((idea) => idea.id === input.id)
    return { idea: idea || null }
  }),
})

export type TrpcRouter = typeof trpcRouter
