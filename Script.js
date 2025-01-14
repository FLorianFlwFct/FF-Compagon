Content_Layout_html = `
<link rel="preconnect" href="https://fonts.gstatic.com" /><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
<div
  style="
    width: 190px;
    height: 90vh;
    background-color: #2b3982;
    color: white;
    position: relative;
    padding: 40px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  "
  class="sidemenu-container"
>
  <div>
    <h2
      style="
        text-align: center;
        color: white;
        font-size: 26px;
        font-weight: bold;
        margin: 0px 0px 50px 0px;
        cursor: pointer;
      "
      name="logo"
    >
      #Serenium#
    </h2>
    <ul style="list-style-type: none; padding: 0">
      <li
        style="
          margin: 15px 0;
          border-left: 5px transparent solid;
          padding: 5px;
          display: flex;
          align-items: center;
        "
        class="Dashboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style="width: 25px; height: 25px; margin: 0px 15px"
        >
          <path
            fill="currentColor"
            d="M12 3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM3 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
          ></path>
        </svg>
        <a
          href="#"
          style="
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            border-radius: 5px;
            transition: background 0.3s;
          "
          >Dashboard</a
        >
      </li>
      <li
        style="
          margin: 15px 0;
          margin: 15px 0;
          border-left: 5px transparent solid;
          padding: 5px;
          display: flex;
          align-items: center;
        "
        class="Task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style="width: 25px; height: 25px; margin: 0px 15px"
        >
          <path
            fill="currentColor"
            d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm9.5 3c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75m.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 0-1.06 0l-1.47 1.47l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06"
          />
        </svg>
        <a
          href="#"
          style="
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            border-radius: 5px;
            transition: background 0.3s;
          "
          >My Tasks</a
        >
        <div
          style="
            margin: 0px auto;
            padding: 2px 3px;
            background: #ecedf7;
            color: #2b3982;
            border-radius: 20px;
            min-width: 16px;
            display: flex;
            justify-content: center;
            font-size: 10px;
          "
          class="Notification invisible"
        ></div>
      </li>
      <li
        style="
          margin: 15px 0;
          margin: 15px 0;
          border-left: 5px transparent solid;
          padding: 5px;
          display: flex;
          align-items: center;
        "
        class="Requests"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style="width: 25px; height: 25px; margin: 0px 15px"
        >
          <path
            fill="currentColor"
            d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919"
            clip-rule="evenodd"
          />
        </svg>
        <a
          href="#"
          style="
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            border-radius: 5px;
            transition: background 0.3s;
          "
          >Requests</a
        >
      </li>
      <li
        style="
          margin: 15px 0;
          margin: 15px 0;
          border-left: 5px transparent solid;
          padding: 5px;
          display: none;
          align-items: center;
        "
        class="Admin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style="width: 25px; height: 25px; margin: 0px 15px"
        >
          <path
            fill="currentColor"
            d="M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V17c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H23c.55 0 1-.45 1-1zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"
          />
        </svg>
        <a
          href="#"
          style="
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            border-radius: 5px;
            transition: background 0.3s;
          "
          >Administration</a
        >
      </li>
      <li
        style="
          margin: 15px 0;
          margin: 15px 0;
          border-left: 5px transparent solid;
          padding: 5px;
          display: none;
          align-items: center;
        "
        class="Apps"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style="width: 25px; height: 25px; margin: 0px 15px"
        >
          <path
            fill="currentColor"
            d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5m0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13m10.5-10.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25M13 13h4.25A4.25 4.25 0 1 1 13 17.25z"
          />
        </svg>
        <a
          href="#"
          style="
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            border-radius: 5px;
            transition: background 0.3s;
          "
          >App &amp; Manager</a
        >
      </li>
    </ul>
  </div>
  <ul style="list-style-type: none; padding: 0; margin-bottom: 50px">
    <li
      style="
        margin: 15px 0;
        margin: 15px 0;
        border-left: 5px transparent solid;
        padding: 5px;
        display: flex;
        align-items: center;
      "
      class="Help"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        style="width: 25px; height: 25px; margin: 0px 15px"
      >
        <g fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <path
            stroke-linecap="round"
            d="M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"
          />
        </g>
      </svg>
      <a
        href="#"
        style="
          color: white;
          text-decoration: none;
          padding: 10px;
          display: block;
          border-radius: 5px;
          transition: background 0.3s;
        "
        >Help</a
      >
    </li>
    <li
      style="
        margin: 15px 0;
        margin: 15px 0;
        border-left: 5px transparent solid;
        padding: 5px;
        display: none;
        align-items: center;
      "
      class="Setting"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        style="width: 25px; height: 25px; margin: 0px 15px"
      >
        <path
          fill="currentColor"
          d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"
        />
      </svg>
      <a
        href="#"
        style="
          color: white;
          text-decoration: none;
          padding: 10px;
          display: block;
          border-radius: 5px;
          transition: background 0.3s;
        "
        >Settings</a
      >
    </li>
  </ul>
</div>`;

$("body").html(Content_Layout_html);

///////////////////////////////////////////////////////////////////////////////////////////////

