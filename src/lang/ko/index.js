import howItWorks from './HowItWorks.html';
import vision from './Vision.html';
import termsOfService from './TermsOfService.html';
import termsAndConditions from './TermsAndConditions.html';
import investmentFundInfo from './InvestmentFundInfo.html';

export default {
  howItWorks,
  vision,
  termsOfService,
  termsAndConditions,
  investmentFundInfo,
  notFound: '죄송합니다, 페이지 찾기에 실패하였습니다. 다시 시도하여 주십시오.',
  general: {
    back: '뒤로',
    email: '이메일',
    cancel: '취소',
    create: '만들기',
    send: '보내기',
    save: '저장',
    created: '생성완료',
    enable: '활성화',
    disable: '비활성화',
    password: '비밀번호',
    reset: '재설정',
    deposit: '입금',
    withdraw: '출금',
    submit: '제출하기',
    generate: '생성하기',
    subscribe: '가입',
    redeem: '해지',
    amount: '금액',
    transactionId: '트랜잭션 아이디',
    userId: '회원 아이디',
    name: '이름',
    currency: '통화',
    description: '설명',
    actions: '구분',
    subscriptions: '가입',
    redemptions: '해지',
    register: '아이디 만들기',
    login: '로그인',
    all: '전체',
    performance: '실적',
    ok: '확인',
    available: '가능',
    fees: '수수료',
    status: '현재 상태',
  },
  fields: {
    name: '이름',
    address: '주소',
    username: '아이디',
    password: '비밀번호',
    identifier: '아이디 또는 이메일',
    email: '이메일',
    message: '메세지',
    amount: '금액',
    percent: '퍼센트',
    referralCode: '추천인 코드',
    twoFa: 'otp 인증번호'
  },
  statuses: {
    pendingEmailVerification: '이메일 인증 대기중',
    pending: '대기중',
    canceled: '취소되었습니다',
    declined: '거절되었습니다.',
    approved: '확인되었습니다.'
  },
  verifications: {
    unverified: '미인증',
  },
  success: {
    passwordReset: '암호 재설정 이메일이 전송되었습니다.',
    activationResent: '인증 이메일이 다시 전송되었습니다. 문제가 있을시 고객센터로 문의 주십시오.',
    activation: '인증성공! 다음페이지로 이동중...',
    passwordChanged: '비밀 번호 재설정이 완료 되었습니다!',
    registration: '가입해 주셔서 감사합니다. 이메일을 확인하시고 계정 활성화 링크를 클릭해주세요.',
  },
  error: {
    general: '오류가 발생하였습니다.',
    generalExtended: '오류가 발생하였습니다. 오류가 지속될시 고객센터로 문의 주십시오.',
    credentials: '잘못된 정보가 입력되었습니다. 확인하시고 재입력 부탁드립니다.',
    inactiveAccount: '계정을 활성화시키십시오. 이메일을 확인하시고 계정 활성화 링크를 클릭해주세요. 받지 못하셨으면 아래 재발송하기를 눌러주세요',
    invalidActivationToken: '정보가 잘못 입력되었습니다. 다른화면으로 이동중..',
  },
  activation: {
    progress: '현재 {resourceName} 을 활성화 중입니다, 잠시만 기다려주십시오.',
  },
  homepage: {
    title: '세계 최초 암호화폐 투자 펀드 상품 전문 플랫폼',
    subTitle: `전문 암호화폐 펀드 매니저들이 관리하여 안전한 투자 솔루션이 출시되었습니다.  이 솔루션은 기존 암호화폐 투자자 및 신규 투자자들이 시장의 변동성에 상관없이 최소한의 리스크로 디지털 자산을 투자하여 수익을 극대화할 수 있도록 지원합니다`,
    howItWorksButton: '투자 방법',
    getStartedButton: '시작하기',
    topPerformingFundsTitle: '최고의 성적을 내고 있는 투자 펀드들',
    viewButton: '보기',
    viewAllButton: '전체 보기',
    ourMissionTitle: '경영 목표',
    ourMissionDescription: `전문 펀드 매니저들이 시장을 지속적으로 관찰하고 연구하여 안전한 환경속에서 저희 고객에게 투자 서비스 및 상품을 제공함과 동시에 이익을 극대화하며 리스크를 관리할 수 있도록 도움을 주는 것이 저희들의 목표입니다`,
    howItWorksTitle: '시작순서',
    createAnAccount: '회원 가입',
    fundYourAccount: '입금하기',
    startInvesting: '투자 시작',
    portfolioSectionTitle: '디지털 화폐 자산 운용 투자상품에 투자하세요',
    manageRiskTitle: '리스크 관리',
    manageRiskDescription:  '리스크 단계별 다양한 투자 펀드 중에서 선택할 수 있습니다.',
    managePortfolioTitle: '자산 운용 투자 관리',
    managePortfolioDescription: '고수익 펀드에 전략적으로 자산을 분산 투자하여 이익을 극대화할 수 있습니다.',
    referralIncentivesTitle: '추천인 소개 인센티브',
    referralIncentivesDescription: '추천인 프로그램에 참여하시려면 다른 투자자들에게 사이트를 소개하세요.',
    subscriptionTitle: '이메일 구독하기',
    emailPlaceholder: '본인의 이메일을 입력하세요',
    subscriptionThanks: '구독해주셔서 감사합니다!',
  },
  navbar: {
    investmentFunds: '투자 펀드 목록',
    portfolio: '자산 운용 관리',
    deposit: '입금',
    withdraw: '출금',
    contact: '연락처',
    login: '로그인',
    register: '가입하기',
    account: '계정',
    logout: '로그아웃',
  },
  footer: {
    products: '제공 서비스',
    investmentFunds: '투자 펀드',
    exchange: '거래소 (곧 출시예정)',
    otc: '장외거래',
    learn: '정보',
    cryptoMarketReports: '암호화폐 시장 리포트',
    company: '회사',
    managerApplication: '펀드 매니저 신청',
    vision: '비전',
    termsAndConditions: '약관 및 조건',
    termsOfService: '서비스 약관',
    contact: '연락처',
    social: 'SNS',
    copyright: 'Copyright © sentriex.com 2018 | All right reserved',
  },
  account: {
    twoFaWarning: '지금 바로 2단계 보안 설정을 통해 계정의 보안을 강화 시키세요',
    accountInfoTitle: '회원 정보',
    security: '보안',
    twoFactorAuthentication: 'OTP',
    referralTitle: '추천인',
    yourReferralLink: '추천인 링크',
  },
  balances: {
    title: '보유 잔고',
    zeroBalances: '미보유 자산 목록 보기',
    showZero: '모든 자산 리스트 보기',
    hideZero: '보유 자산만 보기',
  },
  contact: {
    otcInstructions: '장외거래를 위한 정보를 아래에 상세히 입력후 제출해 주십시오.',
    instructions: '질문 혹은 건의 사항이 있으시면 언제든 이메일로 보내주세요. 최대한 빠르게 답변을 보내 드리겠습니다.',
    messageReceived: '메세지를 받았습니다. 최대한 빠른 답변 드리겠습니다.',
    namePlaceholder: '성함',
    emailPlaceholder: '이메일',
    otcRequest: '장외거래',
    otcRequestPlaceholder: '장외거래 신청 조건',
    messagePlaceholder: '메세지를 입력해주세요',
    supportEmail: 'supportKR@sentriex.com',
  },
  deposits: {
    title: '입금',
    noneYet: '입금내역이 없습니다.',
    yourAddress: '고객님의 {currency} 입금 주소',
    depositWarning: '보내시는 통화가 {currencyCode} 이(가) 맞는지 확인해주십시오. 오입금시 환불받기 어려우실 수 있습니다.',
    generationError: '주소 받기에 실패하였습니다. 고객센터로 문의 해주시기 바랍니다.',
    noAddressWarning: '{currency} 의 입금 주소를 발급 받으세요.',
  },
  twoFa: {
    codePlaceholder: 'OTP 코드',
    invalidCode: '잘못된 OTP코드',
    disableTitle: 'OTP 비활성화',
    disableWarning: 'OTP활성화는 고객님 계정 보안의 매우 중요한 역할을 합니다.',
    enableTitle: 'OTP 활성화',
    qrScanInstructions: 'QR코드가 지원되는 핸드폰에서 코드를 스캔 해주세요.',
    pleaseKeepSafe: '예비 암호코드를 OTP 재설정을 위해 안전하게 보관해주십시오.',
  },
  managerApplication: {
    title: '펀드 매니저 신청서',
    received: '신청서를 받았습니다. 최대한 빠르게 답변드리겠습니다.',
    twitterPlaceholder: '트위터 계정',
    discordPlaceholder: '디스코드 계정',
    telegramPlaceholder: '텔레그램 계정',
    phonePlaceholder: '전화 번호',
    messagePlaceholder: '투자 경험, 투자 시장, 거래 액수, 수익률 등을 적어주세요. 연락 받으실 방법과 시간을 알려주세요.',
  },
  funds: {
    summaryTitle: '펀드명',
    managerTitle: '매니저',
    delayDays: '상환 지연{delay} 일',
    manager: '펀드매니저',
    viewFunds: '투자펀드 보기',
    percentOfProfit: '% 수익',
  },
  requests: {
    none: '보여주기 요청없음',
    daysToWait: '대기 기간 {daysToWait} 일',
  },
  login: {
    title: '로그인',
    needAccount: '가입하기',
    usernamePlaceholder: '아이디 또는 이메일',
    passwordPlaceholder: '비밀번호',
    confirmPasswordPlaceholder: '비밀번호확인',
    forgotPassword: '비밀번호 재설정하기',
  },
  reset: {
    title: '비밀번호 재설정',
    newPasswordPlaceholder: '새로운 비밀번호',
    newPasswordConfirmationPlaceholder: '새로운 비밀번호 재입력',
    forgotPasswordTitle: '비밀번호 재설정하기',
    emailPlaceholder: '이메일 주소',
  },
  portfolio: {
    investments: '투자',
    individualInvestments: '펀드별 보기',
    currencyTotals: '통화별 보기',
    initialInvestment: '시작 금액',
    fundName: '펀드명',
    currentValue: '현재가치',
    totalInitial: '최초 금액',
    totalValue: '총 가치',
    totalProfit: '총 수익',
    profitPercent: '수익률',
    noActiveSubs: '현재 펀드가 가입 되어 있지 않습니다.',
    displayTypes: {
      individual: '개별보기',
      totals: '통화 전체보기'
    }
  },
  redeem: {
    invested: '현재 {performance} 수익중',
    noFundBalance: '투자펀드에 가입되어있지 않습니다.',
    currencyValue: '{currency} 가치',
    percentValue: '% 퍼센테이지 가치',
    warning: '상환 금액은 펀드가 상환될때 변동 금액에따라 변동 될 수 있습니다. 퍼센테이지를 활용하여 원하는 금액을 상환 받을 수 있도록 설정해주십시오.',
    submit: '상환 요청하기',
  },
  referrals: {
    referral: '추천인',
    paymentTotal: '총 지급금액',
    paymentsTitle: '추천인 수익',
    historical: '날짜별',
    userTotals: '사용자별',
    currencyTotals: '통화별',
    displayTypes: {
      user: '유저로 보기',
      history: '날짜로 보기',
      currency: '통화로 보기'
    },
    noPayments: '아직까지 추천인이 없습니다. 추천인코드 사용방법 페이지를 확인해주십시오.',
  },
  register: {
    title: '가입하기',
    registeredAlready: '이미 가입되어있는 회원이신가요?',
    activatedAlready: '이미 활성화가 되어있으신가요?',
    emailPlaceholder: '이메일 주소',
    usernamePlaceholder: '아이디',
    passwordPlaceholder: '비밀번호',
    confirmPasswordPlaceholder: '비밀번호 확인',
    referralCodePlaceholder: '추천인 코드',
    usernameAvailability: '이 아이디는 사용이 불가능 합니다.',
    passwordStrength: '비밀번호는 1개이상의 대문자, 1개이상의 소문자, 1개의 숫자, 1개의 특수문자가 포함되야합니다.',
  },
  subscription: {
    title: '투자 펀드 가입',
    balance: '총 잔고 금액 {balance}',
    submit: '펀드 가입 신청서 제출하기',
  },
  withdrawals: {
    addressPlaceholder: '주소',
    historyTitle: '출금 기록',
    noWithdrawals: '출금 기록이 없습니다.',
    balance: '총 잔고 금액 {balance}',
    afterBalance: '출금 후 남은 잔고 {balance}',
    doubleCheckAddress: '입력된 주소가 {currency} 주소가 맞는지 다시 한번 확인해주십시오.',
    pendingEmailVerification: '보안상의 이유로 출금 확인 이메일이 전송되었습니다.',
  },
};
