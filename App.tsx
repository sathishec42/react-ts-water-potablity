import * as React from 'react';
import './style.css';

const Data = [
  {
    ph: null,
    Hardness: 204.8904555,
    Solids: 20791.31898,
    Chloramines: 7.300211873,
    Sulfate: 368.5164413,
    Conductivity: 564.3086542,
    Organic_carbon: 10.37978308,
    Trihalomethanes: 86.99097046,
    Turbidity: 2.963135381,
    Potability: 0,
  },
  {
    ph: 3.716080075,
    Hardness: 129.4229205,
    Solids: 18630.05786,
    Chloramines: 6.635245884,
    Sulfate: null,
    Conductivity: 592.8853591,
    Organic_carbon: 15.18001312,
    Trihalomethanes: 56.32907628,
    Turbidity: 4.500656275,
    Potability: 0,
  },
  {
    ph: 5.126762923,
    Hardness: 230.6037575,
    Solids: 11983.86938,
    Chloramines: 6.303356534,
    Sulfate: null,
    Conductivity: 402.8831131,
    Organic_carbon: 11.16894622,
    Trihalomethanes: 77.4882131,
    Turbidity: 4.708658468,
    Potability: 1,
  },
  {
    ph: 7.874671358,
    Hardness: 195.1022986,
    Solids: 17404.17706,
    Chloramines: 7.509305857,
    Sulfate: null,
    Conductivity: 327.4597605,
    Organic_carbon: 16.14036763,
    Trihalomethanes: 78.69844633,
    Turbidity: 2.309149057,
    Potability: 1,
  },
];
export default function App() {
  let [values, setValues] = React.useState({
    ph: 7.874671358,
    Hardness: 195.1022986,
    Solids: 17404.17706,
    Chloramines: 7.509305857,
    Sulfate: null,
    Conductivity: 327.4597605,
    Organic_carbon: 16.14036763,
    Trihalomethanes: 78.69844633,
    Turbidity: 2.309149057,
    Potability: 1,
  });
  let [potablity, setPotablity] = React.useState(false);

  let onchangetext = (key, value) => {
    setValues({ ...values, [key]: value == '' ? null : value });
    validatePotablity();
  };

  let validatePotablity = () => {
    let flag = false;
    Data.forEach((obj, i) => {
      flag =
        obj.ph == values.ph &&
        obj.Hardness == values.Hardness &&
        obj.Solids == values.Solids &&
        obj.Chloramines == values.Chloramines &&
        obj.Sulfate == values.Sulfate &&
        obj.Conductivity == values.Conductivity &&
        obj.Organic_carbon == values.Organic_carbon &&
        obj.Trihalomethanes == values.Trihalomethanes &&
        obj.Turbidity == values.Turbidity;
    });
    setPotablity(flag);
  };

  return (
    <div>
      <h1>Water potablity</h1>
      "ph":{' '}
      <input
        placeholder="ph"
        value={values.ph}
        onChange={(e) => {
          onchangetext('ph', e.target.value);
        }}
      />
      <br />
      "Hardness":
      <input
        placeholder="Hardness"
        value={values.Hardness}
        onChange={(e) => {
          onchangetext('Hardness', e.target.value);
        }}
      />
      <br />
      "Solids":{' '}
      <input
        placeholder="Solids"
        value={values.Solids}
        onChange={(e) => {
          onchangetext('Solids', e.target.value);
        }}
      />
      <br />
      "Chloramines":{' '}
      <input
        placeholder="Chloramines"
        value={values.Chloramines}
        onChange={(e) => {
          onchangetext('Chloramines', e.target.value);
        }}
      />
      <br />
      "Sulfate":{' '}
      <input
        placeholder="Sulfate"
        value={values.Sulfate}
        onChange={(e) => {
          onchangetext('Sulfate', e.target.value);
        }}
      />
      <br />
      "Conductivity":{' '}
      <input
        placeholder="Conductivity"
        value={values.Conductivity}
        onChange={(e) => {
          onchangetext('Conductivity', e.target.value);
        }}
      />
      <br />
      "Organic_carbon":
      <input
        placeholder="Organic_carbon"
        value={values.Organic_carbon}
        onChange={(e) => {
          onchangetext('Organic_carbon', e.target.value);
        }}
      />
      <br />
      "Trihalomethanes":{' '}
      <input
        placeholder="Trihalomethanes"
        value={values.Trihalomethanes}
        onChange={(e) => {
          onchangetext('Trihalomethanes', e.target.value);
        }}
      />
      <br />
      "Turbidity":{' '}
      <input
        placeholder="Turbidity"
        value={values.Turbidity}
        onChange={(e) => {
          onchangetext('Turbidity', e.target.value);
        }}
      />
      <br />
      ------------------------------------------------------
      <button>Default</button>
      "Potability": {potablity.toString()}
    </div>
  );
}
