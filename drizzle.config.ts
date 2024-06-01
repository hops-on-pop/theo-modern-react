import { env } from '~/env'
import { type Config } from 'drizzle-kit'

export default {
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ['theo-modern-react_*'],
} satisfies Config
