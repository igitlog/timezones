import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../redux/actions/actions'
import Clock from './Clock';
import Loader from './Loader/Loader';


function Timezone(props) {
  const [zone, setZone] = useState('+2');
  const [timezones, setTimezone] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector(state => {
    const { loading } = state;
    return loading.loading
  })

  useEffect(() => {
    fetch('./timezones.json')
      .then(response => response.json())
      .then(timezones => {
        setTimeout(() => {
          setTimezone(timezones)
          dispatch(loading(false))
        }, 2000)
      });
  }, [dispatch])
  const handleChange = (event) => {
    setZone(event.target.value)
  };
  return (
    <>
      <Clock timezone={props.timezone} zone={zone} secondRatio={props.secondRatio} minuteRatio={props.minuteRatio} hourRatio={props.hourRatio} />
      {(isLoading) ? <Loader /> :
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choise Timezone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={zone}
              label="Timezones"
              onChange={handleChange}
            >
              {timezones.map((zone) => {
                return <MenuItem key={Math.random(new Date())} value={zone.timezone}>{zone.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
      }
    </>
  );
}


export default Timezone;