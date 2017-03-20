import React from 'react';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';
import Navbar from './Navbar';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.setSelectedDate = this.setSelectedDate.bind(this);
  }

  setSelectedDate(startDate, endDate) {
    console.log('selectedStartDate is ', startDate);
    console.log('selectedEndDate is ', endDate);
    this.setState({ selectedStartDate: startDate });
    this.setState({ selectedEndDate: endDate });
  }

  // location is passed in as a property
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <SearchBar
            setLocationFromSearch={this.props.setLocationFromSearch}
            queryYelp={this.props.queryYelp}
          />
        </div>
        <div> Enter your travel date
          <AirbnbCalendar setSelectedDate={this.setSelectedDate} />
        </div>
      </div>
    );
  }
}

export default Entrance;

