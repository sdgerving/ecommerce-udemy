exports.userSignupValidator = (req, res, next) => {
	req.check('name', 'name is required.').notEmpty();
	req.check('email','this isnt an email you fucking cunt!!!')
		.matches(/.+\@.+\..+/)
		.withMessage("email must have @")
		.isLength({
			min: 4,
			max: 32
			
		});
		
		req.check('password','you need a password fucker').notEmpty()
		
		.isLength({min:6})
		.withMessage("Password must contain at least 6 charcter dumb-ass")
		.matches(/\d/)
		.withMessage("Put in a number you asshole");
		const errors = req.validationErrors();
		if(errors){
			const firstError = errors.map(error => error.msg)[0];
			return res.status(400).json({error: firstError});
		}
		
		next();
};