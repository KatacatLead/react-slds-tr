import React, { PureComponent } from 'react';
import { ButtonGroup, Button, DateInput } from 'react-lightning-design-system';

function anonymous() {

}
 
export default class journeysList extends PureComponent {
    live() {
        var optionFrom = document.getElementById("optionsFrom").value = '';
        var optionTo = document.getElementById("optionsTo").value = '';
    }

    render() {
        return (
            <ButtonGroup>
                <DateInput className="calendar separator"
                    onBlur={anonymous()}
                    onValueChange={anonymous()}
                    onComplete={anonymous()}
                    id = "optionsFrom"
                />
                <DateInput className="calendar separator"
                    onBlur={anonymous()}
                    onValueChange={anonymous()}
                    onComplete={anonymous()}
                    id = "optionsTo"
                />
                <Button type="brand" onClick={anonymous()} className="separator">Search</Button>
                <Button type="neutral" onClick={this.live} className="separator">On Live</Button>
            </ButtonGroup>
        );
    }
}


