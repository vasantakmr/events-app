export interface FormData {
  title: string;
  description: string;
  shortDescription?: string;
  userID?: string;
  companyID?: string;
  eventlocation: string;
  startDate: Date | null;
  endDate: Date | null;
  image?: string;
  theme?: string;
  usersCapacity?: number;
  eventType?: string;
}
