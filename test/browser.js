import test from 'ava';

import Agent from '../src/index';

test('browser - ie', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"';
	Agent.inspect(ua);

	t.is(Agent.browser, Agent.BROWSER.TYPES.IE);
});

test('browser - ie version', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"';
	Agent.inspect(ua);

	t.is(Agent.browserVersion, 12);
});

test('browser - chrome', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"';
	Agent.inspect(ua);

	t.is(Agent.browser, Agent.BROWSER.TYPES.CHROME);
});

test('browser - chrome version', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"';
	Agent.inspect(ua);

	t.is(Agent.browserVersion, 58);
});

test('browser - safari', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A"';
	Agent.inspect(ua);

	t.is(Agent.browser, Agent.BROWSER.TYPES.SAFARI);
});

test('browser - safari version', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A"';
	Agent.inspect(ua);

	t.is(Agent.browserVersion, 7);
});

test('browser - firefox', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:46.0) Gecko/20100101 Firefox/46.0"';
	Agent.inspect(ua);

	t.is(Agent.browser, Agent.BROWSER.TYPES.FIREFOX);
});

test('browser - firefox version', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:46.0) Gecko/20100101 Firefox/46.0"';
	Agent.inspect(ua);

	t.is(Agent.browserVersion, 46);
});

test('browser - unknown', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = '';
	Agent.inspect(ua);

	t.is(Agent.browser, Agent.BROWSER.TYPES.UNKNOWN);
});

test('browser - not in webview', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"';
	Agent.inspect(ua);

	t.is(Agent.isInWebview, false);
});

test('browser - webview', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12D508 [FBAN/FBIOS;FBAV/27.0.0.10.12;FBBV/8291884;FBDV/iPhone7,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/8.2;FBSS/3; FBCR/vodafoneIE;FBID/phone;FBLC/en_US;FBOP/5]';
	Agent.inspect(ua);

	t.is(Agent.isInWebview, true);
});
