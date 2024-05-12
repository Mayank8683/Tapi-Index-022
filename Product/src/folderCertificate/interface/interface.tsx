
export interface Course {
  name: string;
  dates: string;
  type: 'Part-time' | 'Full-time';
  days: string;
  hours: string;
  instructor: {
    name: string;
    image: string; 
  };
  spotsLeft: number;
  timeZone: string;
  timeZoneInfo: string;
  logo: string;

}
