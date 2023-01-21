import Stack from '../components/Stack';
import {number} from "prop-types";

// Group Title and meta info
export default {
    title: 'Components/Stack', component: Stack, argTypes: {
        // passing additional argument, that is not defined in the Comp props
        numberOfChildren: {
            type: number, defaultValue: 4
        }
    }
}

// extracting "numberOfChildren" from args
const Template = ({numberOfChildren, ...args}) => (<Stack {...args} >
        {[...Array(numberOfChildren).keys()].map(num => (
            <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                {num + 1}
            </div>
        ))}
    </Stack>
)

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: 'row',
    spacing: 2,
    wrap: false
}

export const Vertical = Template.bind({});
Vertical.args = {
    direction: 'column',
    spacing: 2,
    wrap: false
}

export const EmptyContainer = Template.bind({});
EmptyContainer.args = {
    numberOfChildren: 0,``
    direction: 'row',
    spacing: 2,
    wrap: false
}
