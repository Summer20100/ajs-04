import { healthLine } from '../app';

const users = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 49 },
  { name: 'мечник', health: 14 },
];

const healthColorLines = [
  'healthy', 'wounded', 'critical',
];

// const result = healthLine(users);

test('should be color line', () => {
  for (let i = 0; i < 3; i += 1) {
    expect(healthLine(users[i])).toBe(healthColorLines[i]);
  }
});
