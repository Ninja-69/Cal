import { getCurrentUser, getAccessToken } from "@/lib/auth"

export function createClient() {
  return {
    auth: {
      getUser: async () => {
        const user = await getCurrentUser()
        return { data: { user }, error: null }
      },
      getSession: () => {
        const token = getAccessToken()
        return { data: { session: token ? { access_token: token } : null }, error: null }
      },
    },
  }
}
