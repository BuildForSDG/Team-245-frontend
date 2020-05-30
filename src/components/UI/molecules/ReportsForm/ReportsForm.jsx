import React, { useReducer } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Stack,
  Text,
  Box,
  Spinner,
  Icon,
  PseudoBox
} from '@chakra-ui/core';
import Button from '<atoms>/Button/Button';
import Link from '<atoms>/Link/Link';

const fields = [
  { name: 'title', type: 'text' },
  { name: 'title', type: 'text' },
  { name: 'title', type: 'text' }
];

const INITIAL_STATE = {
  report: '',
  evidence: '',
  status: 'PENDING'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: action.value };

    case 'updateStatus':
      return { ...state, status: action.status };

    case 'reset':
    default:
      return INITIAL_STATE;
  }
};

const SuccessMessage = ({ setStatus }) => (
  <Box width="md" margin="auto">
    <PseudoBox textAlign="center" padding="8">
      <Icon
        color="primary.500"
        name="check"
        size="120px"
        margin="auto"
        padding="4"
        borderRadius="50%"
        borderColor="primary.500"
        borderWidth="2px"
        textAlign="center"
      />
    </PseudoBox>
    <Text as="h2" fontSize="2rem">
      Thanks for taking a Stand
    </Text>
    <Text as="h6" marginY="4">
      Your report is highly appreciated, We’ll start work on your report and pass them on to the proper authorities
    </Text>
    <Stack isInline>
      <Button onClick={() => setStatus('IDLE')}>Submit another report</Button>
      <Button color="primary.500" bg="white">
        <Link>Close</Link>
      </Button>
    </Stack>
  </Box>
);

const Form = () => {
  let [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setStatus = (status) => dispatch({ type: 'updateStatus', status });

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: 'updateFieldValue',
      field,
      value: event.target.value
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setStatus('LOADING');

    //Perform Backend Operation here

    setTimeout(() => setStatus('SUCCESS'), 3000);
  };

  if (state.status === 'LOADING') {
    return (
      <Box textAlign="center">
        <Spinner color="primary.500" size="120px" margin="auto" marginTop="6" />
      </Box>
    );
  } else if (state.status === 'SUCCESS') {
    return <SuccessMessage setStatus={setStatus} />;
  } else {
    return (
      <React.Fragment>
        <FormControl marginY="4">
          <FormLabel htmlFor="report">Report</FormLabel>
          <Textarea
            type="text"
            id="report"
            aria-describedby="title-helper-text"
            placeholder="Here is what happened..."
            value={state.report}
            onChange={updateFieldValue('report')}
            resize="vertical"
          />
          <FormHelperText id="title-helper-text">Explain what happened</FormHelperText>
        </FormControl>
        <FormControl marginY="4">
          {/* <FormLabel htmlFor="evidence-file-input">
          <Input type="file" id="evidence-file-input" ref={file} aria-describedby="evidence-helper-text" hidden></Input>
          <Flex align="center">
            <Button>Upload</Button>
            <Text fontWeight="700" id="evidence-helper-text" fontSize="xs" maxW="70%" marginLeft="2">
              Submit a picture or video supporting your claim
            </Text>
          </Flex>
        </FormLabel> */}
        </FormControl>
        <Stack isInline>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button bg="secondary.500">
            <Link to="/">Cancel</Link>
          </Button>
        </Stack>
      </React.Fragment>
    );
  }
};

export default Form;
