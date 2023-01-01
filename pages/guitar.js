import { useRouter } from 'next/router';
import allmodels from './csvjson.json';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/Guitar.module.css';

const Guitar = () => {
    const router = useRouter();
    const [currentModel, setCurrentModel] = useState(null);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        const foundModel = allmodels.find(model => model.title === params.title);
        setCurrentModel(foundModel);
    }, [currentModel, setCurrentModel]);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={5}>

                {currentModel && <div className={styles.modelContainer}>
                    <h1 className={styles.modelTitle}>{currentModel.title}</h1>
                    <h2 style={{ fontWeight: '500' }}>Of <span style={{ fontWeight: '900' }}>{currentModel.manufacturer}</span></h2>
                    <h3>Retail price is at {currentModel.price}€</h3>
                    
                    {/* <div className={styles.actionBtn}>
                        <a href="#">Buy now</a>
                    </div>

                    <br />

                    <div className={styles.placeBidBtn} style={{ marginTop: '5%' }}>
                        <a href="#">Place bid</a>
                    </div> */}
                </div>}
                
                </Grid>
            </Grid>
        </div>
    )
}

export default Guitar;