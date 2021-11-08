import { Component } from "react";
import { connect } from "react-redux";
import CourseItem from "./CourseItem";
import * as actions from "./../../redux/actions/course";
class Courses extends Component {
  
 render() {
    var { courses } = this.props;
    return (
      <div className="Top_pay mt-3" onClick={this.props.clickMore}>
        {this.showCourses(courses)}
      </div>
    );
  }
  showCourses(courses) {
    if (courses != null && courses.length > 0) {
      return courses.map((c, index) => {
        return (
          <div key={courses.category} className="mb-2 text-uppercase mt-4">
            <h4>{c.category}</h4>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {c.list.map((c1, index1) => {
                return <CourseItem key={c.category + index1 + index} course={c1} />;
              })}
            </div>
          </div>
        );
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickMore: () => {
      dispatch(actions.clickMore())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);
