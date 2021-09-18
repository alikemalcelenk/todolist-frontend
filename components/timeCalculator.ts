type TimeCalculatorPropsType = {
  createdAt: Date
}

const TimeCalculator = ({ createdAt }: TimeCalculatorPropsType): string => {
  const createdDate: Date = new Date(createdAt)
  const nowDate: Date = new Date()

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const milisecond: number = nowDate.valueOf() - createdDate.valueOf()
  const second = milisecond / 1000
  const minute = second / 60
  const hour = minute / 60
  const day = hour / 24

  if (second < 1) {
    return 'now'
  }

  if (
    Math.floor(minute) === 0 &&
    Math.floor(hour) === 0 &&
    Math.floor(day) === 0
  ) {
    return Math.round(second) === 1
      ? `${Math.round(second)} second ago`
      : `${Math.round(second)} seconds ago`
  }

  if (Math.floor(day) === 0 && Math.floor(hour) === 0) {
    return Math.round(minute) === 1
      ? `${Math.round(minute)} minute ago`
      : `${Math.round(minute)} minutes ago`
  }

  if (Math.floor(day) === 0) {
    return Math.round(hour) === 1
      ? `${Math.round(hour)} hour ago`
      : `${Math.round(hour)} hours ago`
  }

  if (Math.round(day) < 7) {
    return Math.round(day) === 1
      ? `${Math.round(day)} day ago`
      : `${Math.round(day)} days ago`
  }

  const dayName = days[createdDate.getDay()]
  const date = createdDate.getDate()
  const monthName = months[createdDate.getMonth()]
  const createdYear =
    createdDate.getFullYear() === nowDate.getFullYear()
      ? ''
      : createdDate.getFullYear()
  const createdTime = createdDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  return `${createdTime} · ${dayName}, ${date} ${monthName} ${createdYear}`
}

export default TimeCalculator
