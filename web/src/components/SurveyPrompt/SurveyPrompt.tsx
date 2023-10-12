import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Textarea,
  FormControl,
  UnorderedList,
  ListItem,
  Button,
  Flex,
  Grid,
  VStack,
} from '@chakra-ui/react'
import { useForm } from '@redwoodjs/forms'
import { Form, Submit } from '@redwoodjs/forms'

interface Props {
  question: string
  hints: string[]
  saveResponse: (response: string) => void
}

const SurveyPrompt = (props: Props) => {
  const [response, setResponse] = React.useState('')
  const formMethods = useForm()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    setResponse(event.target.value)
  }

  return (
    <Grid placeItems="center">
      <Card>
        <CardHeader fontSize={'4xl'}>
          <Text color={'orange.400'}>{props.question}</Text>
        </CardHeader>
        <CardBody marginTop="-6">
          <Card bgColor={'gray.100'} padding="4" marginBottom="6">
            <UnorderedList>
              {props.hints.map((hint) => (
                <ListItem>
                  <Text color="blackAlpha.700">{hint}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Card>
          <Form
            formMethods={formMethods}
            onSubmit={(event) =>
              formMethods.handleSubmit((fieldValues) =>
                props.saveResponse(response)
              )
            }
          >
            <FormControl>
              <Textarea
                name="response"
                placeholder="Enter your response here..."
                value={response}
                onChange={handleChange}
              />
            </FormControl>
            <Button marginTop="4">
              <Submit>Submit</Submit>
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Grid>
  )
}

export default SurveyPrompt

// TODO: Create a component, Survey, that takes a list of SurveyPrompts as an argument and renders them one by one in a generator.
