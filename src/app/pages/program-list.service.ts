import { Injectable } from '@angular/core';

@Injectable()
export class ProgramListService {

  constructor() { }

  programs = [
    {
      id: '0',
      name: 'Cloud Spanner',
      prise: '99.99$ per/month',
      mainColor: '#85cd32',
      rate: '+100',
      category: 'Storage & Databases',
      photo: 'https://cloud.google.com/images/products/storage/spanner-category.png'
    },
    {
      id: '1',
      name: 'Content Delivery Network',
      prise: '14.00$ per/month',
      mainColor: '#c4dffb',
      rate: '100',
      category: 'Network',
      photo: 'https://cloud.google.com/images/products/cdn/cdn-main-image.png'
    },
    {
      id: '2',
      name: 'Cloud Vision API',
      prise: '239.99$',
      mainColor: '#748f9a',
      rate: '+100k',
      category: 'Machine learning',
      photo: 'https://cloud.google.com/images/products/artwork/what-is-it.png'
    },
    {
      id: '3',
      name: 'BIGQUERY',
      prise: '44.00$',
      mainColor: 'blue',
      rate: '+33k',
      category: 'Bag Data',
      photo: 'https://cloud.google.com/images/products/artwork/incredible-pricing.png'
    },
    {
      id: '4',
      name: 'Powerful Speech Recognition',
      prise: '89.99$',
      mainColor: '#000',
      rate: '99k',
      category: 'Machine Learning',
      photo: 'https://cloud.google.com/images/products/speech/speech-api-lead.png'
    }
  ]

  
  onBuy() {
    return 'sucsess';
  }



}
