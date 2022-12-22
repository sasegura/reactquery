import {
  useQuery,
  // useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from './CircularIndeterminate';
import ProductCard from './ProductCard';
import { Typography } from '@mui/material';
//   import {  postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient();

function Todos() {
  const getTodos = async () => {
    const a = await fetch('https://fakestoreapi.com/products').then(async (response) =>
      response.json(),
    );
    return a;
  };

  // Queries
  const { status, error, data: query } = useQuery('todos', getTodos);

  return (
    <div>
      <ul>
        <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent='center'>
          {status !== 'loading' ? (
            error ? (
              <Typography variant='h5' component='div'>
                {error}
              </Typography>
            ) : (
              query.map((todo) => (
                <Grid key={todo.id} item xs={4}>
                  <ProductCard product={todo} />
                </Grid>
              ))
            )
          ) : (
            <CircularIndeterminate />
          )}
        </Grid>
      </ul>
    </div>
  );
}

function ReactQuery() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
export default ReactQuery;
