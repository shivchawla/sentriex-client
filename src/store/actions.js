import Currency from '@/models/currency';
import * as types from './mutation_types';
import * as api from '@/api';
import { loadLanguageAsync } from '@/setup/i18n-setup'; 
import uniq from 'lodash.uniq';

export default {
  async fetchAccount(store) {
    const response = await api.fetchAccount();
    store.commit(types.SET_ACCOUNT, response.data);
  },
  async fetchCurrencies(store, config = {}) {
    if (!store.state.currencies || config.refresh) {
      const response = await api.fetchCurrencies();
      const currencies = {};
      Object.keys(response.data.currencies).forEach((code) => {
        currencies[code] = new Currency(response.data.currencies[code]);
      });
      store.commit(types.SET_CURRENCIES, currencies);
    }
  },
  async fetchBalances(store) {
    const response = await api.fetchBalances();
    store.commit(types.SET_BALANCES, response.data.balances);
  },
  async fetchInvestmentFunds(store, config = {}) {
    if (!store.state.investmentFunds || config.refresh) {
      const response = await api.fetchInvestmentFunds();
      store.commit(types.SET_INVESTMENT_FUNDS, response.data.investmentFunds);
      store.commit(types.SET_INVESTMENT_FUND_SETTINGS, response.data.investmentFundSettings);
    }
  },
  async fetchInvestmentFundShares(store) {
    const response = await api.fetchInvestmentFundShares();
    store.commit(types.SET_INVESTMENT_FUND_SHARES, response.data.investmentFundShares);
  },
  async fetchInvestmentBalanceUpdates(store, id) {
    const response = await api.fetchInvestmentBalanceUpdates(id);
    const { balanceUpdates } = response.data;
    store.commit(types.SET_INVESTMENT_FUND_BALANCE_UPDATES, {
      balanceUpdates,
      id,
    });
  },
  async fetchDepositAddresses(store) {
    const response = await api.fetchDepositAddresses();
    store.commit(types.SET_DEPOSIT_ADDRESSES, response.data.depositAddresses);
  },
  async fetchDeposits(store, currencyCode) {
    const response = await api.fetchDeposits(currencyCode);
    store.commit(types.SET_DEPOSITS, {
      currencyCode,
      deposits: response.data.deposits,
    });
  },
  async fetchMyDeposits(store, currencyCode) {
    const response = await api.fetchMyDeposits(currencyCode);
    const currencies = uniq(response.data.deposits.map(d => d.currencyCode));
    currencies.forEach((c) => {
      store.commit(types.SET_DEPOSITS, {
        currencyCode: c,
        deposits: response.data.deposits.filter(d => d.currencyCode === c),
      });
    });
  },
  async fetchWithdrawals(store, currencyCode) {
    const response = await api.fetchWithdrawals(currencyCode);
    store.commit(types.SET_WITHDRAWALS, {
      currencyCode,
      withdrawals: response.data.withdrawals,
    });
  },
  async fetchMyWithdrawals(store, currencyCode) {
    const response = await api.fetchMyWithdrawals(currencyCode);
    const currencies = uniq(response.data.withdrawals.map(w => w.currencyCode));
    currencies.forEach((c) => {
      store.commit(types.SET_WITHDRAWALS, {
        currencyCode: c,
        withdrawals: response.data.withdrawals.filter(w => w.currencyCode === c),
      });
    });
  },
  async fetchMyInvestmentFundRequests(store) {
    const response = await api.fetchInvestmentFundRequests();
    store.commit(types.SET_INVESTMENT_FUND_REQUESTS, response.data.requests);
  },
  async fetchUsers(store, args) {
    const response = await api.fetchUsers(args);
    store.commit(types.SET_USERS, response.data.users);
  },
  async fetchPerformance(store) {
    const response = await api.fetchPerformance();
    store.commit(types.SET_PERFORMANCE, response.data.performance);
  },
  async fetchReferralPayments(store) {
    const response = await api.fetchReferralPayments();
    store.commit(types.SET_REFERRAL_PAYMENTS, response.data.referralPayments);
  },
  async fetchTrendData(store, id) {
    const response = await api.fetchTrendData(id);
    store.commit(types.SET_INVESTMENT_FUND_TREND_DATA, {
      id,
      investmentFundTrendData: response.data.investmentFundTrendData,
    });
  },
  async setPreferredLanguage(store, lang) {
    const preferredLang = await loadLanguageAsync(lang);
    store.commit(types.SET_PREFERRED_LANGUAGE, preferredLang);
  }
};
