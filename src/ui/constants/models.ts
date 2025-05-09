export interface InfoCardData {
    title: string;
    info: string;
    imagePath: string;
    routePath: string;
  }

export interface  PageData {
  pageName: string;
  pagePath: string;
}

export interface MessageData {
  messageContent: string;
  messageSender: string;
}

export interface QandA {
  question: string;
  answer: string;
}

export interface Prediction {
  AlexAlbon: string,
  CarlosSainz: string,
  Constructor: string
}