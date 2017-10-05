import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Controls from './Controls';
import Compare from './Compare';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

const dataFiles = {
  // '3rd_grade_tests':
  //   require('../data/3rd_grade_tests.js'),
  // 'online_pupil_enrollment':
  //   require('../data/online_pupil_enrollment.js'),
  // '8th_grade_test_scores':
  //   require('../data/8th_grade_test_scores.js'),
  // 'pupil_enrollment':
  //   require('../data/pupil_enrollment.js'),
  // 'average_race_ethnicity_math_scores':
  //   require('../data/average_race_ethnicity_math_scores.js'),
  // 'pupil_enrollment_by_race_ethnicity':
  //   require('../data/pupil_enrollment_by_race_ethnicity.js'),
  // 'average_race_ethnicity_reading_scores':
  //   require('../data/average_race_ethnicity_reading_scores.js'),
  // 'remediation_in_higher_education':
  //   require('../data/remediation_in_higher_education.js'),
  // 'average_race_ethnicity_writing_scores':
  //   require('../data/average_race_ethnicity_writing_scores.js'),
  // 'school_aged_children_in_poverty':
  //   require('../data/school_aged_children_in_poverty.js'),
  // 'dropout_rates_by_race_and_ethnicity':
  //   require('../data/dropout_rates_by_race_and_ethnicity.js'),
  // 'special_education':
  //   require('../data/special_education.js'),
  // 'high_school_graduation_rates':
  //   require('../data/high_school_graduation_rates.js'),
  // 'students_qualifying_for_free_or_reduced_price_lunch':
  //   require('../data/students_qualifying_for_free_or_reduced_price_lunch.js'),
  // 'kindergartners_in_full_day_program':
  //   require('../data/kindergartners_in_full_day_program.js'),
  // 'title_i_students':
  //   require('../data/title_i_students.js'),
  'median_household_income':
    require('../data/median_household_income.js')
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: new DistrictRepository(kinderData),
      displayDistricts: [],
      compareCard: true,
      firstDistrict: '',
      secondDistrict: ''
    };
  }

  componentDidMount() {
    this.setState({
      displayDistricts: this.state.districts.findAllMatches()
    });
  }

  setComparePosition (district) {
    const pos = this.state.compareCard ? 'firstDistrict' : 'secondDistrict';
    this.setState({
      [pos]: district,
      compareCard: !this.state.compareCard
    });
  }

  updateSearchDistricts(search) {
    this.setState({
      displayDistricts: this.state.districts.findAllMatches(search)
    });
  }

  changeDataSet(dataSet) {
    const dataLoad = new DistrictRepository(dataFiles[dataSet]);
    this.setState({districts: dataLoad});
  }

  buildCompare () {
    let firstDistrictInfo = {};
    let secondDistrictInfo = {};
    if (this.state.firstDistrict) {
      firstDistrictInfo = {
        firstDistrict: {
          title:
            this.state.firstDistrict,
          average:
            this.state.districts.findAverage(this.state.firstDistrict),
          data:
            this.state.districts.findByName(this.state.firstDistrict)
        }
      };
      console.log(firstDistrictInfo);
    }
    if (this.state.secondDistrict) {
      secondDistrictInfo = {
        secondDistrict: {
          title:
            this.state.secondDistrict,
          average:
            this.state.districts.findAverage(this.state.secondDistrict),
          data:
            this.state.districts.findByName(this.state.secondDistrict)
        },
        difference:
          this.state.districts.compareDistrictAverages(
            this.state.firstDistrict, this.state.secondDistrict)
      };
    }
    return Object.assign({}, firstDistrictInfo, secondDistrictInfo);
  }

  render() {
    return (
      <div>
        <Controls
          searchDistricts={this.updateSearchDistricts.bind(this)}
          fileList={Object.keys(dataFiles)}
          changeData={this.changeDataSet.bind(this)}
        />
        <Compare
          compareInfo={this.buildCompare()}
        />
        <CardContainer
          firstDistrict={this.state.firstDistrict}
          secondDistrict={this.state.secondDistrict}
          setComparePosition={this.setComparePosition.bind(this)}
          districtData={this.state.districts}
          districtList={this.state.displayDistricts} />
      </div>
    );
  }
}

export default App;
