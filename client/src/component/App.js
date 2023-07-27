// Class Based component
import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import NevBar from "./NevBar/NevBar";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
import axios from "axios"
import Bookmark from "./UserComponent/Bookmark";
import History from "./UserComponent/History";
import key from '../apiKey'

class App extends Component {
  constructor(props) {
    super(props);
    this.serverUrl = "http://localhost:8000/user"
    this.state = {
      name: "",
      lat: "",
      lon: "",
      data: null,
      email: null,
      userData: '',
      is_bookmark: false
    }
  }

  changehandler = (event) => {
    let keyName = event.target.name
    if (keyName === "name") {
      this.setState({ name: event.target.value })
    } else if (keyName === "lat") {
      this.setState({ lat: event.target.value })
    } else if (keyName === "lon") {
      this.setState({ lon: event.target.value })
    }
  }

  searchHandler = () => {
    let searchData
    if (this.state.lat & this.state.lon) {
      searchData = `${this.state.lat},${this.state.lon}`
    } else if (this.state.name) {
      searchData = this.state.name
    }
    if (searchData) {
      this.setState({ data: "loading" })
      this.searching(searchData)
    }
  }

  autoSearchHandler = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        data: "loading"
      })
      let searchData = `${position.coords.latitude},${position.coords.longitude}`
      this.searching(searchData)
    }, () => {
      console.log("Enter")
    })
  }

  searching = (searchData) => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchData}&days=7&aqi=yes`)
      .then((res) => {
        this.setState({
          data: res.data,
          name: res.data.location.name,
          lat: res.data.location.lat,
          lon: res.data.location.lon
        })
        if (this.state.email) {
          this.addHistory(this.state.email, res.data.location.name, res.data.location.lat, res.data.location.lon);
          this.bookmarkCheck(res.data.location.name)
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({ data: null })
      })
  }

  saveDataSearch = (lat, lon) => {
    let searchData = `${lat},${lon}`
    this.searching(searchData)
  }

  saveUserData = (event) => {
    event.preventDefault()
    let email = event.target.email.value
    console.log(email)
    axios.get(`${this.serverUrl}/data/${email}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          email: res.data.email,
          userData: {
            bookmark: res.data.bookmark,
            history: res.data.history
          }
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  logOutHandler = () => {
    this.setState({
      name: "",
      lat: "",
      lon: "",
      data: null,
      email: null,
      userData: '',
      is_bookmark: false
    })
  }

  addHistory = (email, city, lat, lon) => {
    axios.post(`${this.serverUrl}/history`, {
      email: email,
      city: city,
      lat: lat,
      lon: lon
    })
      .then(res => {
        let dataArr = this.state.userData
        dataArr.history.push(res.data.data)
        this.setState({ userData: dataArr })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addBookmark = (email, city, lat, lon) => {
    axios.post(`${this.serverUrl}/bookmark`, {
      email: email,
      city: city,
      lat: lat,
      lon: lon
    })
      .then(res => {
        this.setState({ is_bookmark: true })
        let dataArr = this.state.userData
        dataArr.bookmark.push(res.data.data)
        this.setState({ userData: dataArr })
      })
      .catch(err => {
        console.log(err)
      })
  }

  bookmarkHandler = () => {
    if (this.state.email) {
      if (this.state.is_bookmark) {
        let index
        let data = this.state.userData.bookmark.map((e,i)=>{
          if(e.city===this.state.name & e.lat===this.state.lat & e.lon===this.state.lon){
            index = i
            return e
          }
        })
        if(index){
          console.log(data[0]._id, "bookmark", index)
          this.deleteHandler(data[0]._id, "bookmark", index)
          this.setState({is_bookmark: false})
        }
      } else {
        this.addBookmark(this.state.email, this.state.name, this.state.lat, this.state.lon)
      }
    }
  }

  bookmarkCheck = (city) => {
    if (this.state.email) {
      let chack = false
      this.state.userData.bookmark.forEach(element => {
        console.log(element.city, " === ", city)
        if (element.city === city) {
          chack = true
        }
      });
      this.setState({ is_bookmark: chack })
    }
  }

  delDataHendnler = (id, mode, index) => {
    let data = this.state.userData
    if (mode === 'bookmark') {
      let arr = data.bookmark
      arr.splice(index, 1)
      data.bookmark = arr
      this.setState({ userData: data })
    } else if (mode === "history") {
      let arr = data.history
      arr.splice(index, 1)
      data.history = arr
      this.setState({ userData: data })
    }
  }

  deleteHandler = (id, mode, index) => {
    axios.delete(`${this.serverUrl}/${mode}/${id}`)
      .then((res) => {
        this.delDataHendnler(id, mode, index)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    document.title = `Weather App ${(this.state.email)? "- "+this.state.email: ""}`
    return (
      <Router>
        <NevBar email={this.state.email} handler={this.saveUserData} outHandle={this.logOutHandler} />
        <Routes>
          <Route exact path="/weather" element={<Weather formData={
            {
              name: this.state.name,
              lat: this.state.lat,
              lon: this.state.lon,
              is_bookmark: this.state.is_bookmark,
              email: this.state.email,
              bookmark: (this.state.email) ? this.state.userData.bookmark : ""
            }
          }
            handler={
              {
                changehandler: this.changehandler,
                searchHandler: this.searchHandler,
                autoSearchHandler: this.autoSearchHandler,
                bookmarkHandler: this.bookmarkHandler,
              }
            }
            seraching={this.saveDataSearch}
            deleteHandler={this.deleteHandler}
            data={this.state.data} />} />
          <Route exact path="/bookmark" element={(this.state.email) ? <Bookmark data={this.state.userData.bookmark} deleteHandler={this.deleteHandler} handler={this.saveDataSearch} /> : <Navigate to='/' />} />

          <Route exact path="/history" element={(this.state.email) ? <History data={this.state.userData.history} deleteHandler={this.deleteHandler} handler={this.saveDataSearch} /> : <Navigate to='/' />} />


          {/* <Route exact path="/" element={<Home hendler={this.saveUserData} />} /> */}
          <Route exact path="/" element={(this.state.email) ? <Navigate to='/weather' /> : <Home hendler={this.saveUserData} />} />
        </Routes>
      </Router >
    )
  }
}

export default App;