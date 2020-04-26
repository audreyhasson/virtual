console.log("bananas");

// info for spreadsheet
const SPREADSHEET_ID = "1ERPiw7XimC9d8F_aeSX3sYJlbJlW_mSUy49C_JLLO4s";
const CLIENT_ID = "647809061303-v7l9rtvqc9icamf81mt3fep7u0na2e04.apps.googleusercontent.com";
const API_KEY = "AIzaSyCIZYvCysdZKP4XhNdYPR7paFiP3TDNXZs";
const SCOPE = "https://googleapis.com/auth/spreadsheets";


const submitButton = document.getElementById("submit-btn");

submitButton.onclick = function() {
  let name = document.getElementById("f-name").value;
  let email = document.getElementById("f-email").value;
  let number = document.getElementById("f-number").value;
  let entType = document.getElementById("f-ent-type").value;
  let date = document.getElementById("f-date").value;
  let startTime = document.getElementById("f-start-time").value;
  let endTime = document.getElementById("f-end-time").value;
  let questions = document.getElementById("f-questions").value;
  console.log(name + " " + email + " " + number + " " + entType + " " + date + " " + startTime + " " + endTime + " " + questions);
  document.getElementById("the-whole-form").classList.add("hideMe");
  document.getElementById("success-message").classList.remove("hideMe");
  //prepare data
  let data = {name: name, email: email, number: number, entType: entType, date: date, startTime: startTime, endTime: endTime, questions: questions};
  //test

  const SHEET_ID = '1ERPiw7XimC9d8F_aeSX3sYJlbJlW_mSUy49C_JLLO4s';
  const ACCESS_TOKEN = 'ya29.a0Ae4lvC3ap15qM6puCwahKZwfT9Ckj-mg39BP_L4ebwcckVVvyKyk-UCnyz3Ic7tetkhtQcM7s_jhHAR3UCMzxaiQ6ix4sKkhUi2GctaEP4gRE-XR4McvKjjdx-dsRsW83KWlXJJym0mFDDbioPwb5BKxPxkbnk-zXhQ';

  class App extends React.Component {
    updateSheetValues = () => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //update this token with yours.
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({

          requests: [{
            repeatCell: {
              range: {
                startColumnIndex: 0,
                endColumnIndex: 1,
                startRowIndex: 0,
                endRowIndex: 1,
                sheetId: 0
              },
              cell: {
                userEnteredValue: {
                  "numberValue": 10
                },
              },
              fields: "*"
            }
          }]

        })
      })
    }


    }
    console.log("The onclick event worked!");
  };
  //code for sending Email


// key: AIzaSyCIZYvCysdZKP4XhNdYPR7paFiP3TDNXZs
// client id: 647809061303-v7l9rtvqc9icamf81mt3fep7u0na2e04.apps.googleusercontent.com
// access token: ya29.a0Ae4lvC3ap15qM6puCwahKZwfT9Ckj-mg39BP_L4ebwcckVVvyKyk-UCnyz3Ic7tetkhtQcM7s_jhHAR3UCMzxaiQ6ix4sKkhUi2GctaEP4gRE-XR4McvKjjdx-dsRsW83KWlXJJym0mFDDbioPwb5BKxPxkbnk-zXhQ

//react?
'use strict';
