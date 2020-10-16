import { createContext } from 'react';

const WorkContext = createContext({ works : [
    {
        year: '2020',
        title: '(untitled)',
        type: 'website', 
        url: 'http://untitled-2020.glitch.me/',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/untitled.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/untitled-small.png',
    },
    {
        year: '2020',
        title: 'Craigslist Housing',
        type: 'app',
        url: 'craigslist-housing',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/craigslist-housing.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/craigslist-housing-small.png',
    },
    {
        year: '2020',
        title: 'doodle',
        type: 'website', 
        url: 'http://b.parsons.edu/~heos110/studio/doodle/index.html',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/doodle.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/doodle-small.png',
    },
    {
        year: '2020',
        title: '(simple web)',
        type: 'website, extension',
        url: 'http://b.parsons.edu/~heos110/studio/simple-web/index.html',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/simple-web.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/simple-web-small.png',
    },
    {
        year: '2020',
        title: 'Anytime',
        type: 'app',
        url: 'anytime',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/anytime.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/anytime-small.png',
    },
    {
        year: '2019',
        title: 'FC Barcelona',
        type: 'editorial',
        url: 'fc-barcelona',
        largeImg: 'fhttps://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/fc-barcelona.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/fc-barcelona-small.png',
    },
    {
        year: '2019',
        title: 'Foot',
        type: 'app',
        url: 'foot',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/foot.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/foot-small.png',
    },
    {
        year: '2019',
        title: 'Design a Principle',
        type: 'editorial',
        url: 'design-a-principle',
        largeImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/design-a-principle.png',
        smallImg: 'https://ashleysyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/design-a-principle-small.png',
    },
]});

export default WorkContext;