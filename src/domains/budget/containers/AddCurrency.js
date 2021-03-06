import React, {useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
/** imports from within the module */
import * as budgetActions from 'budget/state/Actions';
import * as handlers from 'budget/handlers/PrepareData';
import {CURRENCIES} from 'data/Currencies';
import Budget from 'budget/models/Budget';
import BudgetField from 'common/components/budgetField/BudgetField';
import {AddCurrencyStyles as styles} from './AddCurrencyStyle';
import Colors from 'constants/Colors';

var incorrectCurrency =
  'There is no such currency or the currency already exists in your budget.';

const AddCurrency = (props) => {
  const dispatch = useDispatch();
  const tripId = props.route.params.tripId;
  const selectedTrip = useSelector((state) =>
    state.trips.availableTrips.find((item) => item.id === tripId),
  );
  const currentBudget = selectedTrip.budget;

  const [budget, setBudget] = useState('');
  const [budgetIsValid, setBudgetIsValid] = useState(false);
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);
  const [currency, setCurrency] = useState('');
  const [currencyIsValid, setCurrencyIsValid] = useState(false);
  const [account, setAccount] = useState('card');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  /* HANDLERS */
  // handles currency validity
  const currencyChangeHandler = (text) => {
    let currencyISO =
      CURRENCIES.filter((item) => item.name === text)[0] !== undefined
        ? CURRENCIES.filter((item) => item.name === text)[0].iso
        : undefined;

    let exists = CURRENCIES.filter((item) => item.name === text).length > 0;

    let isAlreadyDeclared =
      currentBudget !== undefined
        ? currentBudget.filter((item) => item.currency === currencyISO).length >
          0
        : false;

    let validator = exists && !isAlreadyDeclared;

    validator ? setCurrencyIsValid(true) : setCurrencyIsValid(false);
    validator ? setError(null) : setError(incorrectCurrency);
    setCurrency(text);
  };

  // handle budget validity
  let budgetRegex = new RegExp('^\\d+(( \\d+)*|(,\\d+)*)(.\\d+)?$');
  const budgetChangeHandler = (text) => {
    !(!budgetRegex.test(text) || text.trim().length === 0)
      ? setBudgetIsValid(true)
      : setBudgetIsValid(false);
    setBudget(text);
  };

  // handle submition
  const submitHandler = useCallback(async () => {
    setBudgetSubmitted(true);
    if (budgetIsValid && currencyIsValid) {
      // create a new currency card using budget model
      let newCurrency = new Budget(
        new Date().toString(),
        handlers.prepareValue(budget),
        CURRENCIES.filter((item) => item.name === currency).length > 0
          ? CURRENCIES.filter(
              (item) => item.name === currency,
            )[0].iso.toString()
          : undefined,
        [
          {
            id: 0,
            title: 'Initial budget',
            value: handlers.prepareValue(budget),
            category: '',
            account: account.toString(),
            date: new Date(),
          },
        ],
        account.toString(),
      );

      let budgetToSubmit = currentBudget
        ? [...currentBudget, newCurrency]
        : [newCurrency];

      setIsLoading(true);
      try {
        await dispatch(budgetActions.updateBudget(tripId, budgetToSubmit)).then(
          () => {
            setIsLoading(false);
            props.navigation.navigate('Budget', {
              tripId: tripId,
            });
          },
        );
      } catch {
        setError('Something went wrong...');
      }
    } else if (!error) {
      setError('Something went wrong...');
    }
  }, [
    budgetIsValid,
    currencyIsValid,
    error,
    budget,
    account,
    currentBudget,
    dispatch,
    tripId,
    props.navigation,
    currency,
  ]);

  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
      <BudgetField
        label={'Enter initial value'}
        styles={styles}
        showSwitch={false}
        toggleBudgetSwitch={() => {}}
        budget={budget}
        budgetIsEnabled={true}
        budgetIsValid={budgetIsValid}
        budgetSubmitted={budgetSubmitted}
        budgetChangeHandler={budgetChangeHandler}
        currency={currency}
        currencyChangeHandler={currencyChangeHandler}
        account={account}
        setAccount={setAccount}
        error={error}
        setError={setError}
      />

      {/* SUBMIT BUTTON */}
      {isLoading ? (
        <View style={styles.smallMarginTop}>
          <ActivityIndicator color={Colors.primary} />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => submitHandler()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default AddCurrency;