$(".runtime-content").css({ display: "flex", "background-color": "#2B3982" });
$(".sidemenu-container").insertBefore($($(".runtime-content style").first()));
$(".runtime-form.theme-entry").css({
  width: "",
  margin: "15px 15px 15px 0px",
});

///////////////////////////////////////////////////////////////////////////////////////////////

currentUrl = window.location.href;
if (currentUrl.includes("FF.DMA.Home.Form")) {
  $(".Dashboard").addClass("selected");
}
if (
  currentUrl.includes("FF.DMA.Request.Form") ||
  currentUrl.includes("FF.DMA.RequestList.Form")
) {
  $(".Requests").addClass("selected");
}
if (currentUrl.includes("FF.DMA.Administration.Form")) {
  $(".Admin").addClass("selected");
}
if (currentUrl.includes("FF.DMA.AppManage.Form")) {
  $(".Apps").addClass("selected");
}
if (currentUrl.includes("FF.DMA.Configurations.Form")) {
  $(".Setting").addClass("selected");
}
if (currentUrl.includes("FF.DMA.Tasks.Form")) {
  $(".Task").addClass("selected");
}
$(".Dashboard").click(function () {
  $("[name=btn_Dashbord_Form]").click();
});
$(".Requests").click(function () {
  $("[name=btn_Requests_Form]").click();
});
$(".Setting").click(function () {
  $("[name=btn_Setting_Form]").click();
});
$(".Admin").click(function () {
  $("[name=btn_Admin_Form]").click();
});
$(".Apps").click(function () {
  $("[name=btn_Apps_Form]").click();
});
$(".Task").click(function () {
  $("[name=btn_Task_Form]").click();
});
$(".Help").click(function () {
  $("[name=btn_Help_Form]").click();
});
$("[name=logo]").click(function () {
  $("[name=btn_Dashbord_Form]").click();
});
setInterval(function () {
  $(".Notification").text($("[name=dl_TaskCount]").text());
}, 500);
let previousText = $(".Notification").text();
setInterval(function () {
  currentText = $(".Notification").text();
  if (currentText !== previousText) {
    previousText = currentText;
  }
  if (
    $(".Notification").text().trim() == "0" ||
    $(".Notification").text().trim() == ""
  ) {
    $(".Notification").addClass("invisible");
  } else {
    $(".Notification").removeClass("invisible");
  }
}, 500);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(function () {
  $("[name='StatsUI']")
    .parent()
    .parent()
    .css({ width: "405px" })
    .addClass("ViewLayout");
  $("[name='ProgressUI']").parent().parent().addClass("ViewLayout");
  $("[name='TasksUI']").parent().parent().css({ width: "calc(100% - 405px)" });
  $("[name='StatsUI']").attr("data-width", "50%");
  $("[name='TasksUI']").attr("data-width", "50%");
  $(".input-control.checkbox.style-aware.checked ");
}, 10);
$("[name='MyRequestUI']")
  .insertAfter("[name='TasksUI']")
  .css({ "margin-top": "12px" });
$(".view:first")
  .children()
  .children()
  .children("*")
  .css({ "background-color": "#edeef8 !important" });
setInterval(function () {
  $("[name='btn_Environments_tab']").parent().css({
    "border-bottom": "1px solid #ededf7 !important",
    "padding-bottom": "0px",
  });
  if (
    $("[name='dl_TabIndex']").text().trim() == "0" ||
    $("[name='dl_TabIndex']").text().trim() == ""
  ) {
    $("[name='btn_Environments_tab']").addClass("tab_selected");
    $("[name='btn_Package_tab']").removeClass("tab_selected");
    $("[name='btn_Validation_tab']").removeClass("tab_selected");
  }
  if ($("[name='dl_TabIndex']").text().trim() == "1") {
    $("[name='btn_Environments_tab']").removeClass("tab_selected");
    $("[name='btn_Package_tab']").addClass("tab_selected");
    $("[name='btn_Validation_tab']").removeClass("tab_selected");
  }
  if ($("[name='dl_TabIndex']").text().trim() == "2") {
    $("[name='btn_Environments_tab']").removeClass("tab_selected");
    $("[name='btn_Package_tab']").removeClass("tab_selected");
    $("[name='btn_Validation_tab']").addClass("tab_selected");
  }
}, 10);
setInterval(function () {
  if ($("[name='dl_RoleConcat']").text().trim().includes("ADMIN")) {
    $(".Setting").css({ display: "flex" });
    $(".Admin").css({ display: "flex" });
    $(".Apps").css({ display: "flex" });
  } else {
    $(".Setting").css({ display: "none" });
    $(".Admin").css({ display: "none" });
    $(".Apps").css({ display: "none" });
  }
}, 10);

///////////////////////////////////////////////////////////////////////////////////////

$(function () {
  $(".theme-entry.runtime-form span.runtime-list-item").css(
    "font-family",
    "Poppins"
  );
  $(".selectWrapper").css("background-color", "#fff !important");
  $(".theme-entry .grid-header").css("padding", "0px");
  $(".theme-entry .grid .grid-column-headers").css("padding", "0px");
  $(".theme-entry .grid .grid-column-headers-wrapper").css("padding", "0px");
  $('span[name="IconCell"] img').css("border-radius", "10px");
  $('span[name*="InfoCell"]').css("border-radius", "3px");
});
