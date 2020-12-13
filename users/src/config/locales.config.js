const configI18n = {
    // debug: true,
    backend: {
      // eslint-disable-next-line no-path-concat
      loadPath: __dirname + '/{{lng}}/{{ns}}.json',
      // eslint-disable-next-line no-path-concat
      addPath: __dirname + '/{{lng}}/{{ns}}.missing.json'
    },
    fallbackLng: 'fr',
    preload: ['fr', 'en'],
    saveMissing: true,
      // order and from where user language should be detected
	order: [/*'path', 'session', */ 'path', 'querystring', 'cookie', 'header'],

	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupHeader: 'accept-language',
	lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
	lookupSession: 'lng',
	lookupPath: 'lng',
	lookupFromPathIndex: 0,

	// cache user language
	caches: false, // ['cookie']

	ignoreCase: true, // ignore case of detected language

	// optional expire and domain for set cookie
	cookieExpirationDate: new Date(),
	cookieDomain: 'myDomain',
	cookiePath: '/my/path',
	cookieSecure: true, // if need secure cookie
	cookieSameSite: 'strict' // 'strict', 'lax' or 'none'
  }

export default configI18n;