  
  
export class Apps {

  constructor(
    public id: string,
    public name: string,
    public prise: string,
    public rate: string,
    public category: string,
    public photo: string,
    public text: string
  ) {}
}


export const programsMainData: Apps[] = [
{
      id: '0',
      name: 'Cloud Spanner',
      prise: '99.99$ per/month',
      rate: '+100',
      category: 'Storage & Databases',
      photo: 'https://cloud.google.com/images/products/storage/spanner-category.png',
      text: 'Cloud Spanner is the world’s first fully managed relational database service to offer both strong consistency and horizontal scalability for mission-critical online transaction processing (OLTP) applications. With Cloud Spanner you enjoy all the traditional benefits of a relational database; but unlike any other relational database service, Cloud Spanner scales horizontally to hundreds or thousands of servers to handle the biggest transactional workloads.'
    },
    {
      id: '1',
      name: 'Content Delivery Network',
      prise: '14.00$ per/month',
      rate: '200k',
      category: 'Network',
      photo: 'https://cloud.google.com/images/products/cdn/cdn-main-image.png',
      text: 'Google Cloud CDN leverages Google\'s globally distributed edge points of presence to accelerate content delivery for websites and applications served out of Google Compute Engine and Google Cloud Storage. Cloud CDN lowers network latency, offloads origins, and reduces serving costs. Once you\'ve set up HTTP(S) Load Balancing, simply enable Cloud CDN with a single checkbox.'
    },
    {
      id: '2',
      name: 'Cloud Vision API',
      prise: '239.99$',
      rate: '+100k',
      category: 'Machine learning',
      photo: 'https://cloud.google.com/images/products/artwork/what-is-it.png',
      text: 'Google Cloud Vision API enables developers to understand the content of an image by encapsulating powerful machine learning models in an easy to use REST API. It quickly classifies images into thousands of categories (e.g., "sailboat", "lion", "Eiffel Tower"), detects individual objects and faces within images, and finds and reads printed words contained within images. You can build metadata on your image catalog, moderate offensive content, or enable new marketing scenarios through image sentiment analysis. Analyze images uploaded in the request or integrate with your image storage on Google Cloud Storage.'
    },
    {
      id: '3',
      name: 'BigQuery',
      prise: '44.00$',
      rate: '+33k',
      category: 'Bag Data',
      photo: 'https://cloud.google.com/images/products/artwork/incredible-pricing.png',
      text: 'BigQuery is Google\'s fully managed, petabyte scale, low cost enterprise data warehouse for analytics. BigQuery is serverless. There is no infrastructure to manage and you don\'t need a database administrator, so you can focus on analyzing data to find meaningful insights using familiar SQL. BigQuery is a powerful Big Data analytics platform used by all types of organizations, from startups to Fortune 500 companies.'
    },
    {
      id: '4',
      name: 'Powerful Speech Recognition',
      prise: '89.99$',
      rate: '99k',
      category: 'Machine Learning',
      photo: 'https://cloud.google.com/images/products/speech/speech-api-lead.png',
      text: 'Google Cloud Speech API enables developers to convert audio to text by applying powerful neural network models in an easy to use API. The API recognizes over 80 languages and variants, to support your global user base. You can transcribe the text of users dictating to an application’s microphone, enable command-and-control through voice, or transcribe audio files, among many other use cases. Recognize audio uploaded in the request, and integrate with your audio storage on Google Cloud Storage, by using the same technology Google uses to power its own products.'
    }
];
