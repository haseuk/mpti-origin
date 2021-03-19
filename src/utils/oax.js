import qs from 'qs';

const dummy = {
  '/api/hospital?code=100001': [
    {id: 'a12345', name: '김개똥', hospital: '충주병원', department: '소화기내과'},
    {id: 'a12346', name: '김말똥', hospital: '충주병원', department: '소화기내과'},
    {id: 'a12347', name: '김소똥', hospital: '충주병원', department: '소화기내과'},
    {id: 'a12348', name: '김닭똥', hospital: '충주병원', department: '소화기내과'},
    {id: 'a12349', name: '김개똥', hospital: '충주병원', department: '정형외과'},
    {id: 'a12310', name: '김개똥', hospital: '충주병원', department: '내분비내과'},
  ]
};

export default {
  get: (uri, data) => new Promise(resolve => {
    console.log(uri+qs.stringify(data));
    resolve({data: dummy[uri+'?'+qs.stringify(data)]});
  }),
}