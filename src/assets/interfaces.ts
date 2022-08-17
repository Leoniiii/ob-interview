export interface EventDates {
  event: Event;
  sessions: Session[];
}

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Session {
  date: string;
  availability: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}
