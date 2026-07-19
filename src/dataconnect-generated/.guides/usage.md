# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useSeedAllTables, useGetMyProfile, useListProjects, useUpdateMyBio, useDeleteProject } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useSeedAllTables();

const { data, isPending, isSuccess, isError, error } = useGetMyProfile();

const { data, isPending, isSuccess, isError, error } = useListProjects();

const { data, isPending, isSuccess, isError, error } = useUpdateMyBio(updateMyBioVars);

const { data, isPending, isSuccess, isError, error } = useDeleteProject(deleteProjectVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { seedAllTables, getMyProfile, listProjects, updateMyBio, deleteProject } from '@dataconnect/generated';


// Operation SeedAllTables: 
const { data } = await SeedAllTables(dataConnect);

// Operation GetMyProfile: 
const { data } = await GetMyProfile(dataConnect);

// Operation ListProjects: 
const { data } = await ListProjects(dataConnect);

// Operation UpdateMyBio:  For variables, look at type UpdateMyBioVars in ../index.d.ts
const { data } = await UpdateMyBio(dataConnect, updateMyBioVars);

// Operation DeleteProject:  For variables, look at type DeleteProjectVars in ../index.d.ts
const { data } = await DeleteProject(dataConnect, deleteProjectVars);


```