import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  isSuperAdmin: Scalars['Boolean'];
  slips?: Maybe<Array<Slip>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  adminOfQueues: Array<Queue>;
};

export type Slip = {
  __typename?: 'Slip';
  id: Scalars['Int'];
  processed: Scalars['Boolean'];
  active: Scalars['Boolean'];
  initialQueueSize: Scalars['Float'];
  queuePosition?: Maybe<Scalars['Int']>;
  userId: Scalars['Float'];
  user: User;
  queue?: Maybe<Queue>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Queue = {
  __typename?: 'Queue';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  slips?: Maybe<Array<Slip>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  admins: Array<User>;
  descriptionSnippet: Scalars['String'];
};

export type AdminQueue = {
  __typename?: 'AdminQueue';
  userId: Scalars['Float'];
  user: User;
  queueId: Scalars['Float'];
  queue: Queue;
};

export type PaginatedQueues = {
  __typename?: 'PaginatedQueues';
  queues: Array<Queue>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedSlips = {
  __typename?: 'PaginatedSlips';
  slips: Array<Slip>;
  hasMore: Scalars['Boolean'];
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type QueueInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  queues: PaginatedQueues;
  queue?: Maybe<Queue>;
  slips: PaginatedSlips;
  slip?: Maybe<Slip>;
  hello: Scalars['String'];
  users: Array<User>;
  user?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryQueuesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryQueueArgs = {
  id: Scalars['Int'];
};


export type QuerySlipsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySlipArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createQueue?: Maybe<Queue>;
  updateQueue?: Maybe<Queue>;
  deleteQueues?: Maybe<Scalars['Boolean']>;
  deleteQueue: Scalars['Boolean'];
  subscribeTo?: Maybe<Queue>;
  unsubscribeFrom?: Maybe<Queue>;
  processSlip?: Maybe<Queue>;
  pubSubMutation: Scalars['Boolean'];
  publisherMutation: Scalars['Boolean'];
  pubSubMutationToDynamicTopic: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changeForgotPassword: UserResponse;
  addAdmin?: Maybe<AdminQueue>;
  removeAdmin?: Maybe<AdminQueue>;
};


export type MutationCreateQueueArgs = {
  options: QueueInput;
};


export type MutationUpdateQueueArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteQueueArgs = {
  id: Scalars['Float'];
};


export type MutationSubscribeToArgs = {
  id: Scalars['Int'];
};


export type MutationUnsubscribeFromArgs = {
  slipId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationProcessSlipArgs = {
  slipId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};


export type MutationPubSubMutationArgs = {
  message?: Maybe<Scalars['String']>;
};


export type MutationPublisherMutationArgs = {
  message?: Maybe<Scalars['String']>;
};


export type MutationPubSubMutationToDynamicTopicArgs = {
  message?: Maybe<Scalars['String']>;
  topic: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangeForgotPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationAddAdminArgs = {
  userId: Scalars['Float'];
  queueId: Scalars['Float'];
};


export type MutationRemoveAdminArgs = {
  userId: Scalars['Float'];
  queueId: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  queueUpdate: Scalars['Int'];
  subscription: Scalars['String'];
  normalSubscription: Notification;
  subscriptionWithFilter: Notification;
  subscriptionWithFilterToDynamicTopic: Notification;
};


export type SubscriptionQueueUpdateArgs = {
  id: Scalars['Float'];
  slipId: Scalars['Float'];
};


export type SubscriptionSubscriptionWithFilterToDynamicTopicArgs = {
  topic: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularQueueFragment = (
  { __typename?: 'Queue' }
  & Pick<Queue, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'descriptionSnippet'>
  & { slips?: Maybe<Array<(
    { __typename?: 'Slip' }
    & Pick<Slip, 'id' | 'processed'>
  )>> }
);

export type RegularSlipFragment = (
  { __typename?: 'Slip' }
  & Pick<Slip, 'id' | 'createdAt' | 'updatedAt' | 'processed' | 'active' | 'initialQueueSize' | 'queuePosition'>
  & { queue?: Maybe<(
    { __typename?: 'Queue' }
    & Pick<Queue, 'id' | 'title' | 'descriptionSnippet'>
  )> }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
  & { adminOfQueues: Array<(
    { __typename?: 'Queue' }
    & Pick<Queue, 'id' | 'title' | 'descriptionSnippet'>
  )> }
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangeForgotPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { changeForgotPassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateQueueMutationVariables = Exact<{
  options: QueueInput;
}>;


export type CreateQueueMutation = (
  { __typename?: 'Mutation' }
  & { createQueue?: Maybe<(
    { __typename?: 'Queue' }
    & RegularQueueFragment
  )> }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type SubscribeToQueueMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SubscribeToQueueMutation = (
  { __typename?: 'Mutation' }
  & { subscribeTo?: Maybe<(
    { __typename?: 'Queue' }
    & RegularQueueFragment
  )> }
);

export type UnSubscribeFromQueueMutationVariables = Exact<{
  id: Scalars['Int'];
  slipId: Scalars['Int'];
}>;


export type UnSubscribeFromQueueMutation = (
  { __typename?: 'Mutation' }
  & { unsubscribeFrom?: Maybe<(
    { __typename?: 'Queue' }
    & RegularQueueFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type QueuesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type QueuesQuery = (
  { __typename?: 'Query' }
  & { queues: (
    { __typename?: 'PaginatedQueues' }
    & Pick<PaginatedQueues, 'hasMore'>
    & { queues: Array<(
      { __typename?: 'Queue' }
      & RegularQueueFragment
    )> }
  ) }
);

export type QueueQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type QueueQuery = (
  { __typename?: 'Query' }
  & { queue?: Maybe<(
    { __typename?: 'Queue' }
    & RegularQueueFragment
  )> }
);

export type SlipsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type SlipsQuery = (
  { __typename?: 'Query' }
  & { slips: (
    { __typename?: 'PaginatedSlips' }
    & Pick<PaginatedSlips, 'hasMore'>
    & { slips: Array<(
      { __typename?: 'Slip' }
      & RegularSlipFragment
    )> }
  ) }
);

export type SlipQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SlipQuery = (
  { __typename?: 'Query' }
  & { slip?: Maybe<(
    { __typename?: 'Slip' }
    & RegularSlipFragment
  )> }
);

export const RegularQueueFragmentDoc = gql`
    fragment RegularQueue on Queue {
  id
  createdAt
  updatedAt
  title
  descriptionSnippet
  slips {
    id
    processed
  }
}
    `;
export const RegularSlipFragmentDoc = gql`
    fragment RegularSlip on Slip {
  id
  createdAt
  updatedAt
  processed
  active
  initialQueueSize
  queuePosition
  queue {
    id
    title
    descriptionSnippet
  }
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  email
  adminOfQueues {
    id
    title
    descriptionSnippet
  }
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangeForgotPasswordDocument = gql`
    mutation ChangeForgotPassword($token: String!, $newPassword: String!) {
  changeForgotPassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangeForgotPasswordMutationFn = Apollo.MutationFunction<ChangeForgotPasswordMutation, ChangeForgotPasswordMutationVariables>;

/**
 * __useChangeForgotPasswordMutation__
 *
 * To run a mutation, you first call `useChangeForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeForgotPasswordMutation, { data, loading, error }] = useChangeForgotPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeForgotPasswordMutation, ChangeForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ChangeForgotPasswordMutation, ChangeForgotPasswordMutationVariables>(ChangeForgotPasswordDocument, baseOptions);
      }
export type ChangeForgotPasswordMutationHookResult = ReturnType<typeof useChangeForgotPasswordMutation>;
export type ChangeForgotPasswordMutationResult = Apollo.MutationResult<ChangeForgotPasswordMutation>;
export type ChangeForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeForgotPasswordMutation, ChangeForgotPasswordMutationVariables>;
export const CreateQueueDocument = gql`
    mutation CreateQueue($options: QueueInput!) {
  createQueue(options: $options) {
    ...RegularQueue
  }
}
    ${RegularQueueFragmentDoc}`;
export type CreateQueueMutationFn = Apollo.MutationFunction<CreateQueueMutation, CreateQueueMutationVariables>;

/**
 * __useCreateQueueMutation__
 *
 * To run a mutation, you first call `useCreateQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQueueMutation, { data, loading, error }] = useCreateQueueMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateQueueMutation(baseOptions?: Apollo.MutationHookOptions<CreateQueueMutation, CreateQueueMutationVariables>) {
        return Apollo.useMutation<CreateQueueMutation, CreateQueueMutationVariables>(CreateQueueDocument, baseOptions);
      }
export type CreateQueueMutationHookResult = ReturnType<typeof useCreateQueueMutation>;
export type CreateQueueMutationResult = Apollo.MutationResult<CreateQueueMutation>;
export type CreateQueueMutationOptions = Apollo.BaseMutationOptions<CreateQueueMutation, CreateQueueMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SubscribeToQueueDocument = gql`
    mutation SubscribeToQueue($id: Int!) {
  subscribeTo(id: $id) {
    ...RegularQueue
  }
}
    ${RegularQueueFragmentDoc}`;
export type SubscribeToQueueMutationFn = Apollo.MutationFunction<SubscribeToQueueMutation, SubscribeToQueueMutationVariables>;

/**
 * __useSubscribeToQueueMutation__
 *
 * To run a mutation, you first call `useSubscribeToQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToQueueMutation, { data, loading, error }] = useSubscribeToQueueMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubscribeToQueueMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeToQueueMutation, SubscribeToQueueMutationVariables>) {
        return Apollo.useMutation<SubscribeToQueueMutation, SubscribeToQueueMutationVariables>(SubscribeToQueueDocument, baseOptions);
      }
export type SubscribeToQueueMutationHookResult = ReturnType<typeof useSubscribeToQueueMutation>;
export type SubscribeToQueueMutationResult = Apollo.MutationResult<SubscribeToQueueMutation>;
export type SubscribeToQueueMutationOptions = Apollo.BaseMutationOptions<SubscribeToQueueMutation, SubscribeToQueueMutationVariables>;
export const UnSubscribeFromQueueDocument = gql`
    mutation unSubscribeFromQueue($id: Int!, $slipId: Int!) {
  unsubscribeFrom(id: $id, slipId: $slipId) {
    ...RegularQueue
  }
}
    ${RegularQueueFragmentDoc}`;
export type UnSubscribeFromQueueMutationFn = Apollo.MutationFunction<UnSubscribeFromQueueMutation, UnSubscribeFromQueueMutationVariables>;

/**
 * __useUnSubscribeFromQueueMutation__
 *
 * To run a mutation, you first call `useUnSubscribeFromQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnSubscribeFromQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unSubscribeFromQueueMutation, { data, loading, error }] = useUnSubscribeFromQueueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      slipId: // value for 'slipId'
 *   },
 * });
 */
export function useUnSubscribeFromQueueMutation(baseOptions?: Apollo.MutationHookOptions<UnSubscribeFromQueueMutation, UnSubscribeFromQueueMutationVariables>) {
        return Apollo.useMutation<UnSubscribeFromQueueMutation, UnSubscribeFromQueueMutationVariables>(UnSubscribeFromQueueDocument, baseOptions);
      }
export type UnSubscribeFromQueueMutationHookResult = ReturnType<typeof useUnSubscribeFromQueueMutation>;
export type UnSubscribeFromQueueMutationResult = Apollo.MutationResult<UnSubscribeFromQueueMutation>;
export type UnSubscribeFromQueueMutationOptions = Apollo.BaseMutationOptions<UnSubscribeFromQueueMutation, UnSubscribeFromQueueMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const QueuesDocument = gql`
    query Queues($limit: Int!, $cursor: String) {
  queues(limit: $limit, cursor: $cursor) {
    hasMore
    queues {
      ...RegularQueue
    }
  }
}
    ${RegularQueueFragmentDoc}`;

/**
 * __useQueuesQuery__
 *
 * To run a query within a React component, call `useQueuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueuesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useQueuesQuery(baseOptions: Apollo.QueryHookOptions<QueuesQuery, QueuesQueryVariables>) {
        return Apollo.useQuery<QueuesQuery, QueuesQueryVariables>(QueuesDocument, baseOptions);
      }
export function useQueuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueuesQuery, QueuesQueryVariables>) {
          return Apollo.useLazyQuery<QueuesQuery, QueuesQueryVariables>(QueuesDocument, baseOptions);
        }
export type QueuesQueryHookResult = ReturnType<typeof useQueuesQuery>;
export type QueuesLazyQueryHookResult = ReturnType<typeof useQueuesLazyQuery>;
export type QueuesQueryResult = Apollo.QueryResult<QueuesQuery, QueuesQueryVariables>;
export const QueueDocument = gql`
    query Queue($id: Int!) {
  queue(id: $id) {
    ...RegularQueue
  }
}
    ${RegularQueueFragmentDoc}`;

/**
 * __useQueueQuery__
 *
 * To run a query within a React component, call `useQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueueQuery(baseOptions: Apollo.QueryHookOptions<QueueQuery, QueueQueryVariables>) {
        return Apollo.useQuery<QueueQuery, QueueQueryVariables>(QueueDocument, baseOptions);
      }
export function useQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueueQuery, QueueQueryVariables>) {
          return Apollo.useLazyQuery<QueueQuery, QueueQueryVariables>(QueueDocument, baseOptions);
        }
export type QueueQueryHookResult = ReturnType<typeof useQueueQuery>;
export type QueueLazyQueryHookResult = ReturnType<typeof useQueueLazyQuery>;
export type QueueQueryResult = Apollo.QueryResult<QueueQuery, QueueQueryVariables>;
export const SlipsDocument = gql`
    query Slips($limit: Int!, $cursor: String) {
  slips(limit: $limit, cursor: $cursor) {
    hasMore
    slips {
      ...RegularSlip
    }
  }
}
    ${RegularSlipFragmentDoc}`;

/**
 * __useSlipsQuery__
 *
 * To run a query within a React component, call `useSlipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlipsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSlipsQuery(baseOptions: Apollo.QueryHookOptions<SlipsQuery, SlipsQueryVariables>) {
        return Apollo.useQuery<SlipsQuery, SlipsQueryVariables>(SlipsDocument, baseOptions);
      }
export function useSlipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SlipsQuery, SlipsQueryVariables>) {
          return Apollo.useLazyQuery<SlipsQuery, SlipsQueryVariables>(SlipsDocument, baseOptions);
        }
export type SlipsQueryHookResult = ReturnType<typeof useSlipsQuery>;
export type SlipsLazyQueryHookResult = ReturnType<typeof useSlipsLazyQuery>;
export type SlipsQueryResult = Apollo.QueryResult<SlipsQuery, SlipsQueryVariables>;
export const SlipDocument = gql`
    query Slip($id: Int!) {
  slip(id: $id) {
    ...RegularSlip
  }
}
    ${RegularSlipFragmentDoc}`;

/**
 * __useSlipQuery__
 *
 * To run a query within a React component, call `useSlipQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlipQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSlipQuery(baseOptions: Apollo.QueryHookOptions<SlipQuery, SlipQueryVariables>) {
        return Apollo.useQuery<SlipQuery, SlipQueryVariables>(SlipDocument, baseOptions);
      }
export function useSlipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SlipQuery, SlipQueryVariables>) {
          return Apollo.useLazyQuery<SlipQuery, SlipQueryVariables>(SlipDocument, baseOptions);
        }
export type SlipQueryHookResult = ReturnType<typeof useSlipQuery>;
export type SlipLazyQueryHookResult = ReturnType<typeof useSlipLazyQuery>;
export type SlipQueryResult = Apollo.QueryResult<SlipQuery, SlipQueryVariables>;