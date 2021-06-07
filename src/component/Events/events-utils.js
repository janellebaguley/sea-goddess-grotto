let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') 

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    location: '',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    location: '',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}