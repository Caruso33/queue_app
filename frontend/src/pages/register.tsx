import { Box, Button } from "@chakra-ui/core"
import { Form, Formik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import { useIsAuth } from "utils/useIsAuth"
import InputField from "../components/InputField"
import Layout from "../components/Layout"
import { useRegisterMutation } from "../generated/graphql"
import { toErrorMap } from "../utils/toErrorMap"

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const router = useRouter()

  const pushToNextPage = () => {
    router.push("/")
  }

  const { isAuth } = useIsAuth()
  if (isAuth) pushToNextPage() // already signed-in

  const [register] = useRegisterMutation()

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, actions) => {
          const response = await register({ variables: { options: values } })

          if (response.data?.register.errors) {
            actions.setErrors(toErrorMap(response.data.register.errors))
          } else if (response.data?.register.user) {
            pushToNextPage()
          }
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />

            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>

            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>

            <Button
              mt={4}
              variantColor="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default Register
