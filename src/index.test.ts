import { expect, test } from 'vitest'
import { hello } from './index'

test('hello returns greeting', () => {
  expect(hello()).toBe('Hello from setup_tools_createNewWorkspace!')
})
