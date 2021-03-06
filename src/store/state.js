/* global localStorage */
export const STORAGE_KEY = 'durango-project';

const preferredLang = navigator && navigator.language.slice(0, 2);

const initialState = {
  lang: preferredLang || 'en',
  authenticated: false,
  user: {},
  csrfToken: '',
  balanceUpdates: {},
  depositAddresses: {},
  deposits: {},
  withdrawals: {},
  investmentFundRequests: [],
  users: [],
  performance: [],
  referralPayments: [],
  investmentFundSettings: {},
  investmentFundTrendData: {},
};

if (localStorage.getItem(STORAGE_KEY)) {
  Object.assign(initialState, JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

export default initialState;
