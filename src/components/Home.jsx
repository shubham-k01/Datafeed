import React, { useRef, useState } from 'react'
import { Box, Button, Container, Stack, FormLabel, TextField } from '@mui/material'
import { query } from '../utils/fetch'

export default function Home() {
    const first = useRef(null)
    const [data, setData] = useState('')
    const [emj, setEmj] = useState('')
    const [res, setRes] = useState('')
    // const mapper = {

    //     'LABEL_2': ['Negative',setEmj('face-pensive')],
    //     'LABEL_1': ['Positive',setEmj('face-smile')],
    //     'LABEL_0': ['Neutral',setEmj('meh')]
    // }
    const handleClick = async (e) => {
        e.preventDefault()
        const data = first.current.value;
        setData(first.current.value);
        console.log(data);
        try {
            const response = await query(data);
            if(response[0][0].label==='LABEL_2'){
                setEmj('face-pensive')
                setRes('Negative')
            }
            if(response[0][0].label=='LABEL_1'){
                setEmj('face-smile')
                setRes('Positive')
            }
            if(response[0][0].label==='LABEL_0'){
                setEmj('face-meh')
                setRes('Neutral')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Box style={{ padding: '10px' }}>
                <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Welcome To Sentilyse</h1>
                <form>
                    <Stack style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TextField label='Enter your social media text' inputRef={first} size='medium' />
                        <Button style={{ margin: '15px' }} variant='contained' onClick={handleClick} size='large' >Submit for evaluation</Button>
                    </Stack>
                </form>
                {data && <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Your typed text is:</p>
                    <p style={{ textAlign: 'center' }}>{data}</p>
                    <b style={{ marginTop: '15px' }}>The prediction for this is:</b>
                    {res}
                    {res && (<span style={{fontSize: '48px',color:'yellow'}}>
                    <i className={`fa-solid fa-face-${emj}}`} ></i>
                    </span>)}
                </Stack>}




            </Box>
            {/* <Container>
        <div>
            <h1 style={{textAlign:'center'}}>Welcome To Senti</h1>
            <Stack style={{width:'100vw',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                <div>
                    <form>
                        <TextField  label="Enter your text here" variant="outlined"  name="txt" id="txt"  ref={first} style={{margin:'15px'}}/>
                        <Button variant="contained" onClick={handleClick} style={{margin:'15px'}}>Submit for evaluation</Button>
                    </form>
                </div>
            {res && <div>This is the response : {res[0][0].score}</div>}
            </Stack>
        </div>
    </Container> */}
        </>
    )
}
