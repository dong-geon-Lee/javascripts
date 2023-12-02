function appInit() {
  $(document).ready(() => {
    initializeUI();
    setupEventHandlers();
    showAndHideBtn();
    fetchDatas();
    handleFormData();
    handleColor();
    handleChain();
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

const handleColor = () => {
  $(".active__color").click(() => {
    $(".yellow").addClass("active");
    $(".blue").addClass("active");
    $(".active__color").attr("disabled", true);
  });

  $(".reset__color").click(() => {
    $(".yellow").removeClass("active");
    $(".blue").removeClass("active");
    $(".active__color").attr("disabled", false);
  });
};

const handleChain = () => {
  $("#btn").click(() => {
    $("#header")
      .addClass("highlight")
      .fadeOut("slow")
      .fadeIn("fast")
      .addClass("large");
  });
};

const handleConnect = () => {
  const color = $();
};

appInit();
