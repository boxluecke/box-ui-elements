import * as React from 'react';
import { shallow } from 'enzyme';
import Transcript from '../Transcript';

describe('components/ContentSidebar/Skills/Transcript/Transcript', () => {
    test('should correctly render read only Transcript when not editable', () => {
        const props = {
            card: {
                duration: 100,
                entries: [{ text: 'foo' }, { text: 'bar' }]
            },
            transcript: { duration: 100 },
            isEditable: false,
            onSkillChange: jest.fn()
        };

        const wrapper = shallow(<Transcript {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should correctly render error mask when no Transcript', () => {
        const props = {
            card: {
                duration: 100,
                entries: []
            },
            transcript: { duration: 100 },
            isEditable: true,
            onSkillChange: jest.fn()
        };

        const wrapper = shallow(<Transcript {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should correctly render editable Transcript when editable and editmode', () => {
        const props = {
            card: {
                duration: 100,
                entries: [{ text: 'foo' }, { text: 'bar' }]
            },
            transcript: { duration: 100 },
            isEditable: true,
            onSkillChange: jest.fn()
        };

        const wrapper = shallow(<Transcript {...props} />);
        wrapper.setState({ isEditing: true });

        expect(wrapper).toMatchSnapshot();
    });
});