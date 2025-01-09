import React, { useEffect, useState } from 'react'
import './index.css'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Toaster, toast } from 'react-hot-toast';
import { Button, Typography, Tooltip } from '@mui/material';

function HomeworkOne() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [data, setData] = useState([])

  const ages = Array.from({ length: 100 }, (_, i) => i + 1)

  useEffect(() => {
    const storeData = localStorage.getItem('userData')
    if (storeData) {
      setData(JSON.parse(storeData))
    }
  }, [])

  function validate() {
    if (!name) {
      alert("Please enter your name!")
      return false
    } else if (name.length < 3) {
      alert("Name must be at least 3 characters long")
      return false
    }

    if (!surname) {
      alert("Please enter your surname!")
      return false
    } else if (surname.length < 4) {
      alert("Surname must be at least 4 characters long")
      return false
    }

    if (!email) {
      alert("Please enter your email!")
      return false
    } else if (!email.endsWith("@gmail.com")) {
      alert(`The email address must end with "@gmail.com"`)
      return false
    }

    if (age == '') {
      alert("Please choose your age")
      return false
    }

    return true
  }

  function handleAddUser(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const user = {
      id: Date.now(),
      name: name,
      surname: surname,
      email: email,
      age: age
    }

    const newUser = [...data, user]
    setData(newUser)
    toast.success("User added successfully")

    localStorage.setItem('userData', JSON.stringify(newUser))

    setName("")
    setSurname("")
    setEmail("")
    setAge("")
  }

  function handleDelete(id) {
    let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (isDelete) {
      const deleteUser = data.filter((user) => user.id !== id)
      setData(deleteUser)

      localStorage.setItem("userData", JSON.stringify(deleteUser))
    }
  }

  return (
    <div>
      <Box sx={{ width: "600px", margin: "0 auto", display: "flex", flexDirection: "column", padding: "20px", borderRadius: "10px", marginTop: "60px", border: "2px solid #ECAE2A" }}>
        <Typography variant='h4' align='center' sx={{ fontWeight: "800", fontSize: "35px", color: "#ECAE2A" }}>User Data</Typography>
        <Input value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter your name...' type='text' sx={{ marginTop: "25px", fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" }} />
        <Input value={surname} onChange={(e) => { setSurname(e.target.value) }} placeholder='Enter your surname...' type='text' sx={{ marginTop: "25px", fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" }} />
        <Input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email...' type='email' sx={{ marginTop: "25px", fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" }} />
        <InputLabel id='demo-simple-select-label' sx={{ marginTop: "25px", marginBottom: "5px", fontSize: "22px", fontWeight: "700", color: "#A2A2A2" }}>Choose your age</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' label="Age" value={age} onChange={(e) => { setAge(e.target.value) }}>
          {
            ages.length > 0 && ages.map((age) => (
              <MenuItem key={age} value={age}>{age}</MenuItem>
            ))
          }
        </Select>
        <Button onClick={handleAddUser} sx={{ marginTop: "20px", fontSize: "18px", backgroundColor: "#ECAE2A", letterSpacing: "0.5px", '&:hover': { color: "#ECAE2A", border: "2px solid #ECAE2A", backgroundColor: "#fff", cursor: "pointer", fontWeight: "700", fontSize: "20px" } }} variant="contained">Add User</Button>
        <Toaster />
      </Box>

      <Box sx={{ width: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "50px", marginBottom: "25px" }}>
        {
          data.length > 0 && data.map((user) => (
            <Box key={user.id} sx={{ width: "45%", display: "flex", flexDirection: "column", gap: "10px", border: "2px solid #ECAE2A", padding: "10px", borderRadius: "7px" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.5px", color: "#ECAE2A" }}>Name:<Typography sx={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.4px0", color: "#A2A2A2" }}>{user.name}</Typography></Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.5px", color: "#ECAE2A" }}>Surname:<Typography sx={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.4px", color: "#A2A2A2" }}>{user.surname}</Typography></Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.5px", color: "#ECAE2A" }}>Email:<Typography sx={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.4px", color: "#A2A2A2", overflowWrap: "break-word" }}>{user.email}</Typography></Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.5px", color: "#ECAE2A" }}>Age:<Typography sx={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.4px", color: "#A2A2A2" }}>{user.age}</Typography></Typography>
              <Tooltip title="Delete" placement="top">
                <IconButton onClick={() => handleDelete(user.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ))
        }
      </Box>
    </div>
  )
}

export default HomeworkOne
