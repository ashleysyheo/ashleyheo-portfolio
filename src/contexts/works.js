import { createContext } from 'react';

const WorkContext = createContext({ works : [
    {
        year: '2020',
        title: '(untitled)',
        type: 'website', 
        url: 'http://untitled-2020.glitch.me/',
        largeImg: 'untitled.png',
        smallImg: 'untitled-small.png',
    },
    {
        year: '2020',
        title: 'Craigslist Housing',
        type: 'app',
        url: 'craigslist-housing',
        largeImg: 'craigslist-housing.png',
        smallImg: 'craigslist-housing-small.png',
    },
    {
        year: '2020',
        title: 'doodle',
        type: 'website', 
        url: 'http://b.parsons.edu/~heos110/studio/doodle/index.html',
        largeImg: 'doodle.png',
        smallImg: 'doodle-small.png',
    },
    {
        year: '2020',
        title: '(simple web)',
        type: 'website, extension',
        url: 'http://b.parsons.edu/~heos110/studio/simple-web/index.html',
        largeImg: 'simple-web.png',
        smallImg: 'simple-web-small.png',
    },
    {
        year: '2020',
        title: 'Anytime',
        type: 'app',
        url: 'anytime',
        largeImg: 'anytime.png',
        smallImg: 'anytime-small.png',
    },
    {
        year: '2019',
        title: 'FC Barcelona',
        type: 'editorial',
        url: 'fc-barcelona',
        largeImg: 'fc-barcelona.png',
        smallImg: 'fc-barcelona-small.png',
    },
    {
        year: '2019',
        title: 'Foot',
        type: 'app',
        url: 'foot',
        largeImg: 'foot.png',
        smallImg: 'foot-small.png',
    },
    {
        year: '2019',
        title: 'Design a Principle',
        type: 'editorial',
        url: 'design-a-principle',
        largeImg: 'design-a-principle.png',
        smallImg: 'design-a-principle-small.png',
    },
]});

export default WorkContext;