import { Button, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const WebMovies = () => {
    const navigate = useNavigate();
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
            m='10% auto'
        >
            <Grid>
                <Typography style={{ cursor: 'pointer'}} onClick={() => navigate('/')} variant='h4' textAlign='center' mb={1}>Movies</Typography>
                <Grid>
                    <Button
                        variant='outlined'
                        sx={{ margin: 2 }}
                        onClick={() => navigate('/filmes')}
                    >
                        Entrar com convidado
                    </Button>
                    <Button variant='contained' onClick={() => navigate('/register')}>Criar conta</Button>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default WebMovies
