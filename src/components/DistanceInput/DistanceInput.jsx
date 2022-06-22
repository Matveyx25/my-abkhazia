import React from 'react'
import Radio from '../Radio/Radio';

const DistanceInput = ({label, handel, value, slug, placeholder}) => {
  return (
        <div className="account-page__input-block">
            <p>{label}</p>
            <input
                placeholder={placeholder}
                value={value}
                onChange={() => handel(value)}
                type="text"
                className="account-page__input-with-radio"
                required
            />
            <form className="account-page__radios distances">
                <Radio
                labelText="менее 50 м"
                inputName={slug}
                inputId={slug + 50}
                inputValue="менее 50 м"
                changeFunction={handel}
                />
                <Radio
                labelText="100 м"
                inputName={slug}
                inputId={slug + 100}
                inputValue="100 м"
                changeFunction={handel}
                />
                <Radio
                labelText="200 м"
                inputName={slug}
                inputId={slug + 200}
                inputValue="200 м"
                changeFunction={handel}
                />
                <Radio
                labelText="300 м"
                inputName={slug}
                inputId={slug + 300}
                inputValue="300 м"
                changeFunction={handel}
                />
                <Radio
                labelText="400 м"
                inputName={slug}
                inputId={slug + 400}
                inputValue="400 м"
                changeFunction={handel}
                />
                <Radio
                labelText="500 м"
                inputName={slug}
                inputId={slug + 500}
                inputValue="500 м"
                changeFunction={handel}
                />
                <Radio
                labelText="600 м"
                inputName={slug}
                inputId={slug + 600}
                inputValue="600 м"
                changeFunction={handel}
                />
                <Radio
                labelText="700 м"
                inputName={slug}
                inputId={slug + 700}
                inputValue="700 м"
                changeFunction={handel}
                />
                <Radio
                labelText="800 м"
                inputName={slug}
                inputId={slug + 800}
                inputValue="800 м"
                changeFunction={handel}
                />
                <Radio
                labelText="900 м"
                inputName={slug}
                inputId={slug + 900}
                inputValue="900 м"
                changeFunction={handel}
                />
                <Radio
                labelText="1км"
                inputName={slug}
                inputId={slug + 1}
                inputValue="1км"
                changeFunction={handel}
                />
                <Radio
                labelText="1,5км"
                inputName={slug}
                inputId={slug + 1.5}
                inputValue="1,5км"
                changeFunction={handel}
                />
                <Radio
                labelText="2км"
                inputName={slug}
                inputId={slug + 2}
                inputValue="2км"
                changeFunction={handel}
                />
                <Radio
                labelText="3км"
                inputName={slug}
                inputId={slug + 3}
                inputValue="3км"
                changeFunction={handel}
                />
                <Radio
                labelText="4км"
                inputName={slug}
                inputId={slug + 4}
                inputValue="4км"
                changeFunction={handel}
                />
                <Radio
                labelText="5км"
                inputName={slug}
                inputId={slug + 5}
                inputValue="5км"
                changeFunction={handel}
                />
                <Radio
                labelText="6км"
                inputName={slug}
                inputId={slug + 6}
                inputValue="6км"
                changeFunction={handel}
                />
                <Radio
                labelText="7км"
                inputName={slug}
                inputId={slug + 7}
                inputValue="7км"
                changeFunction={handel}
                />
                <Radio
                labelText="8км"
                inputName={slug}
                inputId={slug + 8}
                inputValue="8км"
                changeFunction={handel}
                />
                <Radio
                labelText="9км"
                inputName={slug}
                inputId={slug + 9}
                inputValue="9км"
                changeFunction={handel}
                />
                <Radio
                labelText="10км"
                inputName={slug}
                inputId={slug + 10}
                inputValue="10км"
                changeFunction={handel}
                />
            </form>
        </div>
  )
}
export default React.memo(DistanceInput)