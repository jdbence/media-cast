/*global test expect jest*/
import Dispatcher from '../Dispatcher';

test('Add listener and catch event with passed data', () => {
  const f = jest.fn();
  const d = new Dispatcher();
  d.on('found', f);
  d.dispatch('found', 'waldo');
  expect(f).toBeCalledWith('waldo');
});

test('Dispatch only calls matching events', () => {
  const f = jest.fn();
  const d = new Dispatcher();
  d.on('found', f);
  d.dispatch('lost', 'waldo');
  expect(f).not.toHaveBeenCalled();
});

test('Only adds 1 listener per event:method', () => {
  const f = jest.fn();
  const d = new Dispatcher();
  d.on('found', f);
  d.on('found', f);
  d.on('found', f);
  d.on('found', f);
  expect(d.listeners.found.length).toEqual(1);
});

test('Remove listeners', () => {
  const f = jest.fn();
  const d = new Dispatcher();
  d.on('found', f);
  d.off('lost', f);
  d.off('found', f);
  expect(d.listeners.found).toEqual([]);
});

test('Destroys listeners', () => {
  const f = jest.fn();
  const d = new Dispatcher();
  d.on('search', f);
  d.on('found', f);
  d.on('list', f);
  d.destroy();
  expect(d.listeners).toEqual({});
});
