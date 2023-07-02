import { Button, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext';

const WebMovies = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
            m='10% auto'
        >
            <Grid textAlign='center' justifyContent='center'>
                <Typography style={{ cursor: 'pointer'}} onClick={() => navigate('/')} variant='h4' textAlign='center' mb={1}>
                    {isAuthenticated ? "Divirta-se conhecendo mais sobre filmes" : "Movies DB"}
                </Typography>
                <Grid>
                    <Button
                        variant='outlined'
                        sx={{ margin: 2 }}
                        onClick={() => navigate('/filmes')}
                    >
                        {isAuthenticated ? "Ver filmes" : "Entrar com convidado"}
                    </Button>
                    {!isAuthenticated && <Button variant='contained' onClick={() => navigate('/login')}>Criar conta</Button>}
                </Grid>
            </Grid>
        </Stack>
    )
}

export default WebMovies
