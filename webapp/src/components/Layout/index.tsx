import { Link, Outlet } from 'react-router-dom'
import * as routes from '../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <h1 className={css.logo}>Ideas</h1>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={routes.getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={routes.getNewIdeaRoute()}>
              Add Idea
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
