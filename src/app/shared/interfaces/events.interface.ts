export interface IEventDates {
  event: IEvent;
  sessions: ISession[];
}

export interface IEventDetail {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ISession {
  date: string;
  availability: string;
}

export interface IEvent {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}
