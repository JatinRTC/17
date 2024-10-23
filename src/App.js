import './App.css';
import TodoList from './component/toolTable.js'
import {Container,Typography} from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant='h3' color='sucess' textAlign='center'margin={2}>
        NEW TASK
      </Typography>
      <TodoList />
    </Container>
    
  );
}

export default App;
