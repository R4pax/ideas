import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewIdeaRoute } from '../../lib/routes'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) return <span>Loading...</span>

  if (isError) return <span>Error: ${error.message}</span>

  return (
    <div>
      <h1>Ideas</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.id}>
          <h2>
            <Link to={getViewIdeaRoute({ id: idea.id })}>{idea.name}</Link>
          </h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}
