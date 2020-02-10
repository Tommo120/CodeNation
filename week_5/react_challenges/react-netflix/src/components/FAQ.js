import React from 'react';
import ExpandingItem from './ExpandingItem';

export default function FAQ(props) {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{color: "white", textAlign: "center"}}>Frequently Asked Questions</h1>
            <ExpandingItem SectionHeading="What is happening?" mainContent="I'm not sure!"/>
            <ExpandingItem SectionHeading="Where am I?" mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum egestas augue non consequat. Vestibulum gravida elit ut magna tempus dignissim. Sed tempus magna sit amet interdum fermentum. Fusce eget ultrices metus. Fusce tempus consequat pellentesque. Nulla ac sagittis lacus, eu interdum nibh. Donec pretium semper lectus ut pretium. Nullam tempor mauris a tellus sollicitudin fermentum ut eget nisl. Proin sit amet aliquam nunc, in placerat nulla. Vivamus elementum ante nec ipsum fermentum pretium. Etiam aliquam ex sed nibh lacinia iaculis. Praesent vel magna pulvinar, eleifend neque sed, vehicula odio."/>
            <ExpandingItem SectionHeading="How did I get here?" mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel metus non erat malesuada porta eu eu lacus. Suspendisse blandit pellentesque massa. In gravida blandit eros, a auctor lectus sollicitudin a. Proin consectetur eget urna vitae pharetra. Nullam vitae sem."/>
            <ExpandingItem SectionHeading="What am I doing?" mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ante et nulla faucibus, et sodales tortor."/>
        </div>
    )
}
