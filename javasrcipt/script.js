function appInit() {
  $(document).ready(() => {
    initializeUI();
    setupEventHandlers();
    showAndHideBtn();
    fetchDatas();
    handleFormData();
  });
}

const initializeUI = () => {
  $("#content h1").text("JQuery로 변경된 텍스트!");
};

const setupEventHandlers = () => {
  $("#myButton").click(() => alert("버튼이 클릭되었습니다"));
  $("#toggleButton").click(() => $("#myDiv").toggle());
};

const showAndHideBtn = () => {
  $("#hideButton").click(() => $("#someEl").hide());
  $("#showButton").click(() => $("#someEl").show());
  $("#toggleButtons").click(() => $("#someEl").toggle());
};

const fetchDatas = () => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    success: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    },
  });
};

const handleFormData = () => {
  $(".myform").submit((e) => {
    e.preventDefault();
    console.log("제출 완료");
  });
};

const handleColor = () => {};

appInit();
