import React from 'react'
import Radio from '../Radio/Radio';

const DistanceInput = ({label, handel, value, index}) => {
  return (
        <div className="account-page__input-block">
            <p>{label}</p>
            <input
                placeholder="Выберите расстояние от отеля"
                value={value}
                onChange={() => handel(value)}
                type="text"
                className="account-page__input-with-radio"
                id={"dist" + index}
                name={"dist" + index}
                required
            />
            <form className="account-page__radios">
                <Radio
                labelText="менее 50 м"
                inputId="min50"
                inputName={"dist" + index}
                inputValue="менее 50 м"
                changeFunction={handel}
                clickFunction={() => console.log(index)}
                />
                <Radio
                labelText="100 м"
                inputId="100m"
                inputName={"dist" + index}
                inputValue="100 м"
                changeFunction={handel}
                />
                <Radio
                labelText="200 м"
                inputId="200m"
                inputName={"dist" + index}
                inputValue="200 м"
                changeFunction={handel}
                />
                <Radio
                labelText="300 м"
                inputId="300m"
                inputName={"dist" + index}
                inputValue="300 м"
                changeFunction={handel}
                />
                <Radio
                labelText="400 м"
                inputId="400m"
                inputName={"dist" + index}
                inputValue="400 м"
                changeFunction={handel}
                />
                <Radio
                labelText="500 м"
                inputId="500m"
                inputName={"dist" + index}
                inputValue="500 м"
                changeFunction={handel}
                />
                <Radio
                labelText="600 м"
                inputId="600m"
                inputName={"dist" + index}
                inputValue="600 м"
                changeFunction={handel}
                />
                <Radio
                labelText="700 м"
                inputId="700m"
                inputName={"dist" + index}
                inputValue="700 м"
                changeFunction={handel}
                />
                <Radio
                labelText="800 м"
                inputId="800m"
                inputName={"dist" + index}
                inputValue="800 м"
                changeFunction={handel}
                />
                <Radio
                labelText="900 м"
                inputId="900m"
                inputName={"dist" + index}
                inputValue="900 м"
                changeFunction={handel}
                />
                <Radio
                labelText="1км"
                inputId="1km"
                inputName={"dist" + index}
                inputValue="1км"
                changeFunction={handel}
                />
                <Radio
                labelText="1,5км"
                inputId="1,5km"
                inputName={"dist" + index}
                inputValue="1,5км"
                changeFunction={handel}
                />
                <Radio
                labelText="2км"
                inputId="2km"
                inputName={"dist" + index}
                inputValue="2км"
                changeFunction={handel}
                />
                <Radio
                labelText="3км"
                inputId="3km"
                inputName={"dist" + index}
                inputValue="3км"
                changeFunction={handel}
                />
                <Radio
                labelText="4км"
                inputId="4km"
                inputName={"dist" + index}
                inputValue="4км"
                changeFunction={handel}
                />
                <Radio
                labelText="4км"
                inputId="4km"
                inputName={"dist" + index}
                inputValue="4км"
                changeFunction={handel}
                />
                <Radio
                labelText="5км"
                inputId="5km"
                inputName={"dist" + index}
                inputValue="5км"
                changeFunction={handel}
                />
                <Radio
                labelText="6км"
                inputId="6km"
                inputName={"dist" + index}
                inputValue="6км"
                changeFunction={handel}
                />
                <Radio
                labelText="7км"
                inputId="7km"
                inputName={"dist" + index}
                inputValue="7км"
                changeFunction={handel}
                />
                <Radio
                labelText="8км"
                inputId="8km"
                inputName={"dist" + index}
                inputValue="8км"
                changeFunction={handel}
                />
                <Radio
                labelText="9км"
                inputId="9km"
                inputName={"dist" + index}
                inputValue="9км"
                changeFunction={handel}
                />
                <Radio
                labelText="10км"
                inputId="10km"
                inputName={"dist" + index}
                inputValue="10км"
                changeFunction={handel}
                />
            </form>
        </div>
  )
}
export default React.memo(DistanceInput)