import { describe, test, expect } from 'vitest';
import { DerivAPIClient } from './deriv-api-client';

describe('DerivAPIClient', () => {
    describe('Testing class interfaces', () => {
        const derivAPIClient = new DerivAPIClient('ws://something.com');

        test('send()', () => {
            expect(typeof derivAPIClient.send).toBe('function');
        });

        test('subscribe()', () => {
            expect(typeof derivAPIClient.subscribe).toBe('function');
        });

        test('unsubscribe()', () => {
            expect(typeof derivAPIClient.unsubscribe).toBe('function');
        });

        test('waitFor()', () => {
            expect(typeof derivAPIClient.waitFor).toBe('function');
        });

        test('reinitializeSubscriptions()', () => {
            expect(typeof derivAPIClient.reinitializeSubscriptions).toBe('function');
        });

        test('unsubscribeAll()', () => {
            expect(typeof derivAPIClient.unsubscribeAll).toBe('function');
        });

        test('isSocketClosingOrClosed()', () => {
            expect(typeof derivAPIClient.isSocketClosingOrClosed).toBe('function');
        });

        test('disconnect()', () => {
            expect(typeof derivAPIClient.disconnect).toBe('function');
        });

        test('cleanup()', () => {
            expect(typeof derivAPIClient.cleanup).toBe('function');
        });

        test('keepAlive()', () => {
            expect(typeof derivAPIClient.keepAlive).toBe('function');
        });
    });
});
