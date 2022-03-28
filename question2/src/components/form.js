import React from "react";

import { Row, Col, Input, DatePicker } from "antd";

import "./css/form.css";

const { TextArea } = Input;

export const Form_container = () => {
  return (
    <div className="frame">
      <Row className="margin1">
        <span className="font1">Your full given name:</span>
      </Row>
      <Row className="margin2">
        <Input className="input1" placeholder="Name" />
      </Row>

      <Row className="margin3">
        <Col span="10">
          <div style={{ marginBottom: "2%" }}>
            <span className="font1">Date of Birth</span>
          </div>
          <DatePicker className="datePick" />
        </Col>

        <Col span="14">
          <div style={{ marginBottom: "2%" }}>
            <span className="font1">Country of residence or citizenship</span>
          </div>
          <Input className="input1" placeholder="Country" />
        </Col>
      </Row>

      <Row className="margin4">
        <span className="font1">What school do you plan to attend:</span>
      </Row>
      <Row className="margin2">
        <Input className="input1" placeholder="School" />
      </Row>

      <Row className="margin3">
        <span className="font1">
          Please take a moment to describe your intended area of study?
        </span>
      </Row>
      <Row className="margin2">
        <TextArea
          className="input2"
          rows={9}
          placeholder="Enter details here"
        />
      </Row>
    </div>
  );
};
