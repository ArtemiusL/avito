import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'redux-form';
import InputRange from '_components/InputRange';

import styles from './CategoryFilter.scss';

const currentData = new Date();

const CategoryFilter = ({ className, type, isFirstFetchData }) => {
  switch (type) {
    case 'auto':
      return (
        <fieldset className={className}>
          Минимальный год выпуска <br />
          <Field
            styleName="field"
            name="auto.year"
            min={1945}
            step={1}
            max={currentData.getFullYear()}
            component={InputRange}
            isFirstFetchData={isFirstFetchData}
          />

          <br />
          Тип каробки передач <br />
          <Field
            styleName={classnames('field', 'select')}
            name="auto.gearbox"
            component="select"
          >
            <option value="automatic">Автоматическая</option>
            <option value="manual">Механическая</option>
          </Field>

          <br />
          Тип кузова <br />
          <Field
            styleName={classnames('field', 'select')}
            name="auto.body_type"
            component="select"
          >
            <option value="sedan">Седан</option>
            <option value="universal">Универсал</option>
            <option value="hatchback">Хэтчбек</option>
            <option value="suv">Внедорожник</option>
          </Field>
        </fieldset>
      );

    case 'immovable':
      return (
        <fieldset className={className}>
          Тип<br />
          <Field
            styleName={classnames('field', 'select')}
            name="immovable.property_type"
            component="select"
          >
            <option value="house">Дом</option>
            <option value="flat">Квартира</option>
            <option value="apartment">Апартаменты</option>
          </Field>

          <br /> Минимальная площадь <br />
          <Field
            styleName="field"
            name="immovable.square"
            min={20}
            step={1}
            max={200}
            component={InputRange}
            isFirstFetchData={isFirstFetchData}
          />

          <br />
          Количество комнат<br />
          <Field
            styleName={classnames('field', 'select')}
            name="immovable.rooms"
            component="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Field>
        </fieldset>
      );

    case 'cameras':
      return (
        <fieldset className={className}>
          Тип<br />
          <Field
            styleName={classnames('field', 'select')}
            name="cameras.camera_type"
            component="select"
          >
            <option value="slr">Зеркальный</option>
            <option value="digital">Цифровой</option>
          </Field>

          <br /> Минимальное разрешение матрицы в мегапикселях <br />
          <Field
            styleName="field"
            name="cameras.matrix_resolution"
            min={1}
            step={1}
            max={30}
            component={InputRange}
            isFirstFetchData={isFirstFetchData}
          />

          <br />
          Минимальное разрешение видео<br />
          <Field
            styleName={classnames('field', 'select')}
            name="cameras.video_resolution"
            component="select"
          >
            <option value="HD">HD</option>
            <option value="Full HD">Full HD</option>
            <option value="4K">4K</option>
            <option value="5K">5K</option>
          </Field>
        </fieldset>
      );
    case 'laptops':
      return (
        <fieldset className={className}>
          Тип<br />
          <Field
            styleName={classnames('field', 'select')}
            name="laptops.laptop_type"
            component="select"
          >
            <option value="ultra">Ультрабук</option>
            <option value="home">Домашний</option>
            <option value="professional">Игровой ноутбук</option>
          </Field>

          <br /> Минимальное объем оперативной памяти
          <Field
            styleName={classnames('field', 'select')}
            name="laptops.ram"
            component="select"
          >
            <option value="4">4 ГБ</option>
            <option value="8">8 ГБ</option>
            <option value="16">16 ГБ</option>
          </Field>

          <br />
          Минимальная диагональ экрана<br />
          <Field
            styleName={classnames('field', 'select')}
            name="laptops.screen"
            component="select"
          >
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="17">17</option>
          </Field>

          <br />
          Тип процессора<br />
          <Field
            styleName={classnames('field', 'select')}
            name="laptops.processor"
            component="select"
          >
            <option value="i3">i3</option>
            <option value="i5">i5</option>
            <option value="i7">i7</option>
          </Field>
        </fieldset>
      );

    case 'all':
    default:
      return (<div />);
  }
};

CategoryFilter.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  isFirstFetchData: PropTypes.bool,
};

export default CSSModules(CategoryFilter, styles, { allowMultiple: true });
