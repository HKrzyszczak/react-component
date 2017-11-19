import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap';

const Form = () => {

    return (
        <form>
            <FormGroup>
                <ControlLabel>Label</ControlLabel>
                <FormControl type="text" placeholder="Enter text" />
                <HelpBlock>Hel block</HelpBlock>
            </FormGroup>
            <FormGroup>
                <Checkbox inline>
                    1
                </Checkbox>
            </FormGroup>
            <FormGroup>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                </FormControl>
            </FormGroup>
        </form>
    );

};

export default Form;