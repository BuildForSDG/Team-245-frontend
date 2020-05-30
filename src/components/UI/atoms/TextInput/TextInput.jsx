import React from 'react';
import { PseudoBox, FormLabel, FormErrorMessage } from '@chakra-ui/core';

const TextInput = ({ name, error, label, ...props }) => {
  return (
    <>
      <FormLabel htmlFor={name} textTransform={'capitalize'} color="primary.500">
        {name}
      </FormLabel>
      <PseudoBox
        name={name}
        placeholder="Say something..."
        as="input"
        type="text"
        ref={register}
        backgroundColor="gray.50"
        borderColor={error ? 'red.400' : 'gray.100'}
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        py="3"
        px="4"
        mt="2"
        display="block"
        width="full"
        transition="all 200ms ease-in-out"
        _focus={{
          outline: 'none',
          boxShadow: error ? 'flatError' : 'flat',
          border: '1px',
          borderColor: error ? 'red.400' : 'brand.500'
        }}
        {...props}
      />
      <FormErrorMessage></FormErrorMessage>
    </>
  );
};

TextInput.defaultProps = {
  name: 'Title',
  error: '',
  label: 'Title',
  type: 'text'
};

export default TextInput;
