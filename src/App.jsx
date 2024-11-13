import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [buttonValue, setButtonValue] = useState('-');

  const checkButtonValue = good => {
    if (good === selectedGood) {
      setButtonValue(prev => {
        if (prev === '-') {
          setSelectedGood('');
        }
      });
    } else {
      setButtonValue('-');
    }
  };

  const h1Text = good => {
    if (good) {
      return `${good} is selected`;
    }

    return 'No goods selected';
  };

  const brightClassGood = good => {
    return good === selectedGood ? 'has-background-success-light' : '';
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {h1Text(selectedGood)}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={`${brightClassGood(good)}`.trim()}
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${good === selectedGood ? 'is-info' : ''}`}
                  onClick={() => {
                    setSelectedGood(good);
                    // eslint-disable-next-line no-lone-blocks
                    {
                      checkButtonValue(good);
                    }
                  }}
                >
                  {good === selectedGood ? buttonValue : '+'}
                </button>
              </td>

              <td className="is-vcentered" data-cy="GoodTitle">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
