<template>
  <div>
    <div class="header-flex">
      <h4 class="text-primary mb-4">
        {{ $t('balances.title') }}
      </h4>
      <b-dropdown id="zero-balances"
                  variant="outline-primary"
                  size="sm"
                  :text="`${$t('balances.zeroBalances')}:${hideZero ? '\u2717' : '\u2713'}`"
                  class="mb-2">
        <b-dropdown-item @click="hideZero = !hideZero" class="no-uppercase">
          {{ hideZero ? $t('balances.showZero') : $t('balances.hideZero') }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <requires-async-state :actions="actionDependencies">
      <b-table :fields="balanceFields"
               :items="formattedBalances"
               stacked="sm"
               :current-page="currentPage"
               :per-page="perPage">
        <template slot="currencyCode" slot-scope="row">
          <img :src="icons[row.item.currencyCode]"
               class="mb-1 currency-icon"
               v-if="icons[row.item.currencyCode]">
          {{ row.item.currencyCode }}
        </template>
        <template slot="actions" slot-scope="row">
          <b-btn :to="`/withdrawals/${row.item.currencyCode}`"
                  variant="outline-primary"
                  size="sm"
                  class="mr-2">
            {{ $t('general.withdraw') }}
          </b-btn>
          <b-btn :to="`/deposits/${row.item.currencyCode}`"
                  variant="outline-primary"
                  size="sm">
            {{ $t('general.deposit') }}
          </b-btn>
        </template>
      </b-table>
      <div class="row" v-if="formattedBalances.length > perPage">
        <div class="col-md-6 my-1">
          <b-pagination :total-rows="formattedBalances.length"
                        :per-page="perPage"
                        v-model="currentPage"
                        class="my-0"/>
        </div>
      </div>
    </requires-async-state>
  </div>
</template>
<script>
import RequiresAsyncState from '@/components/RequiresAsyncState.vue';
import { mapGetters } from 'vuex';
import pickBy from 'lodash.pickby';
import icons from '@/assets/images/currencies/index';

export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      hideZero: false,
    };
  },
  components: {
    RequiresAsyncState,
  },
  computed: {
    actionDependencies() {
      return ['fetchBalances', 'fetchCurrencies'];
    },
    balanceFields() {
      return {
        currencyCode: {
          label: this.$t('general.currency'),
        },
        amount: {
          label: this.$t('general.available'),
        },
        actions: {
          label: this.$t('general.actions'),
        },
      };
    },
    icons() {
      return icons;
    },
    ...mapGetters(['balances', 'currencies']),
    formattedBalances() {
      return Object.values(this.filteredBalances).map(this.formatBalance);
    },
    filteredBalances() {
      return pickBy(this.balances, balance => !this.hideZero || parseFloat(balance.amount) > 0);
    },
  },
  methods: {
    formatBalance(balance) {
      const currency = this.currencies[balance.currencyCode];
      return currency && {
        ...balance,
        amount: currency.format(balance.amount),
        inFunds: currency.format(balance.inFunds),
        total: currency.format(balance.total),
      };
    },
    hasIcon(code) {
      const currency = this.currencies[code];
      return currency && currency.icon;
    },
    iconPath(code) {
      const currency = this.currencies[code];
      return currency && currency.icon;
    },
  },
};
</script>
<style scoped>
.currency-icon {
  max-width:20px;
  max-height: 20px;
}
</style>
