export default {
  4: {
    q1: {
      qImg: 'm4-s-1-1.png',
      aImg: 'm4-s-1-2.png',
      examples: [
        {idx: 'a', next: 'q2', label: '혈압과의 싸움에서는 선제압이 중요!<br> 즉시 혈압강하제 처방을 고려한다.'},
        {idx: 'b', next: 'q3', label: '운동과 식이요법은 모든 처방에 우선!<br> 약처방 보다는 LSM을 먼저 권한다.'}
      ],
      type: 'radio',
    },
    q2: {
      qImg: 'm4-s-2-1.png',
      aImg: 'm4-s-2-2.png',
      examples: [
        {idx: 'a', label: '일단 혈압을 빨리 낮추는게 우선이라서'},
        {idx: 'b', label: '연령이나 비만도로 봐서, 아슬아슬한 경계선에 있어서'},
        {idx: 'c', label: '규칙적인 생활습관을 하는게 어려운 직업군이라'},
        {idx: 'd', label: '기타'},
      ],
      next: 'q4',
      type: 'checkbox',
    },
    q3: {
      qImg: 'm4-s-3-1.png',
      aImg: 'm4-s-3-2.png',
      examples: [
        {idx: 'a', label: '생활습관개선으로 혈압 관리가 가능하다고 판단해서'},
        {idx: 'b', label: '환자가 혈압강하제 복용을 꺼려해서'},
        {idx: 'c', label: '환자가 복용하기 간편한 혈압강하제가 마땅치 않아서'},
        {idx: 'd', label: '기타'},
      ],
      next: 'q4',
      type: 'checkbox',
    },
    q4: {
      qImg: 'm4-s-4-1.png',
      aImg: 'm4-s-4-2.png',
      examples: [
        {idx: 'a', next: 'q5', label: '있다'},
        {idx: 'b', next: 'q9', label: '없다'}
      ],
      type: 'radio',
    },
    q5: {
      qImg: 'm4-s-5-1.png',
      aImg: 'm4-s-5-2.png',
      examples: [
        {idx: 'a', label: '고혈압 초진환자'},
        {idx: 'b', next: 'q6', label: '기존 ARB 복용 환자'},
        {idx: 'c', label: '타 계열 고혈압제 복용 환자'},
        {idx: 'd', label: '동반질환 (당뇨, 이상지질혈증) 보유환자'},
        {idx: 'e', label: '기타'},
      ],
      next: 'q7',
      type: 'checkbox',
    },
    q6: {
      qImg: 'm4-s-6-1.png',
      aImg: 'm4-s-6-2.png',
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Fimasartan'},
        {idx: 'c', label: 'Telmisartan (40, 80mg)'},
        {idx: 'd', label: 'Valsartan'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Candesartan'},
        {idx: 'g', label: '기타'},
      ],
      next: 'q7',
      type: 'checkbox',
    },
    q7: {
      qImg: 'm4-s-7-1.png',
      aImg: 'm4-s-7-2.png',
      examples: [
        {idx: 'a', label: '매우 충분하다'},
        {idx: 'b', label: '충분하다'},
        {idx: 'c', label: '보통이다'},
        {idx: 'd', label: '부족하다'},
        {idx: 'e', label: '매우 부족하다'},
      ],
      next: 'q8',
      type: 'radio',
    },
    q8: {
      qImg: 'm4-s-8-1.png',
      aImg: 'm4-s-8-2.png',
      examples: [
        {idx: 'a', label: '성상의 특장점 (40. 80mg에 분할선 추가, 작은 약제 크기<sup>1</sup>)'},
        {idx: 'b', label: '인습성 개선<sup>2</sup> 으로 편리한 조제 및 높은 복약순응도'},
        {idx: 'c', label: '20mg, 40mg, 80mg 세 가지 용량으로 다양한 처방옵션 가능'},
        {idx: 'd', label: '신뢰할 수 있는 회사 제품'},
        {idx: 'e', label: '기타'},
      ],
      next: 'event',
      type: 'checkbox',
    },
    q9: {
      qImg: 'm4-s-9-1.png',
      aImg: 'm4-s-9-2.png',
      examples: [
        {idx: 'a', label: '텔미트렌 20mg에 대해 들어본 적이 없어서'},
        {idx: 'b', label: '20mg과 같은 저용량 제제 처방의 필요성을 못 느껴서'},
        {idx: 'c', label: '어떤 환자에게 처방하면 좋을지 판단하기 곤란해서'},
        {idx: 'd', label: '기타'},
      ],
      next: 'q10',
      type: 'radio',
    },
    q10: {
      qImg: 'm4-s-10-1.png',
      aImg: 'm4-s-10-2.png',
      examples: [
        {idx: 'a', label: '있다'},
        {idx: 'b', label: '없다'},
        {idx: 'c', label: '잘 모르겠다'},
      ],
      next: 'event',
      type: 'radio',
    },
  },
  5: false,
  6: false,
  7: false,
}