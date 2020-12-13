const i18n = (req, res, next) => {
	console.log('eee', req.params)
	if (req.params.lng) {
		req.i18n.changeLanguage(req.params.lng);
	}
	return next();
}

export default i18n;