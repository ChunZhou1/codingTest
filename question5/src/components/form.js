import React, { useState } from "react";

import { Row, Col, Input, Button } from "antd";

import "./css/form.css";

const { TextArea } = Input;

const BASE_URL = "https://api.datamuse.com/words?rel_rhy=";

const getRequest = (url, options) => {
  return window
    .fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw new Error("getRequest " + url + " error!");
      } else {
        return data;
      }
    });
};

export const Form_container = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = async () => {
    let data;
    let string;

    let url = BASE_URL + value;

    try {
      data = await getRequest(url);
    } catch (error) {
      console.log(error);
      setResult("something error");
      return;
    }

    if (data.length === 0) {
      setResult("we can not find");
      return;
    }

    string = "";
    for (let i = 0; i < data.length; i++) {
      string = string + data[i].word + " ";
    }
    setResult(string);
  };
  return (
    <div className="frame">
      <Row className="margin1">
        <span className="font1">Please input the word</span>
      </Row>
      <Row className="margin2">
        <Input
          className="input1"
          placeholder="word"
          value={value}
          onChange={handleChange}
        />
      </Row>

      <Row className="margin2">
        <Button className="input1" onClick={handleSearch}>
          Search
        </Button>
      </Row>

      <Row className="margin3"></Row>
      <Row className="margin2">
        <TextArea
          className="input2"
          rows={9}
          placeholder="Here is result"
          value={result}
        />
      </Row>
    </div>
  );
};
