/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { reduxForm, Field } from 'redux-form';
import RadioButtonGroup from '_components/RadioButtonGroup';
import InputRange from '_components/InputRange';
import InputCheckbox from '_components/InputCheckbox';
import CategoryFilter from '_components/CategoryFilter';

import styles from './Form.scss';

const fishRadio = [
  {
    id: 1,
    title: 'популярные',
    value: 'popular',
  },
  {
    id: 2,
    title: 'дешевые',
    value: 'asc',
  },
  {
    id: 3,
    title: 'дорогие',
    value: 'desc',
  },
];


@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  componentDidMount = () => {
    const { initialize, dataForInitialize } = this.props;
    initialize(dataForInitialize);
  }
  render() {
    const {
      className,
      maxPrice,
      handleSubmit,
      category,
      dataForInitialize,
      isFirstFetchData,
      isFavoriteFilter,
    } = this.props;

    return (
      <form
        className={className}
        onSubmit={handleSubmit}
      >

        <fieldset styleName="group">
          <Field
            styleName="field"
            name="isFavorite"
            label="Показывать избранные"
            component={InputCheckbox}
          />
        </fieldset>

        <fieldset styleName="group">
          Категория <br />
          <Field
            styleName={classnames('field', 'select')}
            name="category"
            component="select"
            disabled={isFavoriteFilter}
          >
            <option value="all">Все объявления</option>
            <option value="auto">Авто</option>
            <option value="immovable">Недвижимость</option>
            <option value="laptops">Ноутбуки</option>
            <option value="cameras">Фотоаппараты</option>
          </Field>
        </fieldset>

        <CategoryFilter
          styleName="group"
          disabled={isFavoriteFilter}
          isFirstFetchData={isFirstFetchData}
          type={category || dataForInitialize.category}
        />

        <fieldset styleName="group">
          Сначала:
          <Field
            styleName="field"
            name="sort"
            list={fishRadio}
            component={RadioButtonGroup}
            disabled={isFavoriteFilter}
          />
        </fieldset>

        <fieldset styleName="group">
          Максимальная цена:
          <br />
          <Field
            styleName="field"
            name="price"
            min={1000}
            step={500}
            max={maxPrice}
            isFirstFetchData={isFirstFetchData}
            component={InputRange}
            disabled={isFavoriteFilter}
          />
        </fieldset>
        <button styleName="btnSubmit" type="submit">
          Показать
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  maxPrice: PropTypes.number,
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  dataForInitialize: PropTypes.object,
  category: PropTypes.string,
  isFirstFetchData: PropTypes.bool,
  isFavoriteFilter: PropTypes.bool,
};

export default reduxForm({
  form: 'search',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
})(Form);
