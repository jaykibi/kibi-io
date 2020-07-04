import React from 'react';
import { Document, Page } from 'react-pdf';


class Resume extends React.Component {
    render() {
        return (
            <div>
                <Document file="./resume.pdf">
                    <Page pageNumber={1} />
                </Document>
            </div>
        );
    }
}

export default Resume; 