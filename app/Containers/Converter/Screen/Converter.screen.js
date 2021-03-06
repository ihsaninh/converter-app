import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import convert from 'convert-units';

import { buttons } from '../../../Utils/Datas';
import { Styles } from '../Style/Converter.style.js';
import { formatUnitDropdown } from '../../../Utils/Helpers';
import { DropDownMenu } from '../../../Components/DropDownMenu/DropDownMenu.component';
import { InputNumberButton } from '../../../Components/InputNumberButton/InputNumberButton.component';

const ConverterScreen = ({ route }) => {
  const [measureItem] = useState(route?.params?.item);
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('0');
  const [unitLists] = useState(
    formatUnitDropdown(convert().list(measureItem.key))
  );
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
        !input.includes(val) && setInput(input + val);
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
            value={buttonItem}
            key={'btn-' + buttonIndex}
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
            <Text style={Styles.dropDownTitle}>From</Text>
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
            <Text style={Styles.dropDownTitle}>To</Text>
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
          <Text style={Styles.resultTitle}>Result</Text>
          <Text style={Styles.resultNumber}>{result}</Text>
        </View>
      </View>
      <View style={Styles.inputContainer}>{renderButtons()}</View>
    </View>
  );
};

export default ConverterScreen;
