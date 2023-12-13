import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/login",
    "home": "/main",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "url": "http://94.241.170.46:7485/",
  "token": {
    "property": "access",
    "maxAge": false,
    "global": true
  },
  "refreshToken": {
    "property": "refresh"
  },
  "user": {
    "property": false
  },
  "endpoints": {
    "login": {
      "url": "http://94.241.170.46:7485//accounts/login/"
    },
    "refresh": {
      "url": "http://94.241.170.46:7485//accounts/token/refresh/"
    },
    "logout": {
      "url": "http://94.241.170.46:7485//accounts/logout/"
    },
    "user": {
      "url": "http://94.241.170.46:7485//accounts/who-am-i/"
    },
    "reset": {
      "url": "http://94.241.170.46:7485//accounts/reset-password/"
    }
  },
  "autoFetchUser": true,
  "name": "local"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
