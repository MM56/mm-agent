import test from 'ava';

import Agent from '../src/index';

test('device - phone', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 400,
			height: 400,
		}
	};
	Agent.inspect('');

	t.is(Agent.device, Agent.DEVICE.TYPES.PHONE);
});

test('device - tablet', t => {
	global.window = {
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,
		screen: {
			width: 801,
			height: 400,
		}
	};
	Agent.inspect('');

	t.is(Agent.device, Agent.DEVICE.TYPES.TABLET);
});

test('device - desktop', t => {
	global.window = {
		ontouchstart: undefined,
		ontouchmove: undefined,
		ontouchend: undefined,
		screen: {
			width: 801,
			height: 400,
		}
	};
	Agent.inspect('');

	t.is(Agent.device, Agent.DEVICE.TYPES.DESKTOP);
});
