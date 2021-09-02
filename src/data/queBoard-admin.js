export default {
  202104: {
    q1: {
      part: { num: '1-1', q: '난생 첫 고혈압을 진단을 받은 아래의 환자, 이 환자에게 어떤 관리 조치를 할 예정이십니까?' },
      qImg: 'm4-s-1-1.png',
      qText: '대기업 영업관리 별과장, 나이 45세, 키 180cm, 몸무게 80kg으로<br> 말끔한 외모에 가정적인 성격의 소유자. 10년 이상의 금연 생활에 술도<br> 한달에 두어 번 정도로 평소에 건강은 자신 있어 했는데…<br> 얼마전 태어난 둘째의 매력에 푹 빠져 지내던 그는, 올해 건강검진에서<br> 혈압 143/95mmHg로 고혈압 진단을 받아서 본인 뿐만 아니라 주변<br> 사람들 모두 놀라고 있음.',
      aImg: 'm4-s-1-2.png',
      img: 'doctors.png',
      curtain: 'curtain-mover',
      examples: [
        {idx: 'a', next: 'q2', label: '혈압과의 싸움에서는 선제압이 중요!<br> 즉시 혈압강하제 처방을 고려한다.'},
        {idx: 'b', next: 'q3', label: '운동과 식이요법은 모든 처방에 우선!<br> 약처방 보다는 LSM을 먼저 권한다.'}
      ],
      type: 'radio',
    },
    q2: {
      part: { num: '1-2', q: '왜 혈압강하제 처방을 먼저 고려하셨나요?' },
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
      part: { num: '1-2', q: '왜 생활습관 개선을 먼저 권하셨나요?' },
      qImg: 'm4-s-3-1.png',
      aImg: 'm4-s-3-2.png',
      examples: [
        {idx: 'a', label: '생활습관만 개선해도 혈압 관리가 가능한 수치라서'},
        {idx: 'b', label: '환자가 혈압강하제 복용을 꺼려해서'},
        {idx: 'c', label: '복용하기 간편한 혈압강하제가 마땅치 않아서'},
        {idx: 'd', label: '기타'},
      ],
      next: 'q4',
      type: 'checkbox',
    },
    q4: {
      part: { num: '2-1', q: '선생님께서는 텔미트렌 20mg을 처방해보신 경험이 있으신지요?' },
      qImg: 'm4-s-4-1.png',
      aImg: 'm4-s-4-2.png',
      examples: [
        {idx: 'a', next: 'q5', label: '있다'},
        {idx: 'b', next: 'q9', label: '없다'}
      ],
      type: 'radio',
    },
    q5: {
      part: { num: '2-1', q: '텔미트렌 20mg을 어떤 환자에게 처방하셨나요?' },
      qImg: 'm4-s-5-1.png',
      aImg: 'm4-s-5-2.png',
      examples: [
        {idx: 'a', label: '고혈압 초진환자'},
        {idx: 'b', next: 'q6', label: '기존 ARB 복용 환자'},
        {idx: 'c', label: '타 계열 고혈압제 복용 환자'},
        {idx: 'd', label: '동반질환 (당뇨, 이상지질혈증 등) 보유환자'},
        {idx: 'e', label: '기타'},
      ],
      next: 'q7',
      type: 'checkbox',
    },
    q6: {
      part: { num: '2-2', q: '텔미트렌 20mg은 어떤 ARB 제제를 대신하여 처방하셨나요?' },
      qImg: 'm4-s-6-1.png',
      aImg: 'm4-s-6-2.png',
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Fimasartan'},
        {idx: 'c', label: 'Telmisartan (40, 80mg)'},
        {idx: 'd', label: 'Valsartan'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Candesartan'},
        {idx: 'g', label: 'Azilsartan'},
        {idx: 'h', label: '기타'},
      ],
      next: 'q7',
      type: 'checkbox',
    },
    q7: {
      part: { num: '2-3', q: '텔미트렌 20mg의 혈압 강하 효과에 대해 어떻게 생각하시나요? ' },
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
      part: { num: '2-4', q: '기존 텔미사르탄 제제와 비교해서 종근당 텔미트렌의 장점은 무엇이라고 생각하시나요?' },
      qImg: 'm4-s-8-1.png',
      aImg: 'm4-s-8-2.png',
      examples: [
        {idx: 'a', label: '성상의 특장점 (40. 80mg에 분할선 추가, 작은 약제 크기<sup>1</sup>)'},
        {idx: 'b', label: '인습성 개선<sup>2</sup> 으로 편리한 조제 및 높은 복약순응도 향상 기대'},
        {idx: 'c', label: '20mg, 40mg, 80mg 세 가지 용량으로 다양한 용량옵션 처방 가능'},
        {idx: 'd', label: '신뢰할 수 있는 회사 제품'},
        {idx: 'e', label: '기타'},
      ],
      next: 'survey-finish',
      type: 'radio',
    },
    q9: {
      part: { num: '2-5', q: '텔미트렌 20mg을 처방하시지 않은 이유는 무엇인가요?' },
      qImg: 'm4-s-9-1.png',
      aImg: 'm4-s-9-2.png',
      examples: [
        {idx: 'a', label: '텔미트렌 20mg에 대해 들어본 적이 없어서'},
        {idx: 'b', label: '20mg과 같은 저용량 제제 처방의 필요성을 못 느껴서'},
        {idx: 'c', label: '어떤 환자에게 처방하면 좋을지 판단하기 곤란해서'},
        {idx: 'd', label: '기타'},
      ],
      next: 'q10',
      type: 'checkbox',
    },
    q10: {
      part: { num: '2-5', q: '향후 텔미트렌 20mg을 처방하실 의향이 있으신가요?' },
      qImg: 'm4-s-10-1.png',
      aImg: 'm4-s-10-2.png',
      examples: [
        {idx: 'a', label: '있다'},
        {idx: 'b', label: '없다'},
        {idx: 'c', label: '잘 모르겠다'},
      ],
      next: 'survey-finish',
      type: 'radio',
    },
  },
  202107: {
    q1: {
      part: { num: '1', q: '혈압강하제 처방이 결정된 다음과 같은 중위험군 환자, 이 환자에게 처방을 하신다면?' },
      examples: [
        {idx: 'a', next: 'q2', label: '부작용이 생길 수도 있으니.. 차근차근 저용량부터 시작한다.'},
        {idx: 'b', next: 'q3', label: '점점 나아지겠지 하다 가는 늦는다. 빠르게 잡자! 고용량부터 시작한다.'}
      ],
    },
    q2: {
      part: { num: '1-2', q: '저용량으로 시작하시게 된 이유는 무엇인가요?' },
      examples: [
        {idx: 'a', label: '1기 고혈압은 저용량으로도 충분하다고 생각해서'},
        {idx: 'b', label: '위험인자 중 비만은 생활습관 개선으로 일부 조절이 가능하므로'},
        {idx: 'c', label: '고용량 처방 후 발생 가능한 부작용을 피하기 위해서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q3: {
      part: { num: '1-2', q: '고용량으로 시작하시게 된 이유는 무엇인가요?' },
      examples: [
        {idx: 'a', label: '일단 신속한 혈압 관리가 필요해서'},
        {idx: 'b', label: '비만이라는 위험인자를 보유한 환자이므로'},
        {idx: 'c', label: '직업상 규칙적인 운동 등 생활습관 개선이 어려워서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q4: {
      part: { num: '2', q: '선생님께서는 텔미트렌 20mg을 처방해보신 경험이 있으신지요?' },
      examples: [
        {idx: 'a', next: 'q5', label: '있다'},
        {idx: 'b', next: 'q9', label: '없다'}
      ],
    },
    q5: {
      part: { num: '2-1-1', q: '텔미트렌 20mg을 어떤 환자에게 처방하셨나요?' },
      examples: [
        {idx: 'a', label: '고혈압 초진환자'},
        {idx: 'b', next: 'q6', label: '기존 ARB 복용 환자'},
        {idx: 'c', label: '타 계열 고혈압제 복용 환자'},
        {idx: 'd', label: '동반질환 (당뇨, 이상지질혈증 등) 보유환자'},
        {idx: 'e', label: '기타'},
      ],
    },
    q6: {
      part: { num: '2-1-2', q: '텔미트렌 20mg은 어떤 ARB 제제를 대신하여 처방하셨나요?' },
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Fimasartan'},
        {idx: 'c', label: 'Telmisartan (40, 80mg)'},
        {idx: 'd', label: 'Valsartan'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Candesartan'},
        {idx: 'g', label: 'Azilsartan'},
        {idx: 'h', label: '기타'},
      ],
    },
    q7: {
      part: { num: '2-1-3', q: '텔미트렌 20mg의 혈압 강하 효과에 대해 어떻게 생각하시나요? ' },
      examples: [
        {idx: 'a', label: '매우 충분하다'},
        {idx: 'b', label: '충분하다'},
        {idx: 'c', label: '보통이다'},
        {idx: 'd', label: '부족하다'},
        {idx: 'e', label: '매우 부족하다'},
      ],
    },
    q8: {
      part: { num: '2-1-4', q: '기존 텔미사르탄 제제와 비교해서 종근당 텔미트렌의 장점은 무엇이라고 생각하시나요?' },
      examples: [
        {idx: 'a', label: '성상의 특장점 (40. 80mg에 분할선 추가, 작은 약제 크기)'},
        {idx: 'b', label: '인습성 개선 으로 편리한 조제 및 높은 복약순응도 향상 기대'},
        {idx: 'c', label: '20mg, 40mg, 80mg 세 가지 용량으로 다양한 용량옵션 처방 가능'},
        {idx: 'd', label: '신뢰할 수 있는 회사 제품'},
        {idx: 'e', label: '기타'},
      ],
    },
    q9: {
      part: { num: '2-2-1', q: '텔미트렌 20mg을 처방하시지 않은 이유는 무엇인가요?' },
      examples: [
        {idx: 'a', label: '텔미트렌 20mg에 대해 들어본 적이 없어서'},
        {idx: 'b', label: '20mg과 같은 저용량 제제 처방의 필요성을 못 느껴서'},
        {idx: 'c', label: '어떤 환자에게 처방하면 좋을지 판단하기 곤란해서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q10: {
      part: { num: '2-2-2', q: '향후 텔미트렌 20mg을 처방하실 의향이 있으신가요?' },
      examples: [
        {idx: 'a', label: '있다'},
        {idx: 'b', label: '없다'},
        {idx: 'c', label: '잘 모르겠다'},
      ],
    },
  },
  202108: {
    q1: {
      part: { num: '1', q: '혈압강하제 처방이 결정된 다음과 같은 중위험군 환자, 이 환자에게 처방을 하신다면?' },
      examples: [
        {idx: 'a', next: 'q2', label: '부작용이 생길 수도 있으니.. 차근차근 저용량부터 시작한다.'},
        {idx: 'b', next: 'q3', label: '점점 나아지겠지 하다 가는 늦는다. 빠르게 잡자! 고용량부터 시작한다.'}
      ],
    },
    q2: {
      part: { num: '1-2', q: '특정 ARB 제제 처방을 고려하시게 된 이유는 무엇인가요? (복수 선택 가능)' },
      examples: [
        {idx: 'a', label: '당뇨병과 미세알부민뇨를 동반한 환자여서'},
        {idx: 'b', label: '특정 ARB의 혈압조절 효과가 타 ARB보다 우수하다고 생각하므로'},
        {idx: 'c', label: '특정 ARB의 심혈관질환 위험성 감소 적응증을 고려해서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q2r: {
      part: { num: '1-2-1', q: '다음 ARB 제제 중 처방을 고려하실 약물은 무엇인가요? (복수 선택 가능)' },
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Candesartan'},
        {idx: 'c', label: 'Telmisartan 80mg'},
        {idx: 'd', label: 'Telmisartan 20~40mg'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Valsartan'},
        {idx: 'g', label: 'Fimasartan'},
        {idx: 'h', label: '기타 ARB (______)'},
      ],
    },
    q3: {
      part: { num: '1-2', q: '주로 처방해왔던 ARB 제제 처방을 고려하시게 된 이유는 무엇인가요? (복수 선택 가능)' },
      examples: [
        {idx: 'a', label: 'ARB 간에 효과 차이는 없다고 생각하므로 (class effect)'},
        {idx: 'b', label: '주로 처방해왔던 ARB 제제의 혈압 강하 효과가 충분하므로'},
        {idx: 'c', label: '주로 처방해왔던 ARB 제제가 심혈관질환 위험성 감소<br> 적응증을 가지고 있으므로'},
        {idx: 'd', label: '가이드라인에서 당뇨병이나 신장에 동반 환자에게 ARB를<br> 권고할 때 특정 ARB를 거론하지 않았기 때문에'},
        {idx: 'e', label: '기타'},
      ],
    },
    q3r: {
      part: { num: '1-2-1', q: '다음 ARB 제제 중 처방을 고려하실 약물은 무엇인가요? (복수 선택 가능)' },
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Candesartan'},
        {idx: 'c', label: 'Telmisartan (40mg, 80mg)'},
        {idx: 'd', label: 'Telmisartan (20mg)'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Valsartan'},
        {idx: 'g', label: 'Fimasartan'},
        {idx: 'h', label: '기타'},
      ],
    },
    q4: {
      part: { num: '2', q: '선생님께서는 텔미트렌 20mg을 처방해보신 경험이 있으신지요?' },
      examples: [
        {idx: 'a', next: 'q5', label: '있다'},
        {idx: 'b', next: 'q9', label: '없다'}
      ],
    },
    q5: {
      part: { num: '2-1-1', q: '텔미트렌 20mg을 어떤 환자에게 처방하셨나요?' },
      examples: [
        {idx: 'a', label: '고혈압 초진환자'},
        {idx: 'b', next: 'q6', label: '기존 ARB 복용 환자'},
        {idx: 'c', label: '타 계열 고혈압제 복용 환자'},
        {idx: 'd', label: '동반질환 (당뇨, 이상지질혈증 등) 보유환자'},
        {idx: 'e', label: '기타'},
      ],
    },
    q6: {
      part: { num: '2-1-2', q: '텔미트렌 20mg은 어떤 ARB 제제를 대신하여 처방하셨나요?' },
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Fimasartan'},
        {idx: 'c', label: 'Telmisartan (40, 80mg)'},
        {idx: 'd', label: 'Valsartan'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Candesartan'},
        {idx: 'g', label: 'Azilsartan'},
        {idx: 'h', label: '기타'},
      ],
    },
    q7: {
      part: { num: '2-1-3', q: '텔미트렌 20mg의 혈압 강하 효과에 대해 어떻게 생각하시나요? ' },
      examples: [
        {idx: 'a', label: '매우 충분하다'},
        {idx: 'b', label: '충분하다'},
        {idx: 'c', label: '보통이다'},
        {idx: 'd', label: '부족하다'},
        {idx: 'e', label: '매우 부족하다'},
      ],
    },
    q8: {
      part: { num: '2-1-4', q: '기존 텔미사르탄 제제와 비교해서 종근당 텔미트렌의 장점은 무엇이라고 생각하시나요?' },
      examples: [
        {idx: 'a', label: '성상의 특장점 (40. 80mg에 분할선 추가, 작은 약제 크기)'},
        {idx: 'b', label: '인습성 개선 으로 편리한 조제 및 높은 복약순응도 향상 기대'},
        {idx: 'c', label: '20mg, 40mg, 80mg 세 가지 용량으로 다양한 용량옵션 처방 가능'},
        {idx: 'd', label: '신뢰할 수 있는 회사 제품'},
        {idx: 'e', label: '기타'},
      ],
    },
    q9: {
      part: { num: '2-2-1', q: '텔미트렌 20mg을 처방하시지 않은 이유는 무엇인가요?' },
      examples: [
        {idx: 'a', label: '텔미트렌 20mg에 대해 들어본 적이 없어서'},
        {idx: 'b', label: '20mg과 같은 저용량 제제 처방의 필요성을 못 느껴서'},
        {idx: 'c', label: '어떤 환자에게 처방하면 좋을지 판단하기 곤란해서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q10: {
      part: { num: '2-2-2', q: '향후 텔미트렌 20mg을 처방하실 의향이 있으신가요?' },
      examples: [
        {idx: 'a', label: '있다'},
        {idx: 'b', label: '없다'},
        {idx: 'c', label: '잘 모르겠다'},
      ],
    },
  },
  202109: {
    q1: {
      part: { num: '1', q: '다음은 종근당 텔미트렌의 특장점에 대한 메시지입니다. 이 중 선생님께서 들어보신 경험이 있는 것을 모두 골라주세요.' },
      examples: [
        {idx: 'a', label: '종근당 텔미트렌은 20mg, 40mg, 80mg 세 가지 용량으로 보다 많은<br> 환자군에 다양한 용량 Option을 제공합니다.'},
        {idx: 'b', label: '종근당 텔미트렌은 Telmsartan 성분으로 혈압변동성 지표인<br> Smoothness Index에서 우수한 개선 효과를 보입니다.<sup>2)</sup>'},
        {idx: 'c', label: '종근당 텔미트렌은 Telmisartan 성분 기반, PPAR-γ partial agonist<br>로서 대사장애 동반 고혈압 환자의 치료 약물로 고려될 수 있습니다.<sup>3)</sup>'},
        {idx: 'd', label: '종근당 텔미트렌은 전 용량 인습성을 개선하여 병포장을<br> 출시하였습니다.<sup>4)</sup>'},
        {idx: 'e', label: '종근당 텔미트렌은 약제 크기 축소 및 분할선 추가 등 제형 개선을<br> 통해 환자의 복약순응도 개선에 도움을 줄 수 있습니다.'}
      ],
    },
    q2: {
      part: { num: 1_2, q: '다음 종근당 텔미트렌의 특장점에 대한 메시지 중 선생님께서 텔미트렌 처방을 고려하실 때 가장 중요하다고 생각하시는 메시지는 무엇입니까?'},
      examples: [
        {idx: 'a', label: '종근당 텔미트렌은 20mg, 40mg, 80mg 세 가지 용량으로 보다 많은<br> 환자군에 다양한 용량 Option을 제공합니다.'},
        {idx: 'b', label: '종근당 텔미트렌은 Telmsartan 성분으로 혈압변동성 지표인<br> Smoothness Index에서 우수한 개선 효과를 보입니다.<sup>2)</sup>'},
        {idx: 'c', label: '종근당 텔미트렌은 Telmisartan 성분 기반, PPAR-γ partial agonist<br>로서 대사장애 동반 고혈압 환자의 치료 약물로 고려될 수 있습니다.<sup>3)</sup>'},
        {idx: 'd', label: '종근당 텔미트렌은 전 용량 인습성을 개선하여 병포장을<br> 출시하였습니다.<sup>4)</sup>'},
        {idx: 'e', label: '종근당 텔미트렌은 약제 크기 축소 및 분할선 추가 등 제형 개선을<br> 통해 환자의 복약순응도 개선에 도움을 줄 수 있습니다.'}
      ],
    },
    q3: {
      part: { num: 1_3, q: '다음 종근당 텔미트렌의 특장점에 대한 메시지 중 선생님께서 텔미트렌 처방을 고려하실 때 가장 중요하지 않다고 생각하시는 메시지는 무엇입니까?'},
      examples: [
        {idx: 'a', label: '종근당 텔미트렌은 20mg, 40mg, 80mg 세 가지 용량으로 보다 많은<br> 환자군에 다양한 용량 Option을 제공합니다.'},
        {idx: 'b', label: '종근당 텔미트렌은 Telmsartan 성분으로 혈압변동성 지표인<br> Smoothness Index에서 우수한 개선 효과를 보입니다.<sup>2)</sup>'},
        {idx: 'c', label: '종근당 텔미트렌은 Telmisartan 성분 기반, PPAR-γ partial agonist<br>로서 대사장애 동반 고혈압 환자의 치료 약물로 고려될 수 있습니다.<sup>3)</sup>'},
        {idx: 'd', label: '종근당 텔미트렌은 전 용량 인습성을 개선하여 병포장을<br> 출시하였습니다.<sup>4)</sup>'},
        {idx: 'e', label: '종근당 텔미트렌은 약제 크기 축소 및 분할선 추가 등 제형 개선을<br> 통해 환자의 복약순응도 개선에 도움을 줄 수 있습니다.'}
      ],
    },
    q4: {
      part: { num: '2', q: '선생님께서는 텔미트렌 20mg을 처방해보신 경험이 있으신지요?' },
      examples: [
        {idx: 'a', next: 'q5', label: '있다'},
        {idx: 'b', next: 'q9', label: '없다'}
      ],
    },
    q5: {
      part: { num: '2-1-1', q: '텔미트렌 20mg을 어떤 환자에게 처방하셨나요?' },
      examples: [
        {idx: 'a', label: '고혈압 초진환자'},
        {idx: 'b', next: 'q6', label: '기존 ARB 복용 환자'},
        {idx: 'c', label: '타 계열 고혈압제 복용 환자'},
        {idx: 'd', label: '동반질환 (당뇨, 이상지질혈증 등) 보유환자'},
        {idx: 'e', label: '기타'},
      ],
    },
    q6: {
      part: { num: '2-1-2', q: '텔미트렌 20mg은 어떤 ARB 제제를 대신하여 처방하셨나요?' },
      examples: [
        {idx: 'a', label: 'Losartan'},
        {idx: 'b', label: 'Fimasartan'},
        {idx: 'c', label: 'Telmisartan (40, 80mg)'},
        {idx: 'd', label: 'Valsartan'},
        {idx: 'e', label: 'Olmesartan'},
        {idx: 'f', label: 'Candesartan'},
        {idx: 'g', label: 'Azilsartan'},
        {idx: 'h', label: '기타'},
      ],
    },
    q7: {
      part: { num: '2-1-3', q: '텔미트렌 20mg의 혈압 강하 효과에 대해 어떻게 생각하시나요? ' },
      examples: [
        {idx: 'a', label: '매우 충분하다'},
        {idx: 'b', label: '충분하다'},
        {idx: 'c', label: '보통이다'},
        {idx: 'd', label: '부족하다'},
        {idx: 'e', label: '매우 부족하다'},
      ],
    },
    q8: {
      part: { num: '2-1-4', q: '기존 텔미사르탄 제제와 비교해서 종근당 텔미트렌의 장점은 무엇이라고 생각하시나요?' },
      examples: [
        {idx: 'a', label: '성상의 특장점 (40. 80mg에 분할선 추가, 작은 약제 크기)'},
        {idx: 'b', label: '인습성 개선 으로 편리한 조제 및 높은 복약순응도 향상 기대'},
        {idx: 'c', label: '20mg, 40mg, 80mg 세 가지 용량으로 다양한 용량옵션 처방 가능'},
        {idx: 'd', label: '신뢰할 수 있는 회사 제품'},
        {idx: 'e', label: '기타'},
      ],
    },
    q9: {
      part: { num: '2-2-1', q: '텔미트렌 20mg을 처방하시지 않은 이유는 무엇인가요?' },
      examples: [
        {idx: 'a', label: '텔미트렌 20mg에 대해 들어본 적이 없어서'},
        {idx: 'b', label: '20mg과 같은 저용량 제제 처방의 필요성을 못 느껴서'},
        {idx: 'c', label: '어떤 환자에게 처방하면 좋을지 판단하기 곤란해서'},
        {idx: 'd', label: '기타'},
      ],
    },
    q10: {
      part: { num: '2-2-2', q: '향후 텔미트렌 20mg을 처방하실 의향이 있으신가요?' },
      examples: [
        {idx: 'a', label: '있다'},
        {idx: 'b', label: '없다'},
        {idx: 'c', label: '잘 모르겠다'},
      ],
    },
  },
}
