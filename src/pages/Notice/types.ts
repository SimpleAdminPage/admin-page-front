export interface NoticeType {
  id: string;
  title: string;
  content: string;
  createdTime: number;
  updatedTime: number;
}
export interface NoticeCreateType {
  title: string;
  content: string;
}
