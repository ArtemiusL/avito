import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { reduxForm, Field } from 'redux-form';
import RadioButtonGroup from '_components/RadioButtonGroup';
import InputRange from '_components/InputRange';
import InputCheckbox from '_components/InputCheckbox';

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
    const { initialize, test } = this.props;
    initialize(test);
  }
  render() {
    const { className, handleSubmit } = this.props;
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
          >
            <option value="all">Все объявления</option>
            <option value="auto">Авто</option>
            <option value="immovable">Недвижимость</option>
            <option value="laptops">Ноутбуки</option>
            <option value="cameras">Фотоаппараты</option>
          </Field>
        </fieldset>

        <fieldset styleName="group">
          Сначала:
          <Field
            styleName="field"
            name="sort"
            list={fishRadio}
            component={RadioButtonGroup}
          />
        </fieldset>

        <fieldset styleName="group">
          Максимальная цена:
          <br />
          <span>1000 </span>
          <Field
            styleName="field"
            name="price"
            min={1000}
            max={5000}
            component={InputRange}
          />
          <span> 5000</span>
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
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  test: PropTypes.object,
};

export default reduxForm({
  form: 'search',
  destroyOnUnmount: false,
})(Form);
