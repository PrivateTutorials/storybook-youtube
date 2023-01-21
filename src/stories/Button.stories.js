import Button from '../components/Button';

// Group Title and meta info
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        // means: "handleClick" prop that we pass in - is an action
        handleClick: {
            action: 'handleClickLabelThatWillBeDisplayedInActionsLog'
        }
    }
}

// Template - f() that accepts args prop and returns Comp with these args applied
const Template = args => <Button {...args}/>

// Named Story that has readOnly controls
// export const Red = () => <Button label="Press Me" backgroundColor="red"/>

// Named Story with interactive controls
export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'md'
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: 'Press Me',
    size: 'md'
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'sm'
}
