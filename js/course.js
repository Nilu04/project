// Simulated Data (Replace with dynamic content)
const courseData = {
    title: 'Learn HTML & CSS',
    description: 'This course teaches you the basics of web development using HTML and CSS. Perfect for beginners!',
    instructor: 'John Doe',
    instructorBio: 'John is an experienced web developer with 10+ years of experience in front-end technologies.',
    modules: [
      { title: 'Introduction to HTML', completed: true },
      { title: 'Understanding CSS', completed: true },
      { title: 'Advanced HTML & CSS', completed: false },
      { title: 'Responsive Web Design', completed: false },
    ],
    progress: 50,
    reviews: [
      { user: 'Jane Doe', rating: 5, comment: 'Great course!' },
      { user: 'Mark Smith', rating: 4, comment: 'Good content, needs more examples.' },
    ],
    relatedCourses: [
      { title: 'Advanced JavaScript', url: 'course.html' },
      { title: 'Responsive Web Design', url: 'course.html' },
      { title: 'Intro to Web Development', url: 'course.html' },
    ],
  };
  
  // Populate course details dynamically
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('courseTitle').textContent = courseData.title;
    document.getElementById('courseDescription').textContent = courseData.description;
    document.getElementById('instructorName').textContent = courseData.instructor;
    document.getElementById('instructorBio').textContent = courseData.instructorBio;
    document.getElementById('courseProgress').value = courseData.progress;
    document.getElementById('progressText').textContent = `${courseData.progress}% Complete`;
  
    // Display course modules
    const moduleList = document.getElementById('moduleList');
    courseData.modules.forEach((module, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox" ${module.completed ? 'checked' : ''} disabled /> ${module.title}`;
      moduleList.appendChild(li);
    });
  
    // Display reviews
    const reviewSection = document.getElementById('reviewSection');
    courseData.reviews.forEach((review) => {
      const div = document.createElement('div');
      div.classList.add('review');
      div.innerHTML = `<p><strong>${review.user}</strong> (⭐⭐⭐⭐⭐)</p><p>${review.comment}</p>`;
      reviewSection.appendChild(div);
    });
  
    // Display related courses
    const relatedCoursesList = document.getElementById('relatedCoursesList');
    courseData.relatedCourses.forEach((course) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${course.url}">${course.title}</a>`;
      relatedCoursesList.appendChild(li);
    });
  });
  
  // Go back to the course list
  function goBack() {
    window.history.back();
  }
  
  // Start the course (placeholder function)
  function startCourse() {
    alert('Course started!');
  }
  
  // Post a new discussion (placeholder function)
  function postDiscussion() {
    const discussionInput = document.getElementById('discussionInput');
    const discussionPosts = document.getElementById('discussionPosts');
    const post = document.createElement('div');
    post.classList.add('discussion-post');
    post.innerHTML = `<p>${discussionInput.value}</p>`;
    discussionPosts.appendChild(post);
    discussionInput.value = '';
  }
  