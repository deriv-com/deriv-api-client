import { describe, test, expect } from 'vitest';
import { DerivAPIManager } from './deriv-api-manager';

describe('DerivAPIManager', () => {
    describe('Testing class interfaces', () => {
        const derivAPIManager = new DerivAPIManager('ws://something.com');

        test('getActiveClient()', () => {
            expect(typeof derivAPIManager.getActiveClient).toBe('function');
        });

        test('switchConnection()', () => {
            expect(typeof derivAPIManager.switchConnection).toBe('function');
        });
    });
});
