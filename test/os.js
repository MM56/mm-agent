import test from 'ava';

import Agent from '../src/index';

test('os - mac', t => {
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

	t.is(Agent.os, Agent.OS.TYPES.MAC.id);
});

test('os - windows 10', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/12.10240';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.WINDOWS_10.id);
});

test('os - windows 8.1', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.WINDOWS_8_1.id);
});

test('os - windows 8', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.WINDOWS_8.id);
});

test('os - windows 7', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.195.38 Safari/532.0';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.WINDOWS_7.id);
});

test('os - windows mobile', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 630) like Gecko';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.WINDOWS_MOBILE.id);
});

test('os - linux', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.LINUX.id);
});

test('os - ios', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.IOS.id);
});

test('os - android', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	const ua = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36';
	Agent.inspect(ua);

	t.is(Agent.os, Agent.OS.TYPES.ANDROID.id);
});

test('os - unknown', t => {
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

	t.is(Agent.os, Agent.OS.TYPES.UNKNOWN.id);
});
