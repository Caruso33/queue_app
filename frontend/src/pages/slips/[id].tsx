import { Box, Button, Flex, Spinner } from "@chakra-ui/core"
import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import { useSlipQuery } from "../../generated/graphql"
import { getLocalStringFromUnix } from "../../utils/date"

interface SlipProps {}

const Queues: React.FC<SlipProps> = (props) => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useSlipQuery({
    variables: { id: parseInt(id) },
  })

  const navigateBack = () => router.back()

  const slip = data?.slip ?? {}

  const createAtString = slip?.createdAt
    ? getLocalStringFromUnix(parseInt(slip.createdAt))
    : "-"
  const updatedAtString = slip?.updatedAt
    ? getLocalStringFromUnix(parseInt(slip.updatedAt))
    : "-"

  return (
    <Layout>
      <Box>
        <Button onClick={navigateBack} variantColor="teal">
          Go Back
        </Button>
      </Box>

      <Flex align="center" direction="column" mt={5}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div>Position in Queue: {slip?.queuePosition}</div>
            <div>createdAt: {createAtString}</div>
            <div>updatedAt: {updatedAtString}</div>
          </>
        )}
      </Flex>
    </Layout>
  )
}

export default Queues
