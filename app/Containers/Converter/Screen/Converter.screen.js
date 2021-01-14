import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import convert from 'convert-units';

import { buttons } from '../../../Utils/Constants';
import { Styles } from '../Style/Converter.style.js';
import { formatUnitDropdown } from '../../../Utils/Helpers';
import { DropDownMenu } from '../../../Components/DropDownMenu/DropDownMenu.component';
import { InputNumberButton } from '../../../Components/InputNumberButton/InputNumberButton.component';

function ConverterScreen() {
  const [measure] = useState('mass');
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('0');
  const [unitLists] = useState(formatUnitDropdown(convert().list(measure)));
  const [firstSelected, setFirstSelected] = useState(unitLists[0].value);
  const [secondSelected, setSecondSelected] = useState(unitLists[1].value);

  const convertUnit = useRef(() => {});

  useEffect(() => {
    convertUnit.current();
  }, [input, firstSelected, secondSelected, convertUnit]);

  const onChangeFirst = (item) => setFirstSelected(item.value);
  const onChangeSecond = (item) => setSecondSelected(item.value);

  convertUnit.current = () => {
    const resultValue = convert(Number(input))
      .from(firstSelected)
      .to(secondSelected);
    const displayValue = `${parseFloat(resultValue.toFixed(7))}`;
    setResult(displayValue);
  };

  const handleInput = (val) => () => {
    switch (val) {
      case 'DEL':
        const string = input.toString();
        const deletedString = string.substr(0, string.length - 1);
        const length = string.length;
        setInput(length === 1 ? '0' : deletedString);
        break;
      case 'C':
        setInput('0');
        break;
      case 'PLUS-MINUS':
        setInput(input * -1);
        break;
      case '.':
        if (!input.includes(val)) {
          setInput(input + val);
        }
        break;
      default:
        setInput(input === '0' ? val : input + val);
        break;
    }
  };

  const renderButtons = () => {
    const layouts = buttons.map((buttonRow, index) => {
      const rowItem = buttonRow.map((buttonItem, buttonIndex) => {
        return (
          <InputNumberButton
            key={'btn-' + buttonIndex}
            value={buttonItem}
            onPress={handleInput(buttonItem)}
          />
        );
      });
      return (
        <View style={Styles.inputRow} key={'row-' + index}>
          {rowItem}
        </View>
      );
    });

    return layouts;
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.resultContainer}>
        <View style={Styles.dropdownWrapper}>
          <View style={Styles.dropDownStart}>
            <Text style={Styles.dropDownTitle}>Dari</Text>
          </View>
          <View style={Styles.dropDownEnd}>
            <DropDownMenu
              items={unitLists}
              onChangeItem={onChangeFirst}
              placeholder={unitLists[0].label}
              defaultValue={unitLists[0].value}
            />
          </View>
        </View>
        <View style={Styles.gap}>
          <Text style={Styles.firstValue}>{input}</Text>
        </View>
        <View style={Styles.dropdownWrapper}>
          <View style={Styles.dropDownStart}>
            <Text style={Styles.dropDownTitle}>Ke</Text>
          </View>
          <View style={Styles.dropDownEnd}>
            <DropDownMenu
              items={unitLists}
              onChangeItem={onChangeSecond}
              placeholder={unitLists[1].label}
              defaultValue={unitLists[1].value}
            />
          </View>
        </View>
        <View style={Styles.result}>
          <Text style={Styles.resultTitle}>Hasil</Text>
          <Text style={Styles.resultNumber}>{result}</Text>
        </View>
      </View>
      <View style={Styles.inputContainer}>{renderButtons()}</View>
    </View>
  );
}

export default ConverterScreen;
