import { Component } from "react";
import { connect } from "react-redux";
import CourseItem from "./CourseItem";
class Courses extends Component {
 render() {
    var { courses } = this.props;
    return (
      <div className="Top_pay">
        {this.showCourses(courses)}
      </div>
    );
  }
  showCourses(courses) {
    if (courses != null && courses.length > 0) {
      return courses.map((c, index) => {
        return (
          <div key={courses.category} className="mb-2">
            <h1>{c.category}</h1>
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

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courseReducer
  }
}
export default connect(mapStateToProps)(Courses);
