import * as React from "react";
import { Component } from "react";
import { Box, Divider, Flex, Heading, Textarea } from "rendition";
import { Form } from "rendition/dist/unstable";
import Links from "./Links.tsx";
import Permalink from "./Permalink.tsx";
import Playarea from "./Playarea.tsx";
import DSLEditor from "./DSLEditor.jsx";

const stringify = value => JSON.stringify(value, null, 2);

class App extends Component {
  constructor() {
    super();

    this.state = {
      json_schema_text: "",
      json_schema: {},
      ui_object_text: "",
      ui_object: {},
      yaml_text: "",
      has_error: false,
      formData: "",
      errors: ""
    };
  }

  componentDidMount() {
    this.setDataFromUrl();
  }

  setDataFromUrl() {
    const text = Permalink.decode();
    if (text) {
      this.setState({ yaml_text: text });
    }
  }

  renderFormData(event) {
    try {
      const data = event.formData;
      this.setState({ formData: stringify(data) });
    } catch (e) {
      console.log(e);
    }
  }

  noop() {}

  render() {
    return (
      <Box>
        <Links />
        <Divider />
        <Permalink text={this.state.yaml_text} />
        <DSLEditor text={this.state.yaml_text} />
        <Divider />
        {!this.state.has_error ? (
          <Box>
            <Box>
              <Heading.h4>Rendered form</Heading.h4>
              <Flex>
                <Form
                  schema={this.state.json_schema}
                  uiSchema={this.state.ui_object}
                  onFormSubmit={event => this.renderFormData(event)}
                />
              </Flex>
            </Box>
            {this.state.formData ? (
              <Box>
                <Heading.h4>Form data (dry json)</Heading.h4>
                <Flex>
                  <Playarea
                    placeholder={"form data"}
                    value={this.state.formData}
                    onChange={e => this.noop(e)}
                  />
                </Flex>
              </Box>
            ) : null}
          </Box>
        ) : null}
        <Divider />
        <Box>
          {!this.state.has_error ? (
            <Box>
              <Heading.h4>JSON and UI schemas</Heading.h4>
              <Flex>
                <Playarea
                  placeholder="json schema"
                  onChange={e => this.noop(e)}
                  value={this.state.json_schema_text}
                />
                <Playarea
                  placeholder="ui object"
                  onChange={e => this.noop(e)}
                  value={this.state.ui_object_text}
                />
              </Flex>
            </Box>
          ) : null}
        </Box>
        <Divider />
      </Box>
    );
  }
}

export default App;