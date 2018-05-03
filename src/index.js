/**
 * MM Agent class
 *
 * @class
 *
 * @license {@link https://opensource.org/licenses/MIT|MIT}
 *
 */
class Agent {

	/**
	 * Creates an instance of Agent
	 *
	 * @constructor
	 */
	constructor() {
		this.DEVICE = {
			PREFIX: 'device',
			TYPES: {
				PHONE: 'phone',
				TABLET: 'tablet',
				DESKTOP: 'desktop',
			}
		};
		this.OS = {
			PREFIX: 'device',
			TYPES: {
				IOS: {
					id: 'ios',
					rules: [ 'ipad', 'iphone' ],
				},
				ANDROID: {
					id: 'android',
					rules: [ 'android', 'kindle' ],
				},
				MAC: {
					id: 'mac',
					rules: 'mac os'
				},
				WINDOWS_10: {
					id: 'windows_10',
					rules: 'windows nt 10',
				},
				WINDOWS_8_1: {
					id: 'windows_8_1',
					rules: 'windows nt 6.3',
				},
				WINDOWS_8: {
					id: 'windows_8',
					rules: 'windows nt 6.2',
				},
				WINDOWS_7: {
					id: 'windows_7',
					rules: 'windows nt 6.1',
				},
				WINDOWS_MOBILE: {
					id: 'windows_mobile',
					rules: 'iemobile',
				},
				WINDOWS: {
					id: 'windows',
					rules: 'windows',
				},
				LINUX: {
					id: 'linux',
					rules: 'linux',
				},
				UNKNOWN: {
					id: 'unknown',
					rules: null,
				},
			}
		};
		this.BROWSER = {
			PREFIX: 'browser',
			TYPES: {
				IE: 'ie',
				CHROME: 'chrome',
				SAFARI: 'safari',
				FIREFOX: 'firefox',
				UNKNOWN: 'unknown',
			}
		};

		this.inspected = false;
	}


	/**
	 * Inspects from a user-agent
	 *
	 * @param {string} [ua=navigator.userAgent]
	 *
	 * @memberof Agent
	 */
	inspect(ua = navigator.userAgent) {
		this.hasTouchEvents = this._hasTouchEvents();
		this.device = this._getDevice(this.hasTouchEvents);
		this.os = this._getOS(ua);
		this.isInWebview = this._isInWebview(ua);
		this.browser = this._getBrowser(ua);
		this.browserVersion = this._getBrowserVersion(this.browser, ua);
		this.pixelRatio = this._getPixelRatio();
		this.mobile = this.device !== 'desktop';
		this.desktop = !this.mobile;
		this.inspected = true;
	}


	/**
	 * Sets classes to a DOM element from what has been inspected
	 *
	 * @param {DOMElement} elt
	 * @param {string} [separator='-']
	 *
	 * @memberof Agent
	 */
	setClasses(elt, separator = '-') {
		if (!this.inspected) {
			this.inspect();
		}

		elt.classList.add(`${this.DEVICE.PREFIX}${separator}${this.device}`);
		elt.classList.add(`${this.OS.PREFIX}${separator}${this.os}`);
		elt.classList.add(`${this.BROWSER.PREFIX}${separator}${this.browser}`);
		elt.classList.add(`${this.BROWSER.PREFIX}${separator}${this.browser}${separator}${this.browserVersion}`);
	}

	_hasTouchEvents() {
		return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
	}

	_getDevice(hasTouchEvents = this._hasTouchEvents()) {
		if (!hasTouchEvents) {
			return this.DEVICE.TYPES.DESKTOP;
		}

		if (Math.max(window.screen.width, window.screen.height) > 813) {
			return this.DEVICE.TYPES.TABLET;
		}

		return this.DEVICE.TYPES.PHONE;
	}

	_getOS(ua) {
		for (const osType in this.OS.TYPES) {
			const osDatas = this.OS.TYPES[ osType ];
			if (osDatas.rules !== null && this._isInUA(osDatas.rules, ua)) {
				return osDatas.id;
			}
		}
		return this.OS.TYPES.UNKNOWN.id;
	}

	_isInWebview(ua) {
		return this._isInUA([ 'FBAN', 'FBAV' ], ua);
	}

	_getBrowser(ua) {
		if (this._isIE(ua)) {
			return this.BROWSER.TYPES.IE;
		}

		if (this._isInUA('chrome', ua)) {
			return this.BROWSER.TYPES.CHROME;
		}

		if (this._isInUA('safari', ua)) {
			return this.BROWSER.TYPES.SAFARI;
		}

		if (this._isInUA('firefox', ua)) {
			return this.BROWSER.TYPES.FIREFOX;
		}

		return this.BROWSER.TYPES.UNKNOWN;
	}

	_isIE(ua) {
		return this._isInUA('msie', ua) ||
			(this._isInUA('trident', ua) && this._isInUA('rv:', ua)) ||
			(this._isInUA('windows', ua) && this._isInUA('edge', ua));
	}

	_getBrowserVersion(browser, ua) {
		try {
			let v;
			ua = ua.toLowerCase();
			switch (browser) {
				case this.BROWSER.TYPES.IE:
					if (this._isInUA('msie', ua)) {
						return Number(ua.split('msie ')[ 1 ].split('.')[ 0 ]);
					}
					if (this._isInUA('rv:', ua)) {
						return Number(ua.split('rv:')[ 1 ].split('.')[ 0 ]);
					}
					return Number(ua.split('edge/')[ 1 ].split('.')[ 0 ]);

				case this.BROWSER.TYPES.CHROME:
					return Number(ua.split('chrome/')[ 1 ].split('.')[ 0 ]);

				case this.BROWSER.TYPES.SAFARI:
					v = ua.match(/version\/([\.\d]+)/i);
					return parseFloat(v[ 1 ]);

				case this.BROWSER.TYPES.FIREFOX:
					return Number(ua.split('firefox/')[ 1 ].split('.')[ 0 ]);
			}
		} catch (e) {
			return -1;
		}
	}

	_getPixelRatio() {
		return Math.min(window.devicePixelRatio || 1, 2);
	}

	_isInUA(rules, ua = navigator.userAgent) {
		if (typeof rules === 'string') {
			rules = [ rules ];
		}
		for (let i = rules.length - 1; i >= 0; i--) {
			const rule = new RegExp(rules[ i ], 'i');
			if (rule.test(ua)) {
				return true;
			}
		}
		return false;
	}

}

export default new Agent();
