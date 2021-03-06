import Vue from 'vue';
import assert from 'assert';
import * as types from './mutation_types';

export default {
  [types.LOGIN](state, { CSRFToken, user, tokenExpiry }) {
    assert(CSRFToken, 'CSRF Token was not provided');
    state.tokenExpiry = tokenExpiry;
    state.user = user;
    state.authenticated = true;
    state.csrfToken = CSRFToken;
  },
  [types.LOGOUT](state) {
    state.tokenExpiry = null;
    state.authenticated = false;
    state.csrfToken = null;
    state.user = {};
  },
  [types.SET_BALANCES](state, balances) {
    Vue.set(state, 'balances', balances);
  },
  [types.SET_CURRENCIES](state, currencies) {
    Vue.set(state, 'currencies', currencies);
  },
  [types.SET_ACCOUNT](state, account) {
    Vue.set(state, 'account', account);
  },
  [types.SET_INVESTMENT_FUNDS](state, investmentFunds) {
    Vue.set(state, 'investmentFunds', investmentFunds);
  },
  [types.SET_INVESTMENT_FUND_SHARES](state, investmentFundShares) {
    Vue.set(state, 'investmentFundShares', investmentFundShares);
  },
  [types.SET_INVESTMENT_FUND_BALANCE_UPDATES](state, { id, balanceUpdates }) {
    Vue.set(state.balanceUpdates, id, balanceUpdates);
  },
  [types.SET_INVESTMENT_FUND_REQUESTS](state, requests) {
    state.investmentFundRequests = requests;
  },
  [types.SET_INVESTMENT_FUND_SETTINGS](state, settings) {
    state.investmentFundSettings = settings;
  },
  [types.SET_DEPOSIT_ADDRESSES](state, depositAddresses) {
    state.depositAddresses = depositAddresses;
  },
  [types.SET_DEPOSITS](state, { currencyCode, deposits }) {
    Vue.set(state.deposits, currencyCode, deposits);
  },
  [types.SET_WITHDRAWALS](state, { currencyCode, withdrawals }) {
    Vue.set(state.withdrawals, currencyCode, withdrawals);
  },
  [types.SET_USERS](state, users) {
    state.users = users;
  },
  [types.SET_PERFORMANCE](state, perf) {
    Vue.set(state, 'performance', perf);
  },
  [types.SET_REFERRAL_PAYMENTS](state, referralPayments) {
    Vue.set(state, 'referralPayments', referralPayments);
  },
  [types.SET_INVESTMENT_FUND_TREND_DATA](state, { id, investmentFundTrendData }) {
    Vue.set(state.investmentFundTrendData, id, investmentFundTrendData);
  },
  [types.SET_PREFERRED_LANGUAGE](state, lang) {
    state.lang = lang;
  }
};
